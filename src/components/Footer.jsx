import React from "react";
import lushLogo from '../asset/Image/lushLogo.png';
import FooterDB from '../json/Footer.json';


const footer = () => {

    return(

        <>
         <div className="footer">
             <ul>
            {FooterDB.footerContent.footerMenu1.map((v,i) => (
                <li key={'footerMenu1'+ i}>
                <p>{v}</p>
                </li>
            ))}
             <img src={lushLogo}/>
             </ul>
             <ul>
            {FooterDB.footerContent.footerMenu2.map((v,i) => (
                <li key={'footerMenu2'+ i}>
                <p>{v}</p>
                </li>
            ))}
             </ul>
             <ul>
            {FooterDB.footerContent.footerMenu3.map((v,i) => (
                <li key={'footerMenu3'+ i}>
                <p>{v}</p>
                </li>
            ))}
             </ul>
             <ul>
            {FooterDB.footerContent.footerMenu4.map((v,i) => (
                <li key={'footerMenu4'+ i}>
                <p>{v}</p>
                </li>
            ))}
             </ul>

          </div>
        </>
    )


}


export default footer;