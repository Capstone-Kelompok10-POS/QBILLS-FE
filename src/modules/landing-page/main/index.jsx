import Image from "next/image";
import bgEllipse from "@/public/assets/images/landing-page/ellipse-hero-section.svg";
import mockHeroSection from "@/public/assets/images/landing-page/mockup-hero-section.png";
import logoQbills from "@/public/assets/images/logos/brown/logo-2.png";
import { Button } from "@/components";
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import AccountCircleIcon from '@mui/icons-material/AccountCircleRounded';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import PaymentsIcon from '@mui/icons-material/Payments';

export const Main = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-screen w-screen overflow-hidden bg-gradient-to-r from-P3 to-P4">
        <Image
          src={logoQbills}
          alt="QBills"
          width={500}
          quality={30}
          priority
          className="absolute -top-10 left-5 h-auto -rotate-12 opacity-20"
        />
        <Image src={bgEllipse} alt="Ellipse" quality={10} priority className="absolute right-0" />

        <div className="relative z-10 grid h-full w-full grid-cols-2">
          <div className="flex items-center justify-center gap-5 text-N1">
            <div className="w-[540px] space-y-5">
              <h1 className="text-5xl font-semibold">
                Boost Your Sales with
                <br />
                Our Point of Sales App
              </h1>
              <p className="text-justify">
                Manage your transaction, track product, and analyze report sales. Build It On
                Desktop, Launch It On Mobile. You can gets it on Google Play and App Store.
              </p>
              <div className="flex items-center gap-5">
                <Button type={"button"} size={"md"} label={"Gets App"} />
                <Button type={"button"} variant={"outline"} size={"md"} label={"Gets App"} />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={mockHeroSection}
              alt="Mockup"
              width={700}
              quality={50}
              priority
              className="-mb-5 -mr-24"
            />
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="w-full h-[703px] bg-P1 flex justify-center">
        <div className="w-[606px] h-[304px] ml-[101px] my-[155px]">
          <h1 className="font-semibold text-[64px] text-N07">About Us</h1>
          <p className="text-justify text-[20px] mt-[50px] font-normal text-N5 leading-9">
          Elevate your sales strategy and delight customers with our state-of-the-art POS application, offering a seamless and user-friendly interface for enhanced transactions. Qbills is here to be a solution for your business, features are available to make your work easier, use it now
          </p>
        </div>
          
        <div className="w-[924px] h-[369px] ml-[165px] mr-[101px] my-[155px]">
          <div className="flex gap-20">
          <div className="w-[422px] h-[152px]">
              <div><TakeoutDiningIcon className="text-P3 text-[50px]"/></div>
              <h2 className="text-[24px] font-semibold">Create Order</h2>
              <p className="text-N5 text-[16px] leading-6 font-normal">You have the option to request food through the Qbilss POS application.</p>
            </div>
            <div className="w-[422px] h-[152px]">
              <div><AccountCircleIcon className="text-P3 text-[50px]"/></div>
              <h2 className="text-[24px] font-semibold">Manage Account Cashier</h2>
              <p className="text-N5 text-[16px] leading-6 font-normal">The use of membership provides its users with coupons, discounts, rewards, loyalty points.</p>
            </div>
          </div>

          <div className="mt-20 flex gap-20">
          <div className="w-[422px] h-[152px]">
              <div><StoreMallDirectoryOutlinedIcon className="text-P3 text-[50px]"/></div>
              <h2 className="text-[24px] font-semibold">Manage Product</h2>
              <p className="text-N5 text-[16px] leading-6 font-normal">In the admin features there are product management features for coffee shops.</p>
            </div>
            <div className="w-[422px] h-[152px]">
              <div><PaymentsIcon className="text-P3 text-[50px]"/></div>
              <h2 className="text-[24px] font-semibold">Track Transaction History</h2>
              <p className="text-N5 text-[16px] leading-6 font-normal">The use of membership provides its users with coupons, discounts, rewards, loyalty points.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Features */}
      <section></section>
    </main>
  );
};
