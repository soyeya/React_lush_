//Category.jsx

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import perfume1 from '../asset/Image/perfume1.png';
import perfume2 from '../asset/Image/perfume2.png';
import perfume3 from '../asset/Image/perfume3.png';
import perfume4 from '../asset/Image/perfume4.png';
import shower1 from '../asset/Image/shower1.png';
import shower2 from '../asset/Image/shower2.png';
import shower3 from '../asset/Image/shower3.png';
import shower4 from '../asset/Image/shower4.png';
import bath1 from '../asset/Image/bath1.png';
import bath2 from '../asset/Image/bath2.png';
import bath3 from '../asset/Image/bath3.png';
import bath4 from '../asset/Image/bath4.png';
import body1 from '../asset/Image/body1.png';
import body2 from '../asset/Image/body2.png';
import body3 from '../asset/Image/body3.png';
import body4 from '../asset/Image/body4.png';
import categroyDB from '../json/Category.json';


const Category = () => {

  const {page} = useParams();

  const category_arr = [


    [shower1 , shower2, shower3, shower4],
    [bath1 , bath2, bath3, bath4],
    [body1 , body2, body3, body4],
    [perfume1, perfume2, perfume3, perfume4]

  ]

  const [viewmode , setViewmode] = useState(false);
  const [viewItem , setViewItem] = useState();

  const openModal = (e, index) => { setViewmode(true); setViewItem(index);}
  const closeModal = (e) => { setViewmode(false);

 }
  
  return (
    <>
     <div className={`categoryWrap w-100-per h-600 pt-50`} id="prd_top">
       <h2 className='text-align-center pt-30 pb-30 text-uppercase font-extra mainColor'>{categroyDB.categoryTitle[page]}</h2>
       <ul className="category-cont d-flex w-100-per m0-auto ul_style_none pl-0">
        {category_arr[page].map((v,i) => (
         <li key={'cate-cont' + i} className='flex-stye-3 w-100-per h-100-per'>
          <div className='flex-style-1 w-100-per text-align-center pdBox' onClick={ e => {openModal(e, i)}}>
            <img src={v} className='pd_img'/></div>
          <p className='fz-14 text-capitalize font-normal pt-30 mainColor'>{categroyDB.category_txt[page][i]}</p>
         </li>
        ))}
       </ul>
     </div>

     <div className={viewmode ? "dark on" : "dark"}  onClick={closeModal}>
        <div className={viewmode ? "popUp on" : "popUp"}>
          <img src={category_arr[page][viewItem]}></img>
          <p>{categroyDB.category_txt[page][viewItem]}</p>
        </div>
     </div>
         </>
  )

}

export default Category;
