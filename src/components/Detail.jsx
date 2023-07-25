import React , {useState , useEffect} from "react";
import { useParams } from 'react-router-dom';
import shower1 from '../asset/Image/shower1.png';
import shower2 from '../asset/Image/shower2.png';
import shower3 from '../asset/Image/shower3.png';
import shower4 from '../asset/Image/shower4.png';
import bath1 from '../asset/Image/bath1.png';
import bath2 from '../asset/Image/bath2.png';
import bath3 from '../asset/Image/bath3.png';
import bath4 from '../asset/Image/bath4.png';
import body1 from '../asset/Image/body1.png';
import body2 from '../asset/Image/body2.png';
import body3 from '../asset/Image/body3.png';
import body4 from '../asset/Image/body4.png';
import perfume1 from '../asset/Image/perfume1.png';
import perfume2 from '../asset/Image/perfume2.png';
import perfume3 from '../asset/Image/perfume3.png';
import perfume4 from '../asset/Image/perfume4.png';


const detail_cont = [

    [

        [shower1 , "슬리피 샤워젤" , "당신에게 향기로운 입욕을 선물합니다."],
        [shower2 , "더 올리브 프렌치 샤워젤" , "늘 당신의 피부를 빛나게 해줄거예요."],
        [shower3 , "더티 스프링 워시 샤워젤" , "피부를 밝고 향긋하게."],
        [shower4 , "럽럽럽 샤워스크럽" , "건강한 재료만을 담아 늘 싱그럽게."],
    ],

    [

        [bath1 , "섹스밤 배쓰밤" , "일렁이는 향기와 함께."],
        [bath2 , "인터갈락틱 배쓰밤" , "피부를 건강하게 지켜주세요."],
        [bath3 , "더 컴포터 버블바" , "매일을 싱그럽게 표현하세요."],
        [bath4 , "슬리피 버블바" , "나 자신을 위한 건강한 버블바."],
    ],
    [

        [body1 , "드림크림 보디로션" , "건강하게 보습을 지켜주세요."],
        [body2 , "팬지 보디로션" , "신선한 재료로 만든 믿을 수 있는 제품."],
        [body3 , "슬리피 보디로션" , "싱그러운 잠을 선물합니다."],
        [body4 , "헬핑크림 핸드로션" , "자연을 발라 나 자신을 싱그럽게."],
    ],
    [

        [perfume1 , "데스 앤 디 케이 퍼퓸" , "다른 누구도 아닌 나를 표헌해보세요."],
        [perfume2 , "팬지 퍼퓸" , "자연과 음악, 시가 주는 영감으로 빛어낸 특별한 향기."],
        [perfume3 , "정크 퍼퓸" , "러쉬만의 건강함으로 특별한 향기를."],
        [perfume4 , "로즈잼 솔리드 퍼퓸" , "싱그러운 자연의 장미를 탄탄하게"],
    ]

]


const Detail = () => {

    const [brand_detail , setBrand_detail] = useState(0);
    const [brand_context , setBrand_context] = useState(0);

const item_num = useParams();
console.log(item_num);

    useEffect(() => {

        const detail_page = item_num.page //page값을 산출
        console.log(detail_page);
        // const detail_index = detail_page.split("-");
    

        // setBrand_detail(detail_index[0]);
        // setBrand_context(detail_index[1]);
        
    }, []);

    
    console.log(brand_detail);
    console.log(brand_context);




    return(

        <>
         <div className="detail_wrap">
            <ul className="detail-cont">
                <li>
                    <img src={detail_cont[brand_detail][brand_context][0]} alt="" />
                    <p className="detail-title">{detail_cont[brand_detail][brand_context][1]}</p>
                    <p>{detail_cont[brand_detail][brand_context][2]}</p>
                </li>  
            </ul>
         </div>
        </>
    )

}

export default Detail;
