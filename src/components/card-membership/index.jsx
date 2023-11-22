import LogoET from "@/public/assets/images/logos/white/logo-5.png";
import Logo from "@/public/assets/images/logos/white/logo-2.png";
import LogoQbills from "@/public/assets/images/logos/black/logo-2.png";
import Image from "next/image";

export const CardMembership = ({ name }) => {
  return (
    <section className="flex h-[469px] w-[774px]">
      <div className="background relative w-[85%] rounded-l-[20px]">
        <div className="flex items-center justify-center pt-24">
          <Image className="pt-5" src={Logo} alt="Logo" width={105} />
          <div>
            <span className="font-inter text-[95px] font-semibold text-white">QBILLS</span>
            <Image className="mx-3" src={LogoET} alt="Logo Exclusive Transaction" width={300} />
          </div>
        </div>
        <div className="absolute bottom-10 left-8 h-[92px] w-[417px]">
          <span className="text-[40px] font-semibold leading-[46px] text-N1">{name}</span>
        </div>
      </div>

      {/* Headline  */}
      <div className="relative w-[15%] rounded-r-[20px] bg-P4">
        <p className="absolute -right-16 top-36 rotate-90 text-[28px] font-semibold leading-10 text-N1 truncate">
          MEMBERSHIP CARD
        </p>

        <div className="overflow-hidden">
          <Image className="max-w-ful rotate-45 opacity-5" src={LogoQbills} alt="logo" />
          <Image className=" -mt-6 -rotate-45 opacity-5" src={LogoQbills} width={90} alt="logo" />
          <Image className="max-w-ful opacity-5 " src={LogoQbills} alt="logo" />
        </div>

        <div className="absolute bottom-7 right-12 flex h-[108px] w-[226px] items-center rounded-xl bg-P5">
          <p className="p-7 text-center text-[12px] font-semibold leading-[20px] text-P2">
            *Get Reward now by showing this membership card to cashier and get the point.
          </p>
        </div>
      </div>
    </section>
  );
};
