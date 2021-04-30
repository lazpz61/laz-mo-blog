import React from 'react'
import { Link } from "react-router-dom"
import { withRouter} from "react-router";


import logo from "../../static/assets/images/mo-laz-blog.png"



export default function header(props) {
   return (
      <div className='header-wrapper'>
          <div className="left-column">
              <img src={logo} alt = "" />
          </div>
      </div>
   )
}