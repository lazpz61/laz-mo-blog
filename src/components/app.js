import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";


import Header from "./header"
import Footer from "./footer"
import Blog from "./pages/blog"
import BlogPage from "./pages/blog-page"


export default class App extends Component {
  constructor(){
    super();

  }
  render() {
    return (

      <div>

         <BrowserRouter>


         <div className='app'>
              
            <Header />

              <Switch>
              <Route path="/blog" component={Blog} />
              <Route path="/blog-page" component={BlogPage} />
              </Switch> 

            <Footer />

          </div>

          </BrowserRouter> 
      </div>
    );
  }
}
