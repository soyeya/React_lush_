//Header.jsx
import React , { useEffect , useState } from "react";
import Lushlogo from '../asset/Image/lushLogo.png';
import { Link } from 'react-router-dom';
import Scrollspy from "react-scrollspy";
import navDB from '../json/Navi.json';

const Header = () => {

  const [color , colorChange ] = useState(true);

  const ChangeNav = () => {

       colorChange(true); 

      if(window.scrollY > 900){
        
        colorChange(false);

          if(window.scrollY > 3000){ colorChange(true);}
    
    } else{}
}

  const Navigation = (e) => {

   const navArr = e.target.parentElement.parentElement;
   const navEle = [...e.target.parentElement.parentElement.children];
   const navNum = navEle.indexOf(e.target.parentElement);

  }

   useEffect(() => {

     const moveNav = setInterval(() => { window.addEventListener( "scroll" , ChangeNav) },100)

         return () => { clearInterval(moveNav); window.removeEventListener("scroll" , ChangeNav)}
       
   },[])

     return(
        <>
          <div className={color ? "header-space" : "header-space Change"}> 
            <div className="logo">
                <Link to="/"><img src={Lushlogo} alt="" /></Link>
            </div>
          <Scrollspy className="flex-stye-1 scrollspy">
            <nav>
             <ul className="wrap">
                {navDB.Nav.map((v,i) => (
                   <li key={'menu' + i}><a href={v.href} className= {color ? "menu_link" : "menu_link Change"} onClick={Navigation}>{v.title}</a>
                    </li>
                    ))}
                   </ul>
            </nav>
            </Scrollspy>
          </div>
        </>
     )

}

export default Header;