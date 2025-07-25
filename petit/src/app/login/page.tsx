'use client'
import BannerCarousel from "../components/BannerCarousel";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
import Image from "next/image";
const Login = () => {
  return <div className="overflow-y-auto h-full">
    <div className="h-[60vh]"><BannerCarousel /></div>
    <div className="h-[40vh] p-12">
        <div className="text-3xl font-extrabold">로그인</div>
        <div className="text-sm lg:text-base mt-[0.5vh]">소셜로그인을 통해 보다 쉽게 Petit을 이용해보세요!</div>
        <div className="w-full mt-[4vh] pb-[10vh]">
            <button className="border border-black w-full h-[7vh] rounded-lg items-center flex justify-center mb-[4vh]">
                    <Image src={google} alt="google" width={25} height={25}></Image><span className="ml-[1vh] text-2xl font-[600]">Google</span>
            </button>
            <button className="border border-black w-full h-[7vh] rounded-lg items-center flex justify-center mb-[4vh]">
                    <Image src={apple} alt="apple" width={20} height={20}></Image><span className="ml-[1vh] text-2xl font-[600]">Apple</span>
            </button>
        </div>
    </div>
  </div>;
};

export default Login;   