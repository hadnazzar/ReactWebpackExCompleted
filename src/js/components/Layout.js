import React from 'react';

import Header from './Header'
import Footer from './Footer'
export  default class Layout extends React.Component {
  constructor() {
    super();
    this.name = "Momoware";
  }

  render() {
      return(
        <div>
          <Header/>
          <Footer/>
        </div>
      );
  }
}
