import React , {useEffect , useState} from 'react';

import HomeOne from '../About/home1';
import Loading from '../Loading/Loading';

import Pagination from '../About/pagination';
import Modal from './ModalCofe/cofeModal';
import s from './ModalCofe/modal.module.css';



const CafeBar = (props) => {

	const { history } = props;

	const [loading, setLoading] = useState(false);
	const [modalCont, setModalCont] = useState("");
	const [modal, setModal] = useState(false);
	
	const [arr, setArr] = useState([]);
	const [page, setPage] = useState(props.match.params.id ? +props.match.params.id : 1);
	const [perPage, setPerPage] = useState(3);
	const [error, setError] = useState('');

	const fetchS = () => {
		setLoading(true);
		fetch('http://www.mocky.io/v2/5ecf77c73200004700e3d209')
			.then(resp => resp.json().then(data => {
				if (resp.ok) {
					return data;
				} else return Promise.reject(data);
			}))
			.then(data => {
				setLoading(false);
				console.log(data);
				setArr(data.cafe);
			})
			.catch(err => {
				console.log(err, 'EROR');
				setLoading(false);
				setError(err);
			})
	};

	
	const hendleClick = value => {
		setModalCont(value);
		// console.log(modalCont);
		setModal(!modal);
	  };
	  
     const handleClose = () => {
        setModal(false);
      };

	useEffect(() => {
		fetchS();
		history.push(`/cafe/page/${page}`);


	}, [page])



	// Get current posts
	const indexOfLastPost = page * perPage;
	const indexOfFirstPost = indexOfLastPost - perPage;
	const changeArr = arr.slice(indexOfFirstPost, indexOfLastPost);
	// console.log(changeArr)


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
        <div className="super_container">

    <HomeOne  src="/images/cafeBar.jpg" name="Cafe (Bar)" />


        <div className="blog">
		<div className="container">
			<div className="row">
				<div className="col">

					
					<div className="blog_posts">
						
						
					{
                        changeArr.map(t => {
                            return (
                                <div className="blog_post" key={t.id}>
                            
                                <div className="row" >
                                    
                                    <div className="col-xl-7 col-lg-6">
                                        
                                        <div className="blog_post_image" >
                                            <img width="500" height="300" src={t.srcImg}  alt={t.name}  onClick={() => hendleClick(t)} />
										</div>
                                        <iframe src={t.srcMap} width="500" height="200"  aria-hidden="false"  ></iframe>
                                    </div>
                                    <div className="col-xl-5 col-lg-6">
                                        <div className="blog_post_content">
                                            
                                            <div className="pb_title"><a href="#">{t.name} </a></div>
                                            <div className="pb_text" >
                                                <p>Address: {t.address}</p>
                                                <p>Working Time:  {t.time} </p>
                                                <p>Phone: {t.phone}</p>
                                                <p>Link: {t.link}</p>
                                                <button style={{marginTop:'15px'}} onClick={() => hendleClick(t)} >MODAL(MenU)</button>
    
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
							<Modal 
								modalCont={modalCont} 
								handleClose={ handleClose }
								modal={modal} 
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
    );
};

export default CafeBar;
