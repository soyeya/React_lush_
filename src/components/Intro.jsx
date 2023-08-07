import React from "react";
import { useParams } from "react-router-dom";
import IntroImg1 from '../asset/Image/main1.jpeg';
import IntroImg2 from '../asset/Image/main2.jpeg';
import IntroImg3 from '../asset/Image/main5.jpeg';
import IntroImg4 from '../asset/Image/main6.jpeg';
import introDB from '../json/Intro.json';

const Intro = () => {

   const Intro_main = [ IntroImg1, IntroImg2, IntroImg3]

    return(

        <>
        <h2 className="IntroTit pt-50 pb-50" id="intro">러쉬소개</h2>
        <div className="intro_wrap w-100-per flex-style-3 m0-auto pb-100">
         <ul className="lushBox">
            <div className="lush_box1">
            {Intro_main.map((v,i) => 
                <li key={'intro_img'+ i}>
                    <img src={v} alt="" />
                    <span>{introDB.intro_box[i]}</span>
                </li>            
                )}
                 </div>
             <div className="Intro_txt">
               {introDB.intro_txt.map((v,i) => 
                 <li key={'intro_txt' + i}>
                   <span className="bigIntro">{v.title}  
                   <p>{v.content}
                   </p></span>
                   </li>
                  
               )}
             </div>
            </ul>      
        </div>
        </>

    )
}

export default Intro;
