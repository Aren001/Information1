import React from 'react';

import App from '../Weather/App';
import './home.css';
import './home_resp.css';
import AutoPlay from './slider/slider';
import Font from './font/font';
import s from './slider/slider.module.css';




const Home = (props) => {

    return (
    <div className="super_container">

			<Font />
		
            


   <div className="intro">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="section_title_container text-center">
						<div className="section_title"><h1><b style={{color:'#1D9EB4'}}>Church of the Holy Archangels</b> <br/><p style={{fontSize:'25px'}}>(Սուրբ Հրեշտակապետաց եկեղեցի)</p></h1></div>
						
					</div>
				</div>
			</div>
			<div className="row intro_row">
				
				
				<div className="col-lg-6">
					<div className="mr-3 intro_image"><img width='600' height='500' src="./images/SevanChurch.jpg" alt="https://unsplash.com/@papao03"/></div>
				</div>

			
				<div className="col-lg-6 intro_col">
					<div className="intro_content">
						<div className="quote"><b style={{color:'#1D9EB4' , fontSize:'25px'}}>History (Պատմություն)</b></div>
						<div className="intro_text">
							<p>Սրբոց Հրեշտակապետաց եկեղեցու շինարարությունն սկսվել է 2009 թվականին։ Այն կառուցվել է ֆրանսիաբնակ ազգային բարերար Սարգիս Պետոյանի բարերարությամբ՝ ի հիշատակ նրա ծնողների՝ Ավետիս և Թագուհի Պետոյանների։ Եկեղեցու նախագծի հեղինակն է ՀՀ վաստակավոր ճարտարապետ Արտակ Ղուլյանը։

Եկեղեցու օծման արարողությունը կատարվել է Ն.Ս.Օ.Տ.Տ. Գարեգին Բ Ծայրագույն Պատրիարք և Ամենայն Հայոց Կաթողիկոսի հանդիսապետությամբ և Հայաստանի Հանրապետության նախագահ Սերժ Սարգսյանի ներկայությամբ։

Եկեղեցու օծման արարողությանը ներկա են գտնվել Մայր Աթոռի միաբաններ, մարզային և քաղաքային իշխանությունների ներկայացուցիչներ, եկեղեցու օծման առիթով Ֆրանսիայից ժամանած Պետոյան ընտանիքի անդամներ և բարեկամներ, Սևանի Վազգենյան հոգևոր դպրանոցի սաներ, Սևան քաղաքի բնակիչներ և բազում ուխտավոր հայորդիներ։ <br/>
		<a style={{color:'#1D9EB4'}} href="https://hy.wikipedia.org/wiki/%D5%8D%D5%B8%D6%82%D6%80%D5%A2_%D5%80%D6%80%D5%A5%D5%B7%D5%BF%D5%A1%D5%AF%D5%A1%D5%BA%D5%A5%D5%BF%D5%A1%D6%81_%D5%A5%D5%AF%D5%A5%D5%B2%D5%A5%D6%81%D5%AB_(%D5%8D%D6%87%D5%A1%D5%B6)" target="blank">Link</a>
		</p>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>



    {/* <!-- Room --> */}

	<div className="room d-flex  align-items-center justify-content-center" style={{backgroundColor:'#1D9EB4' , backgroundImage:'url("./images/wheather.jpg")'}}>
		<div className="room_content" >

			<App/>
			
		</div>
	</div>



    {/* <!-- Facilities --> */}

	<div className="facilities">
		<div className="container">
			<div className="row icon_box_row">

				
				<div className="col-lg-4">
                    <div className="icon_box text-center">
						<div className="icon_box_icon"><img src="./images/icon_1.svg" alt="https://www.flaticon.com/authors/monkik"/></div>
						<div className="icon_box_title"><h2>Beautiful Rooms</h2></div>
						<div className="icon_box_text">
							<p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
						</div>
					</div>
				</div>

				
				<div className="col-lg-4">
					<div className="icon_box text-center">
						<div className="icon_box_icon"><img src="./images/icon_2.svg" alt="https://www.flaticon.com/authors/monkik/"/></div>
						<div className="icon_box_title"><h2>Swimming Pool</h2></div>
						<div className="icon_box_text">
							<p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
						</div>
					</div>
				</div>

				<div className="col-lg-4">
					<div className="icon_box text-center">
						<div className="icon_box_icon"><img src="./images/icon_3.svg" alt="https://www.flaticon.com/authors/monkik"/></div>
						<div className="icon_box_title"><h2>Luxury Resort</h2></div>
						<div className="icon_box_text">
							<p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

	{/* <!-- Gallery --> */}

	<div >
		<div className={s.gallery}>
			<AutoPlay />
		</div>
	</div>



	

	

	{/* <!-- Contact --> */}

	<div className="contact" >
		<div className="container">
			<div className="row">
				
				{/* <!-- Contact Map --> */}
				<div className="col-xl-6">
					<div className="contact_map_container">
						
						{/* <!-- Contact Map --> */}
						<div className="contact_map">

							{/* <!-- Google Map --> */}
							<div className="maps" style={{ width:'1582px' }}>
							<iframe className="google_maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68606.47790037675!2d44.907454135817176!3d40.54144311812957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404046c39477eb71%3A0xeb5b902ad8d28d76!2z0KHQtdCy0LDQvSwg0JDRgNC80LXQvdC40Y8!5e0!3m2!1sru!2s!4v1589204241171!5m2!1sru!2s" width="100%" height="450"  aria-hidden="false" ></iframe>
								
							</div>

						</div>

					

					</div>
				</div>
				
				
			</div>
		</div>

	</div>



        </div>
    )
}
export default Home;
