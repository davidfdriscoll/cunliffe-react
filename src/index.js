import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const CUNLIFFE5WORDS = [
  { headword: 'ἀγακλυτός', etym: '[ἀγα- + κλυτός.]', def: '= ἀγακλειτός' },
  { headword: 'ἀγάλλω', etym: '', def: 'To exult' },
  { headword: 'ἄγαλμα', etym: '', def: 'An ornament, a glory or delight' },
  { headword: '†ἄγαμαι', etym: '', def: 'To wonder, marvel' },
  { headword: 'ἄγαμος', etym: '[ἀ-1 + γάμος]', def: 'Unmarried' }
];

ReactDOM.render(
  <React.StrictMode>
    <App words={CUNLIFFE5WORDS} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
