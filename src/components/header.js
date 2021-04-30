import React from 'react'


import logo from "../../static/assets/images/mo-laz-blog.png"



export default function header(props) {
   return (
      <div className='header-wrapper'>
          <div className="left-column">
              <img src={logo} alt = "" />
          </div>

          <div className="right-colunm">
              Sign In and Login
          </div>
      </div>
   )
}