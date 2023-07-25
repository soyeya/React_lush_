//Header.jsx

import React , {createElement, useState} from "react";
import Lushlogo from '../asset/Image/lushLogo.png';
import { Link } from 'react-router-dom';

const Header = () => {


  const [active , setActive] = useState(-1);

  const navi_arr = (e) => {
 
     const navi_act = e.target.parentElement;
     const navitagArr = [...e.target.parentElement.parentElement.children] 
     console.log(navitagArr); 
     const navi_arr = navitagArr.indexOf(e.target.parentElement);
     console.log(navi_arr);
     setActive(navi_arr);

  }
  
    const menu_arr = [

         ["shower" , "/shower"],
         ["bath" , "/bath"],
         ["body" , "/body"],
         ["perfume" , "/perfume"]

    ]


     return(

        <>
          <div className="header-space position-fixed">
            <div className="logo">
                <Link to="/"><img src={Lushlogo} alt="" /></Link>
            </div>
      
            <nav>
             <ul className="wrap">
                {menu_arr.map((v,i) => (
                   <li key={'menu' + i} onClick={navi_arr} className={ active == i ? "active" : null }><Link to={"/category/"+ i} className="text-deco-none menu_link">{v[0]}</Link>
                    </li>
                    ))}
                   </ul>
            </nav>
 
          </div>
        </>
     )

}

export default Header;