import React, { useState } from "react";
import { useForm } from "react-hook-form";


const Banner = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  
  const onSubmit = (data) => console.log(data);

  const [mail, setMail] = useState(false);

  const openMail = () => { setMail(true);}
  const closeMail = () => { setMail(false);}


    return (

        <>
         <div id="event" className="pt-50"></div>
         <div className="BannerWrap w-100-per h-100-per m0-auto pt-50 pb-50">
             <ul>
                <li>
                    <span>증정 이벤트</span>
                    <p className="pt-10 pb-10">환경의 날을 맞이하여 러쉬와 함께하세요.</p>
                    <button onClick={openMail}>바로 참여하기</button>
                </li>
             </ul>
         </div>
        <div className={mail ? "formWrap on" : "formWrap"}>
            <span>이름과 이메일을 입력해주세요.</span>
            <form onSubmit={handleSubmit(onSubmit)} className=".color-f formCont">
                        <input placeholder="이름을 입력해주세요" className="emailBox"
                    {...register("firstName", { required: true })} 
                    aria-invalid={errors.firstName ? "true" : "false"} 
                />
                {errors.firstName?.type === 'required' && <p role="alert" className="color-f ">Name is required</p>}
                        <input className="emailBox" placeholder="이메일을 입력해주세요"
                    {...register("mail", { required: "Email Address is required" })} 
                    aria-invalid={errors.mail ? "true" : "false"} 
                />
                {errors.mail && <p role="alert" className="color-f ">{errors.mail?.message}</p>}
                <input className="subBtn" type="submit" />
                <button className="pop_close" onClick={closeMail}>×</button>
            </form>
            </div>
        </>
    )
}

export default Banner;