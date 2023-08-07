import React , { useState , useEffect } from 'react';

const Banner2 = () => {

    const [ move , setMove ] = useState(0);
    
    const moveBg = () => {

        if(window.scrollY > 2800){ setMove(1);}
        else{ setMove(0);}
    }

    useEffect( () => {
  
        const moving = () => { setInterval( () => { window.addEventListener("scroll" , moveBg);},500)}

         return() => { clearInterval(moving); window.addEventListener("scroll" , moveBg);}

    },[])

    return(

        <>
        <div className="bannerBack w-100-per h-600 pt-100 pb-100">
            <div className={move ? "banner_pic" : "banner_pic move"}></div>
            <div className="banner_txt">
                    <span>기부와 나눔</span>
                    <p>우리의 글로벌 기부 생태계는 적절하고 급진적이며 광범위 합니다.</p>
                    <button id="product"><a href="">자세히 보기</a></button>
            </div>
        </div>
        
        </>
    )
    
}
export default Banner2;