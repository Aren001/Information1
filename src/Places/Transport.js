import React , {useState , useEffect} from 'react';

import HomeOne from '../About/home1';

import Pagination from '../About/pagination';

import Loading from '../Loading/Loading';


const Transport = (props) => {

    const [loading, setLoading] = useState(false);

    const [arr, setArr] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(3);
    const [error, setError] = useState('');

    const fetchS = () => {
        setLoading(true);
        fetch('  http://www.mocky.io/v2/5ecf86313200002400e3d2b6')
            .then(resp => resp.json().then(data => {
                if (resp.ok) {
                    return data;
                } else return Promise.reject(data);
            }))
            .then(data => {
                setLoading(false);
                // console.log(data);
                setArr(data.transport);
            })
            .catch(err => {
                console.log(err, 'EROR');
                setLoading(false);
                setError(err);
            })
    };




    useEffect(() => {
        fetchS();


    }, [page])



    // Get current posts
    const indexOfLastPost = page * perPage;
    const indexOfFirstPost = indexOfLastPost - perPage;
    const changeArr = arr.slice(indexOfFirstPost, indexOfLastPost);


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

        <HomeOne src="/images/transport.jpg" name="Transport " />


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
                                                            <img width="500" height="300" src={t.srcImg} alt={t.name} /></div>
                                                        <iframe src={t.srcMap} width="500" height="200" aria-hidden="false"  ></iframe>
                                                    </div>
                                                    <div className="col-xl-5 col-lg-6">
                                                        <div className="blog_post_content">

                                                            <div className="pb_title"><a href="#">{t.name} </a></div>
                                                            <div className="pb_text" >
                                                                <p>Address: {t.address}</p>
                                                                <p>Working Time:  {t.time}</p>
                                                                <p>Phone: {t.phone}</p>
                                                                <p>Link:  <a href={t.link}>LINK</a></p>

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
        </div>

        {/* <Pagination 
        page={page}
        perPage={perPage}
        totalPosts={arr.length}
        paginate={handlePaginationClick}
        /> */}

        </div>
    )
}
export default Transport;