/*
    Model grid:

    | 2 | 2 | 2 | 2 | 2 | 2 |
    |       8       |   4   |
    |      7      |    5    |
    |   4   |   4   |   4   |
    |           12          |
    |           12          |
    |           12          |
*/

export const PAYLOAD = {
  code: 'complex_model',
  description: 'Complex Page Model',
  template: '<html></html>',
  configuration: {
    frames: [
      {
        defaultWidget: null,
        descr: 'Top bar 1',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 0,
        sketch: {
          x1: 0,
          x2: 1,
          y1: 0,
          y2: 0,
        },
      },
      {
        defaultWidget: null,
        descr: 'Top Bar 2',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 1,
        sketch: {
          x1: 2,
          x2: 3,
          y1: 0,
          y2: 0,
        },
      },
      {
        defaultWidget: null,
        descr: 'Top Bar 3',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 2,
        sketch: {
          x1: 4,
          x2: 5,
          y1: 0,
          y2: 0,
        },
      },
      {
        defaultWidget: null,
        descr: 'Top Bar 4',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 3,
        sketch: {
          x1: 6,
          x2: 7,
          y1: 0,
          y2: 0,
        },
      },
      {
        defaultWidget: null,
        descr: 'Top Bar 5',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 4,
        sketch: {
          x1: 8,
          x2: 9,
          y1: 0,
          y2: 0,
        },
      },
      {
        defaultWidget: null,
        descr: 'Top Bar 6',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 5,
        sketch: {
          x1: 10,
          x2: 11,
          y1: 0,
          y2: 0,
        },
      },
      {
        defaultWidget: null,
        descr: 'Main Bar 1',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 6,
        sketch: {
          x1: 0,
          x2: 7,
          y1: 1,
          y2: 1,
        },
      },
      {
        defaultWidget: null,
        descr: 'Main Bar 2',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 7,
        sketch: {
          x1: 8,
          x2: 11,
          y1: 1,
          y2: 1,
        },
      },
      {
        defaultWidget: null,
        descr: 'Sub Bar 1',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 8,
        sketch: {
          x1: 0,
          x2: 6,
          y1: 2,
          y2: 2,
        },
      },
      {
        defaultWidget: null,
        descr: 'Sub Bar 2',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 9,
        sketch: {
          x1: 7,
          x2: 11,
          y1: 2,
          y2: 2,
        },
      },
      {
        defaultWidget: null,
        descr: 'Content 1 left',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 10,
        sketch: {
          x1: 0,
          x2: 3,
          y1: 3,
          y2: 3,
        },
      },
      {
        defaultWidget: null,
        descr: 'Content 1 center',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 11,
        sketch: {
          x1: 4,
          x2: 7,
          y1: 3,
          y2: 3,
        },
      },
      {
        defaultWidget: null,
        descr: 'Content 1 right',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 12,
        sketch: {
          x1: 8,
          x2: 11,
          y1: 3,
          y2: 3,
        },
      },
      {
        defaultWidget: null,
        descr: 'Content 2',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 13,
        sketch: {
          x1: 0,
          x2: 11,
          y1: 4,
          y2: 4,
        },
      },
      {
        defaultWidget: null,
        descr: 'Content 3',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 14,
        sketch: {
          x1: 0,
          x2: 11,
          y1: 5,
          y2: 5,
        },
      },
      {
        defaultWidget: null,
        descr: 'Footer',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 15,
        sketch: {
          x1: 0,
          x2: 11,
          y1: 6,
          y2: 6,
        },
      },
    ],
  },
};


export const CELL_MAP = {
  'root:0-0/11-6': {
    x1: 0,
    x2: 11,
    y1: 0,
    y2: 6,
    type: 'root',
    key: 'root:0-0/11-6',
  },
  'col:0-0/1-0': {
    x1: 0,
    x2: 1,
    y1: 0,
    y2: 0,
    type: 'col',
    key: 'col:0-0/1-0',
    parentKey: 'row:0-0/11-0',
    framePos: 0,
    frameDescr: 'Top bar 1',
  },
  'col:2-0/3-0': {
    x1: 2,
    x2: 3,
    y1: 0,
    y2: 0,
    type: 'col',
    key: 'col:2-0/3-0',
    parentKey: 'row:0-0/11-0',
    framePos: 1,
    frameDescr: 'Top Bar 2',
  },
  'col:4-0/5-0': {
    x1: 4,
    x2: 5,
    y1: 0,
    y2: 0,
    type: 'col',
    key: 'col:4-0/5-0',
    parentKey: 'row:0-0/11-0',
    framePos: 2,
    frameDescr: 'Top Bar 3',
  },
  'col:6-0/7-0': {
    x1: 6,
    x2: 7,
    y1: 0,
    y2: 0,
    type: 'col',
    key: 'col:6-0/7-0',
    parentKey: 'row:0-0/11-0',
    framePos: 3,
    frameDescr: 'Top Bar 4',
  },
  'col:8-0/9-0': {
    x1: 8,
    x2: 9,
    y1: 0,
    y2: 0,
    type: 'col',
    key: 'col:8-0/9-0',
    parentKey: 'row:0-0/11-0',
    framePos: 4,
    frameDescr: 'Top Bar 5',
  },
  'col:10-0/11-0': {
    x1: 10,
    x2: 11,
    y1: 0,
    y2: 0,
    type: 'col',
    key: 'col:10-0/11-0',
    parentKey: 'row:0-0/11-0',
    framePos: 5,
    frameDescr: 'Top Bar 6',
  },
  'col:0-1/7-1': {
    x1: 0,
    x2: 7,
    y1: 1,
    y2: 1,
    type: 'col',
    key: 'col:0-1/7-1',
    parentKey: 'row:0-1/11-1',
    framePos: 6,
    frameDescr: 'Main Bar 1',
  },
  'col:8-1/11-1': {
    x1: 8,
    x2: 11,
    y1: 1,
    y2: 1,
    type: 'col',
    key: 'col:8-1/11-1',
    parentKey: 'row:0-1/11-1',
    framePos: 7,
    frameDescr: 'Main Bar 2',
  },
  'col:0-2/6-2': {
    x1: 0,
    x2: 6,
    y1: 2,
    y2: 2,
    type: 'col',
    key: 'col:0-2/6-2',
    parentKey: 'row:0-2/11-2',
    framePos: 8,
    frameDescr: 'Sub Bar 1',
  },
  'col:7-2/11-2': {
    x1: 7,
    x2: 11,
    y1: 2,
    y2: 2,
    type: 'col',
    key: 'col:7-2/11-2',
    parentKey: 'row:0-2/11-2',
    framePos: 9,
    frameDescr: 'Sub Bar 2',
  },
  'col:0-3/3-3': {
    x1: 0,
    x2: 3,
    y1: 3,
    y2: 3,
    type: 'col',
    key: 'col:0-3/3-3',
    parentKey: 'row:0-3/11-3',
    framePos: 10,
    frameDescr: 'Content 1 left',
  },
  'col:4-3/7-3': {
    x1: 4,
    x2: 7,
    y1: 3,
    y2: 3,
    type: 'col',
    key: 'col:4-3/7-3',
    parentKey: 'row:0-3/11-3',
    framePos: 11,
    frameDescr: 'Content 1 center',
  },
  'col:8-3/11-3': {
    x1: 8,
    x2: 11,
    y1: 3,
    y2: 3,
    type: 'col',
    key: 'col:8-3/11-3',
    parentKey: 'row:0-3/11-3',
    framePos: 12,
    frameDescr: 'Content 1 right',
  },
  'col:0-4/11-4': {
    x1: 0,
    x2: 11,
    y1: 4,
    y2: 4,
    type: 'col',
    key: 'col:0-4/11-4',
    parentKey: 'row:0-4/11-4',
    framePos: 13,
    frameDescr: 'Content 2',
  },
  'col:0-5/11-5': {
    x1: 0,
    x2: 11,
    y1: 5,
    y2: 5,
    type: 'col',
    key: 'col:0-5/11-5',
    parentKey: 'row:0-5/11-5',
    framePos: 14,
    frameDescr: 'Content 3',
  },
  'col:0-6/11-6': {
    x1: 0,
    x2: 11,
    y1: 6,
    y2: 6,
    type: 'col',
    key: 'col:0-6/11-6',
    parentKey: 'row:0-6/11-6',
    framePos: 15,
    frameDescr: 'Footer',
  },
  'row:0-0/11-0': {
    x1: 0,
    x2: 11,
    y1: 0,
    y2: 0,
    type: 'row',
    key: 'row:0-0/11-0',
    parentKey: 'root:0-0/11-6',
  },
  'row:0-1/11-1': {
    x1: 0,
    x2: 11,
    y1: 1,
    y2: 1,
    type: 'row',
    key: 'row:0-1/11-1',
    parentKey: 'root:0-0/11-6',
  },
  'row:0-2/11-2': {
    x1: 0,
    x2: 11,
    y1: 2,
    y2: 2,
    type: 'row',
    key: 'row:0-2/11-2',
    parentKey: 'root:0-0/11-6',
  },
  'row:0-3/11-3': {
    x1: 0,
    x2: 11,
    y1: 3,
    y2: 3,
    type: 'row',
    key: 'row:0-3/11-3',
    parentKey: 'root:0-0/11-6',
  },
  'row:0-4/11-4': {
    x1: 0,
    x2: 11,
    y1: 4,
    y2: 4,
    type: 'row',
    key: 'row:0-4/11-4',
    parentKey: 'root:0-0/11-6',
  },
  'row:0-5/11-5': {
    x1: 0,
    x2: 11,
    y1: 5,
    y2: 5,
    type: 'row',
    key: 'row:0-5/11-5',
    parentKey: 'root:0-0/11-6',
  },
  'row:0-6/11-6': {
    x1: 0,
    x2: 11,
    y1: 6,
    y2: 6,
    type: 'row',
    key: 'row:0-6/11-6',
    parentKey: 'root:0-0/11-6',
  },
};
