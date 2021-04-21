import React from 'react';
import ReactDOM from 'react-dom';
import ClickityClick from './components/ClickityClick'
import ButtonCounter from './components/ButtonCounter'
import LightSwitch from './components/LightSwitch'

ReactDOM.render(
  
  <div>Mount Components Here
  <ClickityClick />, document.getElementById('root')
  <LightSwitch />
  <ButtonCounter />

  </div>,
  document.getElementById('root')
);
