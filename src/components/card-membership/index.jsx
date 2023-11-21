import Background from "@/public/assets/images/card-membership/bg.png";
import LogoET from "@/public/assets/images/logos/white/logo-5.png";
import Logo from "@/public/assets/images/logos/white/logo-2.png";
import LogoQbills from "@/public/assets/images/logos/black/logo-2.png";
import Image from "next/image";

export const CardMembership = ({name}) => {
  return (
    
        <section className="flex w-[774px] h-[469px] rounded-lg">

          {/* BUG: Bug in Background Image */}
          <div className="w-[85%] relative bg-black rounded-l-[20px]" style={{backgroundImage: `url(${Background})`}}>  

            <div className="flex items-center justify-center pt-24">
              <Image
              className="pt-5"
            src={Logo}
            alt="Logo"
            width={105}/>

            <div className="">
            <span className="text-white text-[95px] font-semibold font-inter">QBILLS</span>
            <Image
            className="mx-3"
            src={LogoET}
            alt="Logo Exclusive Transaction"
            width={300}
            />
            </div>
            </div>

            <div className="w-[417px] h-[92px] absolute left-8 bottom-14">
            <span className="text-N1 text-[40px] leading-[46px] font-semibold font-sans">{name}</span>
            </div>
          </div>

          {/* Headline  */}
          <div className="bg-P4 w-[15%] rounded-r-[20px] relative">
          <p className="absolute top-20 -right-10 font-semibold text-[28px] leading-10 text-N1 rotate-90 ">MEMBERSHIP CARD</p>

          <div className="overflow-hidden">
          <Image
          className="rotate-45 max-w-ful opacity-5"
          src={LogoQbills}
          alt="logo"
          />
          <Image
          className=" opacity-5 -mt-6 -rotate-45"
          src={LogoQbills}
          width={90}
          alt="logo"/>
          <Image
          className="max-w-ful opacity-5 "
          src={LogoQbills}
          alt="logo"/>
          </div>

          <div className="w-[226px] h-[108px] bg-P5 rounded-xl flex items-center absolute right-12 bottom-7">
          <p className="p-7 text-[12px] leading-[20px] text-P2 font-semibold text-center font-sans">*Get Reward now by showing this membership card to cashier and get the point.</p>
          </div>

          </div>
        </section>
  )
}
