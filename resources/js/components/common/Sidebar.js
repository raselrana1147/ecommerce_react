import React,{Component} from 'react'
import {Link } from "react-router-dom";
import { PUBLIC_PATH } from '../Helper/ProjectPath';

class Sidebar extends Component {
   
    render() { 
        const imageOpacity={
            opacity:'.8'
        }
        return ( 
           <React.Fragment>
                              <aside class="main-sidebar sidebar-dark-primary elevation-4">
  <a href="index3.html" class="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
         style={imageOpacity} />
    <span class="brand-text font-weight-light">AdminLTE 3</span>
  </a>

  <div class="sidebar">

    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <div class="image">
        <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
      </div>
      <div class="info">
        <a href="#" class="d-block">Alexander Pierce</a>
      </div>
    </div>
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        
        <li class="nav-item">
          <Link to={`${PUBLIC_PATH}show-category`} class="nav-link">
            <i class="nav-icon fas fa-th"></i>
            <p>
              All Categories
              <span class="right badge badge-danger">New</span>
            </p>
          </Link>
        </li>

        <li class="nav-item">
          <Link to={`${PUBLIC_PATH}show-product`} class="nav-link">
            <i class="nav-icon fas fa-th"></i>
            <p>
              All Products
              <span class="right badge badge-danger">New</span>
            </p>
          </Link>
        </li>
      
      
       
      </ul>
    </nav>
  </div>
</aside>

           </React.Fragment>
         );
    }
}
 
export default Sidebar;