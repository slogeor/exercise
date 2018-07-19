import React from 'react';

export const themes = {
  red: {
    background: 'red',
    color: 'white'
  },
  blue: {
    background: '#blue',
    color: '#red',
  },
};

export const ThemeContext = React.createContext({
  background: '#green',
  color: '#FF5000'
});
