import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import s from './slider.module.css';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className={s.cont}>
        
        <Slider {...settings} className={s.Sliders} >
          <div>
            <img src="https://i0.wp.com/fountravel.ru/wp-content/uploads/2018/09/sevan-lake-armenia.jpg?fit=900%2C574&ssl=1" />
            
          </div>
          <div>
            <img src="https://abp-am.storage.yandexcloud.net/page/image/e79a21b8-5882-4de9-a444-2e667c869d2c.jpg" />
          </div>
          <div>
            <img src="https://www.arminfo.info/mcgallery/20161227034810%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1.jpg" />
          </div>
          <div>
            <img src="https://welcomearmeniatour.com/uploads/posts/2018-08/1533491120_senovanak.jpg" />
          </div>
          <div>
            <img src="https://r-cf.bstatic.com/images/hotel/max1024x768/226/226480360.jpg" />   
          </div>
          <div>
            <img src="https://d31qtdfy11mjj9.cloudfront.net/gallery/1513694137797376230.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}



{/* <Coverflow
                    width={960}
                    height={480}
                    displayQuantityOfSide={2}
                    navigation={false}
                    enableHeading={false}
                >
                    <div
                    // onClick={() => fn()}
                    // onKeyDown={() => fn()}
                    // role="menuitem"
                    // tabIndex="0"
                    >
                    <img
                        src='https://welcomearmeniatour.com/uploads/posts/2018-08/1533491120_senovanak.jpg'
                        alt='title or description'
                        style={{ display: 'block', width: '100%' }}
                    />
                    </div>
                    <img src='https://i0.wp.com/cs6139.vk.me/v6139296/5046/eqRwjjX-Tz0.jpg' alt='title or description' />
                    <img src='https://r-cf.bstatic.com/images/hotel/max1024x768/201/201759834.jpg' alt='title or description'/>
            </Coverflow> */}