import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './components/App';

import { fab } from '@fortawesome/free-brands-svg-icons';
import {faChevronLeft, faChevronDown, faCog, faSearch, faArrowDown} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab, faChevronDown, faChevronLeft, faCog, faSearch, faArrowDown);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
