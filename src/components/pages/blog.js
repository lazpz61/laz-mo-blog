import React, { Component } from 'react'

export default class Blog extends Component {
    constructor(props) {
       super(props)

       this.state = {
           
       }
   }

   handleTitleChange(event) {
    this.setState ({ title: event.target.value })
  }
  handleContentChange(event) {
    this.setState ({ content : event.target.value})
  }
  handleUserIdChange(event) {
    this.setState ({ user_id : event.target.value})
  }
  handleSubmit() {
    fetch('https://app-in-a-day-round2.herokuapp.com/blog/add', {
           method : "POST",
           headers : { "content-type" : "application/json" },
           body: JSON.stringify ({
               title : this.state.title,
               content : this.state.content,
               user_id : this.state.user_id
           })
          }) 
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.log("Error: POST REQUEST -", error))
          console.log("testing post")
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