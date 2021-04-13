import Axios from 'axios';
import React, {Component} from 'react';
import { Spinner } from 'react-bootstrap';
import {Link,withRouter} from "react-router-dom";
import { PUBLIC_PATH } from '../../Helper/ProjectPath';
class AddCategory extends Component {

  state={
     name:'',
     successMessage:'',
     errorMessage:'',
     isLoading:''
  }

  changeInput=(e)=>{
    this.setState({
     [e.target.name] : e.target.value
    })
  }

  AddCategory=(e)=>{
    e.preventDefault();
    const {history}=this.props;
    const data={
      name:this.state.name
    }
    Axios.post('http://localhost/templateMastering/api/category',data).then((response)=>{
      if(response.data.type){
        this.setState({
          successMessage:response.data.message,
          errorMessage:'',
          name:'',
        
        })
        history.push(`${PUBLIC_PATH}show-category`)
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
        <Link to={`${PUBLIC_PATH}show-category`} className="btn btn-danger  mb-2">Go Back</Link>
            <div class="card card-danger">
              <div class="card-header">
                <h3 class="card-title">Add New Category</h3>
              </div>
              <form role="form" onSubmit={this.AddCategory}>
                <div class="card-body">
                  <div class="form-group">
                    <label>Category Name</label>
                    <input type="text" class="form-control" name="name" onChange={(e)=> this.changeInput(e)} value={this.state.name}/>
                    {this.state.errorMessage.name &&(
                      <span className="text-danger">{this.state.errorMessage.name}</span>
                    )}
                  </div>
                </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-danger">Add Category</button>
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
 
export default withRouter(AddCategory);