import Axios from 'axios';
import React, {Component} from 'react';
import { Spinner } from 'react-bootstrap';
import {Link,withRouter} from "react-router-dom";
import { PUBLIC_PATH } from '../../Helper/ProjectPath';
class AddProduct extends Component {

  state={
     name:'',
     price:'',
     category_id:'',
     successMessage:'',
     errorMessage:'',
     isLoading:'',
     categories:[]
  }

    componentDidMount=()=>{
        this.getAllCategory();
  }


  getAllCategory=()=>{
    Axios.get('http://localhost/templateMastering/api/category').then((response)=>{
        this.setState({
            categories:response.data.data
        });
  })
}

  changeInput=(e)=>{
    this.setState({
     [e.target.name] : e.target.value
    })
  }

  AddProduct=(e)=>{
    e.preventDefault();
    const {history}=this.props;
    const data={
      name:this.state.name,
      price:this.state.price,
      category_id:this.state.category_id
    }
    Axios.post('http://localhost/templateMastering/api/products',data).then((response)=>{
      if(response.data.type){
        this.setState({
          successMessage:response.data.message,
          errorMessage:'',
          name:'',
        
        })
        history.push(`${PUBLIC_PATH}show-product`)
      }else{
        this.setState({
          errorMessage:response.data.message,
         
        })
      }
    });

  }

    render() { 
        return ( 
           <>
      <section class="content">
      <div class="container-fluid">
        <div class="row">
        <div class="col-md-2 "></div>
        <div class="col-md-8 ">
             {this.state.isLoading && (
                 <div className="text-center mt-5">
                      <Spinner animation="grow" variant="danger" />
                  </div>
                )}
        <Link to={`${PUBLIC_PATH}show-product`} className="btn btn-danger  mb-2">Go Back</Link>
            <div class="card card-danger">
              <div class="card-header">
                <h3 class="card-title">Add New Product</h3>
              </div>
              <form role="form" onSubmit={this.AddProduct}>
                <div class="card-body">
                  <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" name="name" onChange={(e)=> this.changeInput(e)} value={this.state.name}/>
                    {this.state.errorMessage.name &&(
                      <span className="text-danger">{this.state.errorMessage.name}</span>
                    )}
                  </div>

                  <div class="form-group">
                    <label>Price</label>
                    <input type="text" class="form-control" name="price" onChange={(e)=> this.changeInput(e)} value={this.state.price}/>
                    {this.state.errorMessage.name &&(
                      <span className="text-danger">{this.state.errorMessage.price}</span>
                    )}
                  </div>

                  <div class="form-group">
                    
                        <label>Select</label>
                        <select class="form-control" name="category_id" onChange={(e)=> this.changeInput(e)} value={this.state.category_id}>
                        <option value="">Select Category</option>
                        {
                           this.state.categories.map((category,index)=>(
                               <option value={category.id}>{category.name}</option>
                           ))
                        }
                        
                        </select>
                        {this.state.errorMessage.name &&(
                      <span className="text-danger">{this.state.errorMessage.category_id}</span>
                    )}
                 </div>
                  

                </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-danger">Add Product</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-2 "></div>
        </div>
      </div>
    </section>
           </>
         );
    }
}
 
export default withRouter(AddProduct);