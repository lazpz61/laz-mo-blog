import { json, response } from 'express'
import React, { Component } from 'react'

export default class BlogPage extends Component {
    constructor(props) {
       super(props)

       this.state = {}
   }


   componentDidMount(){
       fetch("https://app-in-a-day-round2.herokuapp.com/blog/get")
       .then(response => response.json())
       .then(response)
   }



   render() {
       return (
         <div className='blog-page-wrapper'>
               Blog Page to view Blogs 
         </div>
       )
   }
}