import React from 'react';

import { Link } from 'react-router-dom';

const Footer = (props) => {

    return (
        <footer className="page-footer font-small stylish-color-dark pt-4" style={{backgroundColor: 'black' ,  marginTop:'50px'  }}>

		
		<div className="container text-center text-md-left">
	  
		  
		    <div className="row">
	  
			
			    <div className="col-md-4 mx-auto">
	  
			  
			  <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
			  <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
				consectetur
				adipisicing elit.</p>
	  
			    </div>
			
	  
			    <hr className="clearfix w-100 d-md-none" />
	  
			
			    <div className="col-md-2 mx-auto">
	  
			  
			  <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
	  
			  <ul className="list-unstyled">
				<li>
				  <Link to="#!">Link 1</Link>
				</li>
				<li>
				  <Link to="#!">Link 2</Link>
				</li>
				<li>
				  <Link to="#!">Link 3</Link>
				</li>
				<li>
				  <Link to="#!">Link 4</Link>
				</li>
			  </ul>
	  
			    </div>
			
	  
			    <hr className="clearfix w-100 d-md-none"/>
	  
			
			    <div className="col-md-2 mx-auto">
	  
			  
			  <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
	  
			  <ul className="list-unstyled">
				<li>
				  <Link to="#!">Link 1</Link>
				</li>
				<li>
				  <Link to="#!">Link 2</Link>
				</li>
			  </ul>
	  
			    </div>
			
	  
			    <hr className="clearfix w-100 d-md-none"/>
	  
			
			    <div className="col-md-2 mx-auto">
	  
			
			  <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
	  
			  <ul className="list-unstyled">
              <li>
				  <Link to="#!">Link 1</Link>
				</li>
				<li>
				  <Link to="#!">Link 2</Link>
				</li>
				
			  </ul>
	  
			    </div>
		
	  
            </div>
		
	  
		</div>
	
	  
		
	  
		<hr/>
	  
		
	  
	
		<div className="footer-copyright text-center py-3">© 2020 Copyright:
		  <Link to="https://mdbootstrap.com/"> MDBootstrap.com</Link>
		</div>
	
	  
	  </footer>
    )
}
export default Footer;