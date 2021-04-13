import Axios from 'axios';
import React,{Component} from 'react'
import { Spinner } from 'react-bootstrap';
import {Link } from "react-router-dom";
import { PUBLIC_PATH } from '../../Helper/ProjectPath';

class Product extends Component {
    state={
        isLoading:false,
        products:[],
    }

    componentDidMount=()=>{
        this.getAllProduct();
    }
    getAllProduct=()=>{
      this.setState({
        isLoading:true
      })
        Axios.get('http://localhost/templateMastering/api/products').then((response)=>{
            console.log(response);
           
           this.setState({
             products:response.data.data,
             isLoading:false
           })
        })
    }
    changeStatus=()=>{

    }
    deleteProduct=()=>{

    }
    render() { 
        return ( 
            <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">

          {this.state.isLoading && (
                 <div className="text-center mt-5">
                      <Spinner animation="grow" variant="danger" />
                  </div>
                )}
              
            <Link to={`${PUBLIC_PATH}add-product`} className="btn btn-danger  mb-2">Add New</Link>
            
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">All The Product List</h3>
              </div>
              <div class="card-body">
                <table id="all-category-table" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>Serial</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    this.state.products.map((product,index)=>(
                      <tr key={index}>
                    <td>{index}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.category.name}</td>
                    <td>
                       <button className="btn btn-danger" onClick={()=>this.changeStatus(product.id)}>{product.status===1 ? (<span>Active</span>) : (<span>Inactive</span>)}</button>
                    </td>
                    <td>
                      <button className='btn btn-danger' onClick={()=>this.deleteProduct(product.id)}>Delete</button>
                      <Link to={`${PUBLIC_PATH}edit-product/${product.id}`} className="btn btn-warning  ml-2">Edit</Link>
                    </td>
                   </tr>
                    )) 
                  }
                  </tbody>
                  <tfoot>
                  <tr>
                   <th>Serial</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
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
         );
    }
}
 
export default Product;