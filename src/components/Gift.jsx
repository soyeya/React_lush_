import React from 'react';
import giftDB from '../json/Gift.json';

const gift = () =>{

    return(

        <>
        <div className="giftWrap" id="service">
            <div className="gift_title">
                <p>미리보는 러쉬</p>
                <p>러쉬에서 만나는 다채로운 서비스</p>
            </div>
        <div className="giftBox">
           {giftDB.giftCont.map((v,i) => (
             <ul key={'giftbox' + i}>
                 <li className='gift_bg'></li>
                    <li>
                        <p>{v.title}</p>
                        <p>{v.content}</p>
                        </li>
                </ul>
                    ))}
            </div>
        </div>
        </>
    )


}

export default gift;