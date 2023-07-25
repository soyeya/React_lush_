//Category.jsx

import React, { useState } from 'react';
import { Link , useParams } from 'react-router-dom';
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


const Category = () => {


  const {page} = useParams();
  console.log(page);


  const categoryTitle = [

     "Shower",
     "Bath",
     "Body",
     "Perfume"

  ]

  const category_arr = [


    [shower1 , shower2, shower3, shower4],
    [bath1 , bath2, bath3, bath4],
    [body1 , body2, body3, body4],
    [perfume1, perfume2, perfume3, perfume4]

  ]


  const category_text = [
  
   
    ["슬리피 샤워젤" , "더 올리브 프렌치 샤워젤" , "더티 스프링 워시 샤워젤" , "럽럽럽 샤워스크럽"],
    ["섹스밤 배쓰밤" , "인터갈락틱 배쓰밤" , "더 컴포터 버블바" , "슬리피 버블바"],
    ["드림크림 보디로션" , "팬지 보디로션" , "슬리피 보디로션" , "헬핑크림 핸드로션"],
    ["데스 앤 디 케이 퍼퓸" , "팬지 퍼퓸" , "정크 퍼퓸" , "로즈잼 솔리드 퍼퓸"]

  ]

  const [viewmode , setViewmode] = useState(false);
  const [viewItem , setViewItem] = useState();

  const openModal = (e, index) => {

       setViewmode(true);
       setViewItem(index);
  }

  const closeModal = (e) => {

       setViewmode(false);

  }
  

  return (

    <>
     <div className={`categoryWrap w-100-per h-500`} id="prd_top">
       <h2 className='text-align-center pt-30 pb-30 text-uppercase font-extra'>{categoryTitle[page]}</h2>
       <ul className="category-cont d-flex w-100-per m0-auto ul_style_none pl-0">
        {category_arr[page].map((v,i) => (
         <li key={'cate-cont' + i} className='flex-stye-3 w-100-per h-100-per'>
          <div className='flex-style-1 w-100-per text-align-center' onClick={ e => {openModal(e, i)}}>
            <img src={v} className='h-300'/></div>
          <p className='fz-18 text-capitalize font-bold'>{category_text[page][i]}</p>
         </li>
        ))}
       </ul>
     </div>

     <div className={viewmode ? "dark on" : "dark"}  onClick={closeModal}>
        <div className={viewmode ? "popUp on" : "popUp"}>
          <img src={category_arr[page][viewItem]}></img>
          <p>{category_text[page][viewItem]}</p>
        </div>
     </div>

         </>
  )

}

export default Category;
