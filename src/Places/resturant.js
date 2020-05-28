import React , {useEffect , useState} from 'react';

import HomeOne from '../About/home1';

import Pagination from '../About/pagination';

import Loading from '../Loading/Loading';

import ModalRestorant from './ModalResturant/restorantModal';

import s from './ModalResturant/restorant.module.css';

const Restaurant = (props) => {

	const { history } = props;

    const [loading, setLoading] = useState(false);
	const [arr, setArr] = useState([]);
	const [page, setPage] = useState(props.match.params.id ? +props.match.params.id : 1);
	const [perPage, setPerPage] = useState(3);
	const [error, setError] = useState('');

	const [modalCont, setModalCont] = useState("");
	const [modalPic, setModalPic] = useState("");
	const [modal, setModal] = useState(false);

	const fetchS = () => {
		setLoading(true);
		fetch('http://www.mocky.io/v2/5ecf7f72320000f1aee3d26a')
			.then(resp => resp.json().then(data => {
				if (resp.ok) {
					return data;
				} else return Promise.reject(data);
			}))
			.then(data => {
				setLoading(false);
				// console.log(data);
				setArr(data.hotel);
			})
			.catch(err => {
				console.log(err, 'EROR');
				setLoading(false);
				setError(err);
			})
	}

	useEffect(() => {
		fetchS();
		history.push(`/restaurant/page/${page}`);


	}, [page])



	// Get current posts
	const indexOfLastPost = page * perPage;
	const indexOfFirstPost = indexOfLastPost - perPage;
	const changeArr = arr.slice(indexOfFirstPost, indexOfLastPost);
	console.log(changeArr)


	// function pagination

	const handlePaginationClick = (direction) => {
		let nextPage = page;
		nextPage = direction === "next" ? nextPage + 1 : nextPage - 1;
		setPage(nextPage);

	}


	// Modals
	const hendleClick = value => {
		setModalCont(value);
		setModalPic(value.picture)
		// console.log(modalCont);
		setModal(!modal);
	  };
	  
     const handleClose = () => {
        setModal(false);
      };



	if (loading) {
		return <div className="loading-container"><Loading/></div>
	}
	if (error) {
		return <div className="error">{error}</div>
	}

    return (
        <div className="super_container">

    <HomeOne  src="/images/restoran.jpg"  name='Restaurants' />


        <div className="blog">
		<div className="container">
			<div className="row">
				<div className="col">

					
					<div className="blog_posts">
						
						
						{
                            changeArr.map(t => {
                                return (
                                    <div className="blog_post" key={t.id}>
                            
								<div className="row">
                                
								<div className="col-xl-7 col-lg-6">
                                    
                                    <div className="blog_post_image" >
                                        <img width="500" height="300" src={t.srcImg} alt={t.name} onClick={() => hendleClick(t)} />
									</div>
                                    <iframe src={t.srcMap} width="500" height="200"  aria-hidden="false"  ></iframe>
								</div>
								<div className="col-xl-5 col-lg-6">
									<div className="blog_post_content">
										
										<div className="pb_title"><a href="#">{t.name} </a></div>
										<div className="pb_text" >
                                            <p>Address: {t.address}</p>
                                            <p>Working Time: {t.time}   </p>
                                            <p>Phone: {t.phone}</p>
                                            <p>Room:  {t.room}</p>
                                            <p>Link: <a href={t.link} target='blank'>Link</a></p>
											
											
                                            <button style={{marginTop:'15px'}} onClick={() => hendleClick(t)} >Menu (Pictures)</button>
										</div>
										
									</div>
								</div>
							</div>
                            <hr style={{backgroundColor:'#1D9EB4' , height:'5px' , borderRadius:'1000%' }}/>
                        </div>
                                )
                            })
                        }


				</div>
				</div>
				</div>
				</div>

						
						<div 
							className={s.divContainer} 
							style={{ display: modal ? "block" : "none" }}
							onClick={() => handleClose()}
							
						>
							<ModalRestorant
								modalCont={modalCont} 
								handleClose={ handleClose }
								modal={modal}
								modalPic={modalPic} 
							/>
						</div>

        </div>

        <Pagination
        page={page}
        perPage={perPage}
        totalPosts={arr.length}
        paginate={handlePaginationClick}  
         />

        </div>
    )
}
export default Restaurant;