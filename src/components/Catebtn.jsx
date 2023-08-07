import React from 'react';
import { Link } from 'react-router-dom';
import cateDB from '../json/Catebtn.json';

const CateBtn = () =>{


     return(

        <>
   <div className="prdBtn">
       <ul>
         {cateDB.category.map((v,i)=>(
             <li key={'bannerBtn' + i}><Link to = {'/category/' + i} className='click'>{v.title}</Link></li>
         ))}
       </ul>
     </div>
        </>
     )

}

export default CateBtn;