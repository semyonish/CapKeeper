import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {CapFolder} from './CapFolder'


ReactDOM.render(
    <React.StrictMode>
        <CapFolder name={"Облигации"} count={40000}/>
        <CapFolder name={"Дивидентные акции"} count={32000}/>
     </React.StrictMode>,
  document.getElementById('root')
);

