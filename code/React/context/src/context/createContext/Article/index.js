import React from 'react';
import Header from '../Header';
import {ThemeContext, themes } from '../ThemeContext';

class Article extends React.Component {
  render () {
    return (
      <ThemeContext.Provider value={themes.red}>
        <Header />
      </ThemeContext.Provider>
    );
  }
}

export default Article;
