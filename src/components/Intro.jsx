import React from "react";
import { useParams } from "react-router-dom";
import IntroImg1 from '../asset/Image/main1.jpeg';
import IntroImg2 from '../asset/Image/main2.jpeg';
import IntroImg3 from '../asset/Image/main5.jpeg';
import IntroImg4 from '../asset/Image/main6.jpeg';

const Intro = () => {

    

    const Intro_main = [

        IntroImg1,
        IntroImg2,
        IntroImg3,

    ]

    const Intro_boxText = [

        "러쉬는 어떤 이유에서도 제품을 동물실험 하지 않고, 동물실험을 거친 원재료조차 사용하지 않습니다.",
        "한국은 러쉬의 네번째 해외진출 국가입니다.",
        "우리는 제조자의 얼굴 스티커를 제품 라벨에 붙임으로써 자부심을 가질 수 있다고 믿습니다.",

    ]

    const Intro_content = [
 
        
        ["러쉬 소개" , "러쉬는 자연에서 얻은 신선한 재료와 동물실험을 하지 않는 정직한 재료를 사용하여 모든 제품을 손으로 만듭니다."],
        ["러쉬 역사" ,  "1995년, 러쉬는 영국에 항구도시 풀(Poole)에서 탄생했습니다."],
        ["이념과 가치" ,  "우리는 믿습니다 신선한 과일과 채소, 최상의 에센셜 오일 그리고 안전한 원료를 사용하여 효과적인 제품 만들 수 있다는 것을 믿습니다."],
        
    ]

    return(

        <>
        <h2 className="IntroTit">러쉬소개</h2>
        <div className="intro_wrap w-100-per flex-style-3 m0-auto">
         <ul className="lushBox">
            <div className="lush_box1">
            {Intro_main.map((v,i) => 
                <li key={'intro-cont'+ i}>
                    <img src={v} alt="" />
                    <span>{Intro_boxText[i]}</span>
                </li>            
                )}
                 </div>
             <div className="Intro_txt">
               {Intro_content.map((v,i) => 
                 <li>
                   <span className="bigIntro">{Intro_content[i][0]}  
                   <p>{Intro_content[i][1]}
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
