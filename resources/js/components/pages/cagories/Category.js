import Axios from 'axios';
import React, {Component} from 'react';
import { Spinner } from 'react-bootstrap';
import {Link } from "react-router-dom";
import { PUBLIC_PATH } from '../../Helper/ProjectPath';
class Category extends Component {

  state={
    categories:[],
    isLoading:false,
  }

  componentDidMount=()=>{
    this.getAllCategory();
  }

  getAllCategory=()=>{
    this.setState({
      isLoading:true
    })
    Axios.get('http://localhost/templateMastering/api/category').then((response)=>{
      this.setState({
        categories:response.data.data,
      }) 
      
      this.setState({
        isLoading:false
      })
    });
   
  }
  changeStatus=(id)=>{
    Axios.get(`http://localhost/templateMastering/api/category/status/${id}`).then((response)=>{
       if (response.data.type===true) {
          this.getAllCategory();
       }
    });
  } 

  deleteCategory=(id)=>{
    Axios.delete(`http://localhost/templateMastering/api/category/${id}`).then((response)=>{
       if (response.data.type===true) {
          this.getAllCategory();
       }
    });
  }

    render() { 
        return ( 
           <>
      <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">

          {this.state.isLoading && (
                 <div className="text-center mt-5">
                      <Spinner animation="grow" variant="danger" />
                  </div>
                )}
              
            <Link to={`${PUBLIC_PATH}add-category`} className="btn btn-danger  mb-2">Add New</Link>
            
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">All The Category List</h3>
              </div>
              <div class="card-body">
                <table id="all-category-table" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>Serial</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th> 
                  </tr>
                  </thead>
                  <tbody>
                  {
                    this.state.categories.map((category,index)=>(
                      <tr key={index}>
                    <td>{index}</td>
                    <td>{category.name}</td>
                    <td>
                       <button className="btn btn-danger" onClick={()=>this.changeStatus(category.id)}>{category.status===1 ? (<span>Active</span>) : (<span>Inactive</span>)}</button>
                    </td>
                    <td>
                      <button className='btn btn-danger' onClick={()=>this.deleteCategory(category.id)}>Delete</button>
                      <Link to={`${PUBLIC_PATH}edit-category/${category.id}`} className="btn btn-warning  ml-2">Edit</Link>
                    </td>
                   </tr>
                    )) 
                  }
                  </tbody>
                  <tfoot>
                  <tr>
                  <th>Serial</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
           </>
         );
    }
}
 
export default Category;