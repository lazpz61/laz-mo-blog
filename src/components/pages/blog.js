import React, { Component } from 'react'

export default class Blog extends Component {
    constructor(props) {
       super(props)

       this.state = {
           
       }
   }

   render() {
       return (
        <div className='blog-posts'>
        <div className="blog-title-wrapper">
            <div>
               <h1>Blog Post Title</h1> 
            </div>

            <div>
                <button>Edit</button>
            </div>    
        </div>

        <div className="blog-post-text">
        <textarea typ="text" name="title" placeholder="Title"/>   
        <textarea typ="text" name="description" placeholder="Start Blogging"/>   
        </div>  

        <div className="blog-post-button">
            <button type="submit">Post</button>
        </div>        
      </div>
       )
   }
}