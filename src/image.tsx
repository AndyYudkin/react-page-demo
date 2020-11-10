import React, { Component } from 'react';

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
    let imageState: any = null;
    let text: string | null = null;
    state.cells.forEach((cell0: any) => {
      if (cell0.hasOwnProperty('rows')) {
        for (const row0 of cell0.rows) {
          row0.cells.forEach((cell1: any) => {
            if (text == null) {
              text = this.findTextInCell(cell1);
            }
            if (imageState == null) {
              imageState = this.findImageInCell(cell1);
            }
          })
        }
      } else {
        if (text == null) {
          text = this.findTextInCell(cell0);
        }
        if (imageState == null) {
          imageState = this.findImageInCell(cell0);
        }
      }
    })
    if (text != null && imageState != null) {
      switch (text) {
        case 'cat': {
          imageState.src = `https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg`;
          imageState.searchList = ['https://nen.press/wp-content/uploads/2017/08/cat-1.jpg', 'https://images.theconversation.com/files/297893/original/file-20191021-56215-1wq7k71.jpg'];
          break;
        }
        case 'dog': {
          imageState.src = `https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp`;
          imageState.searchList = ['https://static1.bigstockphoto.com/0/6/2/large1500/260666896.jpg', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg']
          break;
        }
        case 'mouse': {
          imageState.src = `https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto:best,f_auto,dpr_2.0/content/dam/gaming/en/products/pro-mouse/promouse-hero.png`;
          imageState.searchList = [];
          break;
        }
      }
    }
    this.setState(() => state);
  }

  findTextInCell = (cell: any): string => {
    let result = null;
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
