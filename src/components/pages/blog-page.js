import React, { Component } from 'react'

export default class BlogPage extends Component {
    constructor(props) {
       super(props)

       this.state = {
           title: "",
           content: "",

       }
   }

   


//    componentDidMount(){
//        fetch("https://app-in-a-day-round2.herokuapp.com/blog/get/")
//        .then(response => response.json())
//        .then(response)
//    }

//    renderBlog(){

//    }


   render() {
       return (
         <div className='blog-page-wrapper'>
               {/* {this.renderBlog} */}
         </div>
       )
   }
}