import React ,  { useState , useEffect } from 'react';
import icon1 from '../asset/Image/icon1.svg';
import icon2 from '../asset/Image/icon2.svg';
import icon3 from '../asset/Image/icon3.svg';
import icon4 from '../asset/Image/icon4.svg';
import icon5 from '../asset/Image/icon5.svg';
import icon6 from '../asset/Image/icon6.svg';


const Lushvalue = () => {

    const Iconimg = {

         icon1 : [ icon1, icon2, icon3 ],
         icon2 : [ icon4, icon5, icon6 ]
    }

    const [isHover , setIshover] = useState(false);
    const [seHover , setSehover] = useState(false);

    function ChangeBack(){

        setIshover(true);
    }

    function ReBack(){

        setIshover(false);
    }

    function ChangeBack2(){

        setSehover(true);
        
    }
    function ReBack2(){

        setSehover(false);

    }
    useEffect(() => {

       
    },[])


     return(

        <>
    <div className={isHover ? "valueWrap back1" : "valueWrap" && seHover ? "valueWrap back2" : "valueWrap"}>
            <div className="valueList">
                <ul>
                    {Iconimg.icon1.map((v,i) => (
                    <li key={'iconImg1_' + i} className={'value' + i} onMouseOver={ChangeBack} onMouseOut={ReBack}><img src={v} alt={'iconImg'+i}/></li>
                    ))}
                </ul>
                <ul>
                    {Iconimg.icon2.map((v,i) => (
                    <li key={'iconImg2_' + i} onMouseOver={ChangeBack2} onMouseOut={ReBack2}><img src={v} alt={'iconImg'+i} /></li>
                    ))}
                </ul>
               
                    
            </div>
        </div>
        </>
     )


}

export default Lushvalue;