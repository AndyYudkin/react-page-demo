import ReactDOM from 'react-dom';
import React from 'react';

import '@react-page/core/lib/index.css';
import '@react-page/ui/lib/index.css';
import '@react-page/plugins-slate/lib/index.css';
import '@react-page/plugins-background/lib/index.css';

import { ImagePlugin } from './plugin/image';

const ReactPageDemo = () => {
  return (
    <ImagePlugin />
  );
};

ReactDOM.render(<ReactPageDemo />, document.getElementById('root'));
