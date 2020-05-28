import React from 'react';

import HomeOne from '../About/home1';

import Pagination from '../About/pagination';
import s from './news.module.css';

const p = {
	
			cafe : [
				{
					id: 'MAl',
					titl: 'sdcfssdcsdc',
					img: "https://files.phototo.com.ua/uploads/article/photo/114/wide_4.jpg"
				},
				{
					id: 'DAl',
					titl: 'sdcfssdcsdc',
					img: "https://files.phototo.com.ua/uploads/article/photo/114/wide_4.jpg"
				},
				{
					id: 'ZAl',
					titl: 'sdcfssdcsdc',
					img: "https://files.phototo.com.ua/uploads/article/photo/114/wide_4.jpg"
				},
				{
					id: 'M',
					titl: 'sdcfssdcsdc',
					img: "https://files.phototo.com.ua/uploads/article/photo/114/wide_4.jpg"
				},
				{
					id: 'S',
					titl: 'sdcfssdcsdc',
					img: "https://files.phototo.com.ua/uploads/article/photo/114/wide_4.jpg"
				},
				{
					id: 'W',
					titl: 'sdcfssdcsdc',
					img: "https://files.phototo.com.ua/uploads/article/photo/114/wide_4.jpg"
				},
				{
					id: 'M',
					titl: 'sdcfssdcsdc',
					img: "https://files.phototo.com.ua/uploads/article/photo/114/wide_4.jpg"
				},
				{
					id: 'S',
					titl: 'sdcfssdcsdc',
					img: "https://files.phototo.com.ua/uploads/article/photo/114/wide_4.jpg"
				},
				{
					id: 'W',
					titl: 'sdcfssdcsdc',
					img: "https://files.phototo.com.ua/uploads/article/photo/114/wide_4.jpg"
				}
			],
			rest: [
				{
					id: 'M',
					titl: 'sdcfssdcsdc',
					img: "https://files.phototo.com.ua/uploads/article/photo/114/wide_4.jpg"
				},
				{
					id: 'S',
					titl: 'sdcfssdcsdc',
					img: "https://files.phototo.com.ua/uploads/article/photo/114/wide_4.jpg"
				},
				{
					id: 'W',
					titl: 'sdcfssdcsdc',
					img: "https://files.phototo.com.ua/uploads/article/photo/114/wide_4.jpg"
				}
			]

	
}



const News = (props) => {
		// console.log(news)
		
	return (
		<div className={s.cont}>
			 <HomeOne src='./images/sevanNews.jpg'  name='News'/>
			<div className={s.flexContainer}>
						<div className={s.conte}>
							{
								p.cafe.map(i => {
									return (
										<nav  key={i.id}>
											<div className={s.div1}>
												<p>{i.id}</p>
												<img className={s.imig} src={i.img} />
												<p>{i.titl}</p>
											</div>
									
										</nav>
									)
								})
							}
						</div>
						
						
			 </div>
			 
		</div>
	)
};

export default News;

