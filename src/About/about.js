import React, { useEffect, useState } from 'react';
import Pagination from './pagination';
import Loading from '../Loading/Loading';
import HomeOne from './home1';
import { withRouter} from 'react-router-dom';
import fon from './foto/imageAbout2.jpg'


import './about.css';
import './about_resp.css';







const About = (props) => {
	// console.log(props)
	const { history } = props;
	const [loading, setLoading] = useState(false);
	const [arr, setArr] = useState([]);
	const [page, setPage] = useState(props.match.params.id ? +props.match.params.id : 1);
	const [perPage, setPerPage] = useState(3);
	const [error, setError] = useState('');


	const fetchS = () => {
		setLoading(true);
		fetch('http://www.mocky.io/v2/5ecbcfe430000061c7ddd92b')
			.then(resp => resp.json().then(data => {
				if (resp.ok) {
					return data;
				} else return Promise.reject(data);
			}))
			.then(data => {
				setLoading(false);
				console.log(data);
				setArr(data.about);
				// console.log(arr)
			})
			.catch(err => {
				console.log(err, 'EROR');
				setLoading(true);
				setError(err);
			})
	}

	useEffect(() => {
		fetchS();
		history.push(`/about/page/${page}`);
		fetchS();

	}, [page])



	// Get current posts
	const indexOfLastPost = page * perPage;
	const indexOfFirstPost = indexOfLastPost - perPage;
	const changeArr = arr.slice(indexOfFirstPost, indexOfLastPost);
	console.log(changeArr);


	// function pagination

	const handlePaginationClick = (direction) => {
		let nextPage = page;
		nextPage = direction === "next" ? nextPage + 1 : nextPage - 1;
		setPage(nextPage);

	}

	if (loading) {
		return <div className="loading-container"><Loading/></div>
	}
	if (error) {
		return <div className="error">{error}</div>
	}

	return (
		<div >
			{/* <img src='https://zagge.ru/wp-content/uploads/2017/08/Haykuhi-1.jpg' /> */}
			<HomeOne src={fon} name='About Us' />
			{/* Intro Right */}

<div className="intro_right intro">
	<div className="container">
		{loading ? <div>Loading</div> : null}
		{/* MAPS ARRAYS */}
		{
			changeArr.map(item => {
				return (
					<div className="row row-xl-eq-height" key={item.id}>

						{/* <!-- Intro Image --> */}
						<div className="col-xl-6">
							<div className="intro_image">
								<div className="background_image intro_image_background" ><img src={`${item.src}`} alt={item.name} /></div>
							</div>
						</div>

						{/* <!-- Intro Right Content --> */}
						<div className="col-xl-6 intro_right_col">
							<div className="intro_right_content">
								<div className="section_title_container text-center">
									<div className="section_title"><h1>{item.name}</h1></div>
									<div className="section_text" style={{ backgroundColor: '#1D9EB4', color: 'white' }}>{item.history}</div>
								</div>

							</div>

						</div>


					</div>
				)
			})
		}
	</div>
</div>

<hr />


			<Pagination
				page={page}
				perPage={perPage}
				totalPosts={arr.length}
				paginate={handlePaginationClick}
			/>
		</div>
	)
}
export default withRouter(About);


