export const imageDefaultState = {
  id: 'c5280b2e-30a7-47e3-be61-6528e7f4e5b3',
  cells: [
    {
      id: 'd7dbad16-01a6-4f0b-b6d7-1bd1cb16a642',
      inline: null,
      size: 12,
      content: {
        plugin: {
          name: 'ory/editor/core/content/slate',
          version: '0.0.4',
        },
        state: {
          slate: [
            {
              type: 'PARAGRAPH/PARAGRAPH',
              children: [{ text: 'A text' }],
              data: { align: 'center' },
            },
          ],
        },
      },
    },
    {
      id: 'cc8dd504-1e09-410e-9f92-5661b5eeb01a',
      inline: null,
      size: 12,
      content: {
        plugin: {
          name: 'ory/editor/core/content/image',
          version: '0.0.1',
        },
        state: { src: 'https://picsum.photos/200/50', searchList: [] },
      },
    },
  ],
};
