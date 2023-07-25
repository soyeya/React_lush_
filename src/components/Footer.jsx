import React from "react";
import lushLogo from '../asset/Image/lushLogo.png';


const footer = () => {

    const footerContent = {

        footerMenu1 : [

                "개인정보처리방침",
                "영상정보관리지침",
                "이용약관",

        ],

        footerMenu2 : [

            "서울 강남구 학동로 336 (메이트리 빌딩(matree B/D)) 1층 주식회사 러쉬코리아",
            "사이트 운영자 : 주식회사 러쉬코리아 I 대표이사 : 우미령",
            "사업자 등록번호 : 201-81-77964 사업자정보확인",
            "통신판매업 신고번호 : 2012-서울서초-0647 I 개인정보보호책임자 : 신상훈",
            "COPYRIGHT © LUSHKOREA.CO.LTD.ALL RIGHTS RESERVED.",
    
        ],

        footerMenu3 : [

            "고객센터",
            "1644-2357",
            "webmaster@lush.co.kr",
            "상담전화 13:00 ~16:00 (평일)",
            "상담톡 10:00 ~16:00 (평일)"
    
        ],

        footerMenu4 : [

            "기업선물",
            "070-4713-8543",
            "order@lush.co.kr"
    
        ]
    

    }


    return(

        <>
         <div className="footer">
             <ul>
            {footerContent.footerMenu1.map((v,i) => (
                <li key={'footerMenu1'+ i}>
                <p>{footerContent.footerMenu1[i]}</p>
                </li>
            ))}
             <img src={lushLogo}/>
             </ul>
             <ul>
            {footerContent.footerMenu2.map((v,i) => (
                <li key={'footerMenu2'+ i}>
                <p>{footerContent.footerMenu2[i]}</p>
                </li>
            ))}
             </ul>
             <ul>
            {footerContent.footerMenu3.map((v,i) => (
                <li key={'footerMenu3'+ i}>
                <p>{footerContent.footerMenu3[i]}</p>
                </li>
            ))}
             </ul>
             <ul>
            {footerContent.footerMenu4.map((v,i) => (
                <li key={'footerMenu4'+ i}>
                <p>{footerContent.footerMenu4[i]}</p>
                </li>
            ))}
             </ul>

          </div>
        </>
    )


}


export default footer;