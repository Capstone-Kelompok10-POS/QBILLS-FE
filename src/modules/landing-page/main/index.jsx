"use client";
import { useState } from "react";
import Image from "next/image";
import bgEllipse from "@/public/assets/images/landing-page/ellipse-hero-section.svg";
import mockHeroSection from "@/public/assets/images/landing-page/mockup-hero-section.png";
import mockOurFeatures1 from "@/public/assets/images/landing-page/mockup-ourfeatures-1.png";
import mockOurFeatures2 from "@/public/assets/images/landing-page/mockup-ourfeatures-2.png";
import mockOurFeatures3 from "@/public/assets/images/landing-page/mockup-ourfeatures-3.png";
import mockOurFeatures4 from "@/public/assets/images/landing-page/mockup-ourfeatures-4.png";
import mockOurFeatures5 from "@/public/assets/images/landing-page/mockup-ourfeatures-5.png";
import logoQbills2 from "@/public/assets/images/logos/brown/logo-4.png";
import logoQbills3 from "@/public/assets/images/logos/brown/logo-5.png";
import getApps from "@/public/assets/images/landing-page/getapps.png";
import downloadImage from "@/public/assets/images/landing-page/get_app.png";
import logoQbills from "@/public/assets/images/logos/brown/logo-2.png";
import bgLogoQbills from "@/public/assets/images/logos/brown/logo-2.png";
import { Button, IconButton } from "@/components";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import AccountCircleIcon from "@mui/icons-material/AccountCircleRounded";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import PaymentsIcon from "@mui/icons-material/Payments";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
export const Main = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  return (
    <main>
      {/*  NAVBAR SECTION */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-P1 px-24  shadow-md">
        <section className="flex items-center justify-center gap-2">
          <Image
            src={logoQbills}
            alt="Qbills"
            width={40}
            quality={30}
            priority
            className="h-auto"
          />
          <div className="flex flex-col items-center justify-center">
            <Image
              src={logoQbills2}
              alt="Qbills"
              width={110}
              quality={30}
              priority
              className="mb-1 h-auto"
            />
            <Image
              src={logoQbills3}
              alt="Qbills"
              width={130}
              quality={30}
              priority
              className="h-auto"
            />
          </div>
        </section>
        <section>
          <ul className="flex items-center font-semibold text-P4">
            <li>
              <a href="#hero" className="mx-10 hover:text-P5">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="mx-10 hover:text-P5">
                About Us
              </a>
            </li>
            <li>
              <a href="#features" className="mx-10 hover:text-P5">
                Features
              </a>
            </li>
            <li>
              <a href="#faq" className="mx-10 hover:text-P5">
                FAQ
              </a>
            </li>
            <li>
              <a href="#getapp" className="mx-10">
                <Button type={"button"} size={"md-full"} label={"Get app"} />
              </a>
            </li>
          </ul>
        </section>
      </nav>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-P3 to-P4"
      >
        <Image
          src={bgLogoQbills}
          alt="QBills"
          width={500}
          quality={30}
          priority
          className="absolute -top-10 left-5 h-auto -rotate-12 opacity-20"
        />
        <Image src={bgEllipse} alt="Ellipse" quality={10} priority className="absolute right-0" />

        <div className="relative z-10 grid h-full w-full grid-cols-2">
          <div className="flex items-center justify-center gap-5 text-N1">
            <div className="-ml-52 w-[550px] space-y-5">
              <h1 className="text-[24px] font-bold">Point Of Sales</h1>
              <div className="w-[690px]">
                <h1 className="text-[64px] font-semibold">
                  Boost Your Sales with Our Point of Sales App
                </h1>
                <p className="text-justify text-[20px] leading-10">
                  Manage your transaction, track product, and analyze report sales.
                  <span className="font-bold">Build It On Desktop, Launch It On Mobile.</span> You
                  can gets it on Google Play and App Store.
                </p>
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
      <section id="about" className="flex h-[703px] w-full justify-center bg-P1">
        <div className="my-[155px] ml-[101px] h-[304px] w-[606px]">
          <h1 className="text-N07 text-[64px] font-semibold">About Us</h1>
          <p className="mt-[50px] text-justify text-[20px] font-normal leading-9 text-N5">
            Elevate your sales strategy and delight customers with our state-of-the-art POS
            application, offering a seamless and user-friendly interface for enhanced transactions.
            Qbills is here to be a solution for your business, features are available to make your
            work easier, use it now
          </p>
        </div>

        <div className="my-[155px] ml-[165px] mr-[101px] h-[369px] w-[924px]">
          <div className="flex gap-20">
            <div className="h-[152px] w-[422px]">
              <div>
                <TakeoutDiningIcon className="text-[50px] text-P3" />
              </div>
              <h2 className="text-[24px] font-semibold">Create Order</h2>
              <p className="text-[16px] font-normal leading-6 text-N5">
                You have the option to request food through the Qbilss POS application.
              </p>
            </div>
            <div className="h-[152px] w-[422px]">
              <div>
                <AccountCircleIcon className="text-[50px] text-P3" />
              </div>
              <h2 className="text-[24px] font-semibold">Manage Account Cashier</h2>
              <p className="text-[16px] font-normal leading-6 text-N5">
                The use of membership provides its users with coupons, discounts, rewards, loyalty
                points.
              </p>
            </div>
          </div>

          <div className="mt-20 flex gap-20">
            <div className="h-[152px] w-[422px]">
              <div>
                <StoreMallDirectoryOutlinedIcon className="text-[50px] text-P3" />
              </div>
              <h2 className="text-[24px] font-semibold">Manage Product</h2>
              <p className="text-[16px] font-normal leading-6 text-N5">
                In the admin features there are product management features for coffee shops.
              </p>
            </div>
            <div className="h-[152px] w-[422px]">
              <div>
                <PaymentsIcon className="text-[50px] text-P3" />
              </div>
              <h2 className="text-[24px] font-semibold">Track Transaction History</h2>
              <p className="text-[16px] font-normal leading-6 text-N5">
                The use of membership provides its users with coupons, discounts, rewards, loyalty
                points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Features */}
      <section id="features" className="mx-auto w-full bg-P1">
        <p className="pt-16 text-center text-6xl font-semibold text-N7">Our Features</p>
        <div className="mx-auto mt-20 flex w-11/12 items-center justify-center gap-x-2">
          <div className="w-5/12">
            <p className="text-6xl font-semibold text-P6">Organize Your Product</p>
            <p className="mt-4 leading-6">
              Take full control of your products with intuitive organization tools. Categorize,
              label, price, description and sort your inventory with ease, ensuring every item is
              precisely where it needs to be.
            </p>
          </div>
          <div className="ms-auto">
            <Image src={mockOurFeatures1} width={600} alt="Mockup" />
          </div>
        </div>
        <div className="mx-auto mt-20 flex  w-11/12 items-center justify-center gap-x-2">
          <div className="me-auto">
            <Image src={mockOurFeatures2} width={600} alt="Mockup" />
          </div>
          <div className="w-5/12">
            <p className="text-6xl font-semibold text-P6">Manage Your Own Account Cashier</p>
            <p className="mt-4 leading-6">
              Create personalized accounts for each cashier. Monitor performance, track sales, and
              manage permissions seamlessly for a tailored experience. Meet the game-changer in your
              point-of-sale experience: our advanced Account Cashier Management feature! Take
              control of transactions, accountability, and cashier performance effortlessly
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 flex  w-11/12 items-center justify-center gap-x-2">
          <div className="w-5/12">
            <p className="text-6xl font-semibold text-P6">Track Transaction History</p>
            <p className="mt-4 leading-6">
              Stay updated with real-time reporting on cash flow and sales by cashier. Ensure
              accuracy and accountability in every transaction. Tie transactions to specific
              cashiers for a transparent and traceable record of sales.
            </p>
          </div>
          <div className="ms-auto">
            <Image src={mockOurFeatures3} width={600} alt="Mockup" />
          </div>
        </div>
        <div className="mx-auto mt-20 flex  w-11/12 items-center justify-center gap-x-2">
          <div className="me-auto">
            <Image src={mockOurFeatures4} width={600} alt="Mockup" />
          </div>
          <div className="w-5/12">
            <p className="text-6xl font-semibold text-P6">Manage Membership from Dashboard</p>
            <p className="mt-4 leading-6">
              Quickly locate and access member profiles with robust search functionalities.
              Seamlessly retrieve customer information whenever you need it.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 flex  w-11/12 items-center justify-center gap-x-2">
          <div className="w-5/12">
            <p className="text-6xl font-semibold text-P6">Analyze Sales Report</p>
            <p className="mt-4 leading-6">
              Elevate your business strategy with our powerful Sales Report feature! Dive deep into
              your sales performance, understand trends, and make data-driven decisions
              effortlessly, all within your point-of-sale application. Monitor revenue streams and
              track profitability effortlessly. Understand where your sales are coming from and
              identify areas for growth.
            </p>
          </div>
          <div className="ms-auto">
            <Image src={mockOurFeatures5} width={600} alt="Mockup" />
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" className="mx-auto w-full bg-P1 ">
        <p className="pt-48  text-center text-6xl font-semibold text-N7">
          Frequently Asked Questions (FAQ)
        </p>
        <div className="mx-auto mt-24 grid w-full grid-cols-2 place-items-center gap-y-10">
          <div
            className={`flex ${
              isOpen1 ? "h-[186px] flex-col border-2 border-P4 py-20" : "h-[140px]"
            } w-[700px] items-center justify-center rounded-2xl bg-N1 shadow-lg`}
          >
            <p className="me-auto ml-10 w-9/12 text-lg font-semibold">
              How to add products/manage products/access products?
            </p>
            <div className="mr-8 ms-auto">
              <IconButton
                size={"sm"}
                icon={!isOpen1 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                onClick={() => setIsOpen1(!isOpen1)}
              />
            </div>
            {isOpen1 && (
              <p className="-mt-6 me-auto ml-10 w-9/12 text-base">
                To add, manage, or access products, navigate to the &quot;Product Management&quot;
                section in the application. Use the designated features to add new items, update
                existing ones, and access the product inventory.s
              </p>
            )}
          </div>
          <div
            className={`flex ${
              isOpen2 ? "h-[186px] flex-col border-2 border-P4 py-20" : "h-[140px]"
            } w-[700px] items-center justify-center rounded-2xl bg-N1 shadow-lg`}
          >
            <p className="me-auto ml-10 w-9/12 text-lg font-semibold">
              How is the management of cashier accounts handled within the application?
            </p>
            <div className="mr-8 ms-auto">
              <IconButton
                size={"sm"}
                icon={!isOpen2 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                onClick={() => setIsOpen2(!isOpen2)}
              />
            </div>
            {isOpen2 && (
              <p className="-mt-6 me-auto ml-10 w-9/12 text-base">
                Cashier accounts can be effectively managed within the application. Access the
                &quot;Account Management&quot; section, where you can add or remove cashier
                accounts, assign roles, and monitor their activities for streamlined cashier
                management.
              </p>
            )}
          </div>
          <div
            className={`flex ${
              isOpen3 ? "h-[186px] flex-col border-2 border-P4 py-20" : "h-[140px]"
            } w-[700px] items-center justify-center rounded-2xl bg-N1 shadow-lg`}
          >
            <p className="me-auto ml-10 w-9/12 text-lg font-semibold">
              What payments are possible?
            </p>
            <div className="mr-8 ms-auto">
              <IconButton
                size={"sm"}
                icon={!isOpen3 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                onClick={() => setIsOpen3(!isOpen3)}
              />
            </div>
            {isOpen3 && (
              <p className="-mt-6 me-auto ml-10 w-9/12 text-base">
                To add, manage, or access products, navigate to the &quot;Product Management&quot;
                section in the application. Use the designated features to add new items, update
                existing ones, and access the product inventory.
              </p>
            )}
          </div>
          <div
            className={`flex ${
              isOpen4 ? "h-[186px] flex-col border-2 border-P4 py-20" : "h-[140px]"
            } w-[700px] items-center justify-center rounded-2xl bg-N1 shadow-lg`}
          >
            <p className="me-auto ml-10 w-9/12 text-lg font-semibold">
              Where can users view transaction history, both on mobile and the dashboard?
            </p>
            <div className="mr-8 ms-auto">
              <IconButton
                size={"sm"}
                icon={!isOpen4 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                onClick={() => setIsOpen4(!isOpen4)}
              />
            </div>
            {isOpen4 && (
              <p className="-mt-6 me-auto ml-10 w-9/12 text-base">
                Users can conveniently view transaction history both on the mobile app and the
                dashboard. Simply navigate to the &quot;Transaction History&quot; tab to access
                detailed records of past transactions.
              </p>
            )}
          </div>
          <div
            className={`flex ${
              isOpen5 ? "h-[186px] flex-col border-2 border-P4 py-20" : "h-[140px]"
            } w-[700px] items-center justify-center rounded-2xl bg-N1 shadow-lg`}
          >
            <p className="me-auto ml-10 w-9/12 text-lg font-semibold">
              How can first-time users access a manual guide when initially using the application?
            </p>
            <div className="mr-8 ms-auto">
              <IconButton
                size={"sm"}
                icon={!isOpen5 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                onClick={() => setIsOpen5(!isOpen5)}
              />
            </div>
            {isOpen5 && (
              <p className="-mt-6 me-auto ml-10 w-9/12 text-base">
                Yes, there is a comprehensive manual guide available for first-time users. You can
                access it through the &quot;Help&quot; or &quot;Getting Started&quot; section in the
                application, providing step-by-step instructions for a seamless onboarding
                experience.
              </p>
            )}
          </div>
          <div
            className={`flex ${
              isOpen6 ? "h-[186px] flex-col border-2 border-P4 py-20" : "h-[140px]"
            } w-[700px] items-center justify-center rounded-2xl bg-N1 shadow-lg`}
          >
            <p className="me-auto ml-10 w-9/12 text-lg font-semibold">
              How does the application allow for the management of member accounts?
            </p>
            <div className="mr-8 ms-auto">
              <IconButton
                size={"sm"}
                icon={!isOpen6 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                onClick={() => setIsOpen6(!isOpen6)}
              />
            </div>
            {isOpen6 && (
              <p className="-mt-6 me-auto ml-10 w-9/12 text-base">
                The application offers a user-friendly interface for managing member accounts. In
                the &quot;Member Management&quot; section, you can add or remove members, update
                information, and ensure a personalized experience for your customers.
              </p>
            )}
          </div>
        </div>
      </section>
      {/*  Gets App */}
      <section id="getapp" className="w-full bg-P1">
        <div className="mx-auto flex w-[1711px] items-center justify-center py-40">
          <div className="w-5/12">
            <p className="text-[60px] font-semibold text-P6">
              QBills is available for iOS and Android
            </p>
            <p>
              The Qbills application can be downloaded for iOS and Android devices via the App Store
              and Google Play Store. Download QBills now and experience the difference. Join
              thousands who&apos;ve embraced a smarter, more efficient way to empower businesses of
              all sizes with an intuitive, robust, and flexible point-of-sale solution.
            </p>
            <Image src={downloadImage} width={250} alt="Mockup" className="mt-5" />
          </div>
          <div className="ms-auto">
            <Image src={getApps} width={600} alt="Mockup" />
          </div>
        </div>
      </section>
    </main>
  );
};
