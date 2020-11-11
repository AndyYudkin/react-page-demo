import React, { Component } from 'react';
import axios, { AxiosResponse } from 'axios';

import Editor from '@react-page/editor';
import slate from '@react-page/plugins-slate';

import { imagePlugin } from './plugins/image';
import { ImageUploadType } from '@react-page/ui/lib/ImageUpload/types';
import '@react-page/plugins-image/lib/index.css';

import { imageDefaultState } from './image-default-state';

const fakeImageUploadService: (url: string) => ImageUploadType = (
  defaultUrl
) => (file, reportProgress) => {
  return new Promise((resolve, reject) => {
    let counter = 0;
    const interval = setInterval(() => {
      counter++;
      reportProgress(counter * 10);
      if (counter > 9) {
        clearInterval(interval);
        alert(
          'This is a fake image upload service, please provide actual implementation via plugin properties'
        );
        resolve({ url: defaultUrl });
      }
    }, 500);
  });
};

const plugins = {
  content: [
    slate(),
    imagePlugin({ imageUpload: fakeImageUploadService('/images/react.png') }),
  ]
};

export class ImagePlugin extends Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = imageDefaultState;
  }

  onChange = (state: any) => {
    let inputText: string = '';
    state.cells.forEach((cell0: any) => {
      if (cell0.hasOwnProperty('rows')) {
        for (const row0 of cell0.rows) {
          row0.cells.forEach((cell1: any) => {
            if (inputText.length === 0) {
              inputText = this.findTextInCell(cell1);
            }
          })
        }
      } else {
        if (inputText.length === 0) {
          inputText = this.findTextInCell(cell0);
        }
      }
    })
    if (inputText != null) {
      if (inputText.length > 2) {
        axios.get(`https://ss.getarchive.net/api/v1/search?text=${inputText}`).then(this.parse).catch(error => console.log(error));
      }
    }
    this.setState(() => state);

  }

  parse = (response: AxiosResponse): {thumb: string, full: string}[] => {
    const result: {thumb: string, full: string}[] = [];
    response.data.items.forEach((item: any) => result.push( {thumb: item.resources[0].url, full: item.resources[item.resources.length - 1].url}));
    console.log(result);
    if (result.length > 0) {
      this.setState((prev: any) => {
        let imageState: any = null;
        prev.cells.forEach((cell0: any) => {
          if (cell0.hasOwnProperty('rows')) {
            for (const row0 of cell0.rows) {
              row0.cells.forEach((cell1: any) => {
                if (imageState == null) {
                  imageState = this.findImageInCell(cell1);
                }
              })
            }
          } else {
            if (imageState == null) {
              imageState = this.findImageInCell(cell0);
            }
          }
        });
        if (imageState != null) {
          imageState.src = result[0].full;
          imageState.searchList = [];
          result.forEach((item: {thumb: string, full: string}, index: number) => {
            if (index > 0) {
              imageState.searchList.push(item);
            }
          })
        }
        return prev;
      })
    }
    return result;
  }

  findTextInCell = (cell: any): string => {
    let result = '';
    if (cell.content.plugin.name === `ory/editor/core/content/slate`) {
      if (cell.content.state.slate.length > 0) {
        const {children} = cell.content.state.slate[0];
        for (const child of children) {
          if (child.hasOwnProperty('text')) {
            result = child.text;
          }
        }
      }
    }
    return result;
  }

  findImageInCell = (cell: any): any => {
    let result = null;
    if (cell.content.plugin.name === `ory/editor/core/content/image`) {
      result = cell.content.state;
    }
    return result;
  }
  
  render() {
    return (
      <Editor
        plugins={plugins}
        defaultPlugin={slate()}
        value={this.state}
        onChange={this.onChange}
      />
    );
  };
}
