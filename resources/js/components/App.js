import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Footer from './common/Footer';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import TitleNav from './common/TitleNav';
import Dashboard from './Dashboard';
import { PUBLIC_PATH } from './Helper/ProjectPath';
import AddCategory from './pages/cagories/AddCategory';
import Category from './pages/cagories/Category';
import EditCategory from './pages/cagories/EditCategory';
import AddProduct from './pages/products/AddProduct';
import Product from './pages/products/Product';


class App extends Component {
   
    render() { 
        const imageOpacity={
            opacity:'0.8'
        }
        const fondSize={
            fondSize:"20px"
        }
        const setPosition={
            position:'reletive',
            height:'300px'
        }
        const setHeight={
            height:'300px'
        }
        const heightWidth={
            height: "250px",
             width: "100%"
        }
        const maxHeightWidth={
            minHeight: "250px",
            height: "250px",
             maxHeight: "250px",
             maxWidth: "100%"
        }
        const setCalender={
            height:"100%"
        }
        return ( 
            <Router>
           <React.Fragment>
            <div class="wrapper">
            <Header />
          
            <Sidebar/>
           
            <div class="content-wrapper">
            <TitleNav/>
            <section class="content">
                <div class="container-fluid">
                <Switch>
                   <Route path={`${PUBLIC_PATH}`} exact={true} component={Dashboard} />
                   <Route path={`${PUBLIC_PATH}show-category`} exact={true} component={Category} />
                   <Route path={`${PUBLIC_PATH}add-category`} exact={true} component={AddCategory} />
                   <Route path={`${PUBLIC_PATH}edit-category/:id`} exact={true} component={EditCategory} />
                   <Route path={`${PUBLIC_PATH}show-product`} exact={true} component={Product} />
                   <Route path={`${PUBLIC_PATH}add-product`} exact={true} component={AddProduct} />
                </Switch>
                </div>  
            </section>    
            </div>   
            <Footer/>      
            <aside class="control-sidebar control-sidebar-dark">
            </aside> 
            </div>
          
             
           </React.Fragment>
           </Router>
         );
    }
}
export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
