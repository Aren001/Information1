import React from 'react';

import { Link , withRouter} from 'react-router-dom';
import './header.css';

const Header = (props) => {

    return (
		<header className="navbar navbar-expand-lg navbar-light position-fixed " style={{  zIndex:'500' , width:'100%' , borderBottom:'5px solid black' , backgroundColor:'#1D9EB4' }}>
		<Link   to='#' className="navbar-brand"  style={{marginLeft:'200px' , marginRight:'120px' }}><b className="text-white"><i style={{color :'black', fontSize:'25px'}}>S</i>evan</b> <br/><i className='text-secondary'>INFO</i> </Link>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
		<span className="navbar-toggler-icon"></span>
		</button>
		
		<div className="collapse navbar-collapse" id="navbarSupportedContent">
		<ul className="navbar-nav mr-auto " style={{fontSize:'25px'   }} >
			<li className="nav-item active" >
			<Link className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></Link>
			</li>
			<li className="nav-item">
			<Link className="nav-link text-white" to={ `/about/page/${props.match.params.id ? +props.match.params.id : 1}`}>About</Link>
			</li>
			<li className="nav-item dropdown">
			<Link className="nav-link dropdown-toggle text-white" to='#'  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Place
			</Link>
			<div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor:'#1D9EB4'}}>
				<Link className="dropdown-item text-white"  to={ `/attraction/page/${props.match.params.id ? +props.match.params.id : 1}`}>Attraction</Link>
				<Link className="dropdown-item text-white" to="/transport">Transport</Link>
				<Link className="dropdown-item text-white" to={ `/cafe/page/${props.match.params.id ? +props.match.params.id : 1}`}>Cafe (Bar)</Link>
				<Link className="dropdown-item text-white"  to={ `/restaurant/page/${props.match.params.id ? +props.match.params.id : 1}`}>Restaurant (Hotel)</Link>
				<Link className="dropdown-item text-white" to="/bank">Bank</Link>
				<Link className="dropdown-item text-white"  to={ `/shop/page/${props.match.params.id ? +props.match.params.id : 1}`}>Shop</Link>
				<Link className="dropdown-item text-white" to="/sport">Sport</Link>
				<Link className="dropdown-item text-white"  to={ `/cps/page/${props.match.params.id ? +props.match.params.id : 1}`}>CPS</Link>
				<Link className="dropdown-item text-white" to="/craftsman">Craftsman (Auto , Home)</Link>
				
			</div>
			</li>
			<li className="nav-item">
			<Link className="nav-link text-white" to="/news">News</Link>
			</li>
			<li className="nav-item">
			<Link className="nav-link text-white" to="/contact">Contact</Link>
			</li>
		</ul>
		<form className="form-inline my-2 my-lg-0">
			<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
			<button className="btn  my-2 my-sm-0 text-white btn-outline-primary" type="submit" >Search</button>
		</form>
		</div>
		</header> 
    )
}
export default withRouter(Header);





