import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Questions } from './Questions';

import Styles from './Styles.module.scss';

const App = () => {
  return (
    <div className={Styles.App}>
      <Header />
      <Questions />
      <Footer />
    </div>
  );
};

export default App;
