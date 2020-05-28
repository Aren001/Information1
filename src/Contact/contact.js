import React , {useEffect , useState} from 'react';

import HomeOne from '../About/home1';
import './contact.css';
import './contact_resp.css';
import Loading from '../Loading/Loading';




const Contact = (props) => {

    const [loading, setLoading] = useState(false);

    const [arr, setArr] = useState([]);
    const [error, setError] = useState('');

    const fetchS = () => {
        setLoading(true);
        fetch(' http://www.mocky.io/v2/5ecf86313200002400e3d2b6')
            .then(resp => resp.json().then(data => {
                if (resp.ok) {
                    return data;
                } else return Promise.reject(data);
            }))
            .then(data => {
                setLoading(false);
                // console.log(data);
                setArr(data.contact);
            })
            .catch(err => {
                console.log(err, 'EROR');
                setLoading(false);
                setError(err);
            })
    };




    useEffect(() => {
        fetchS();


    }, [])






    // function pagination



    if (loading) {
        return <div className="loading-container"><Loading/></div>
    }
    if (error) {
        return <div className="error">{error}</div>
    }

    return (
        <div className='super_container'>


            <HomeOne src='/images/contactt.jpg' name="Contact" />



            {/* <!-- Contact --> */}

            {
                arr.map(t => {
                    return (
                        <div className="contact_section" key={t.id}>
                            <div className="container">
                                <div className="row">

                                    {/* <!-- Contact Content --> */}
                                    <div className="col-lg-5">
                                        <div className="contact_content">
                                            <div className="contact_logo">
                                                <div className="logo">
                                                    <p >
                                                        <div style={{ color: "Black" }}>{t.name}</div>
                                                        <div>{t.iName}</div>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="contact_section_text">
                                                <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d780.1314934945839!2d44.95124897704564!3d40.54842255289734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3ceecb2f142e42e9!2sHaypost%20%22Sevan&#39;&#39;&#39;%20branch!5e0!3m2!1sru!2s!4v1590234222208!5m2!1sru!2s" width="300" height="200"  aria-hidden="false" ></iframe></p>
                                            </div>
                                            <div className="contact_section_info">
                                                <ul>
                                                    <li className="d-flex flex-row align-items-center justify-content-start">
                                                        <div><div className="d-flex flex-column align-items-center justify-content-center"><img src="./images/contact/icon_1.png" alt="" /></div></div>
                                                        <div>{t.address}</div>
                                                    </li>
                                                    <li className="d-flex flex-row align-items-center justify-content-start">
                                                        <div><div className="d-flex flex-column align-items-center justify-content-center"><img src="./images/contact/icon_2.png" alt="" /></div></div>
                                                        <div>{t.phone}</div>
                                                    </li>
                                                    <li className="d-flex flex-row align-items-center justify-content-start">

                                                        <div><a href={t.link} style={{color:"black"}}>LINK</a></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Contact Image --> */}
                                    <div className="col-lg-7 contact_section_col">
                                        <div className="contact_image"><img src={t.srcImg} alt={t.name} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }


            {/* <!-- Contact --> */}

            <div className="contact">
                <div className="container">
                    <div className="row">

                        {/* <!-- Contact Map --> */}
                        <div className="col-xl-6">
                            <div className="contact_map_container">

                                {/* <!-- Contact Map --> */}
                                <div className="contact_map">

                                    {/* <!-- Google Map --> */}
                                    <div className="map">
                                        <iframe className="google_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68606.47790037675!2d44.907454135817176!3d40.54144311812957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404046c39477eb71%3A0xeb5b902ad8d28d76!2z0KHQtdCy0LDQvSwg0JDRgNC80LXQvdC40Y8!5e0!3m2!1sru!2s!4v1589204241171!5m2!1sru!2s" width="600" height="450" aria-hidden="false" ></iframe>

                                    </div>

                                </div>

                                {/* <!-- Contact Info Box --> */}
                                <div className="contact_info_box d-flex flex-column align-items-center justify-content-center">
                                    <ul className="contact_info_list">
                                        <li className="d-flex flex-row align-items-start justify-content-start">
                                            <div><div className="contact_info_icon d-flex flex-column align-items-center justify-content-center"><img src="./images/placeholder.png" alt="" /></div></div>
                                            <div className="contact_info_text">1481 Creekside Lane Avila Beach, CA 931</div>
                                        </li>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div><div className="contact_info_icon d-flex flex-column align-items-center justify-content-center"><img src="./images/smartphone.png" alt="" /></div></div>
                                            <div className="contact_info_text">+53 345 7953 32453</div>
                                        </li>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div><div className="contact_info_icon d-flex flex-column align-items-center justify-content-center"><img src="./images/mail.png" alt="" /></div></div>
                                            <div className="contact_info_text">yourmail@gmail.com</div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        {/* <!-- Contact Form --> */}
                        <div className="col-xl-6 contact_col">
                            <div className="contact_form_container">
                                <div className="section_title_container_2">
                                    <div className="section_title"><h1>Contact Info</h1></div>
                                    <div className="section_text">---</div>
                                </div>
                                <form action="#" className="contact_form" id="contact_form">
                                    <div className="row contact_row">
                                        <div className="col-md-6"><input type="text" className="contact_input" placeholder="Name" required="required" /></div>
                                        <div className="col-md-6"><input type="email" className="contact_input" placeholder="E-mail" required="required" /></div>
                                    </div>
                                    <div><textarea className="contact_input contact_textarea" placeholder="Message" required="required"></textarea></div>
                                    <button className="contact_button">send message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Contact;