import Image from "next/image";
import bgEllipse from "@/public/assets/images/landing-page/ellipse-hero-section.svg";
import mockHeroSection from "@/public/assets/images/landing-page/mockup-hero-section.png";
import mockOurFeatures1 from "@/public/assets/images/landing-page/mockup-ourfeatures-1.png";
import mockOurFeatures2 from "@/public/assets/images/landing-page/mockup-ourfeatures-2.png";
import mockOurFeatures3 from "@/public/assets/images/landing-page/mockup-ourfeatures-3.png";
import mockOurFeatures4 from "@/public/assets/images/landing-page/mockup-ourfeatures-4.png";
import mockOurFeatures5 from "@/public/assets/images/landing-page/mockup-ourfeatures-5.png";
import getApps from "@/public/assets/images/landing-page/getapps.png";
import downloadImage from "@/public/assets/images/landing-page/get_app.png";
import logoQbills from "@/public/assets/images/logos/brown/logo-2.png";
import { Button, IconButton } from "@/components";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import AccountCircleIcon from "@mui/icons-material/AccountCircleRounded";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import PaymentsIcon from "@mui/icons-material/Payments";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export const Main = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-P3 to-P4">
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
      <section className="flex h-[703px] w-full justify-center bg-P1">
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
      <section className="w-full mx-auto bg-P1">
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
            <Image src={mockOurFeatures1} width={600} />
          </div>
        </div>
        <div className="mx-auto mt-20 flex  w-11/12 items-center justify-center gap-x-2">
          <div className="me-auto">
            <Image src={mockOurFeatures2} width={600} />
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
            <Image src={mockOurFeatures3} width={600} />
          </div>
        </div>
        <div className="mx-auto mt-20 flex  w-11/12 items-center justify-center gap-x-2">
          <div className="me-auto">
            <Image src={mockOurFeatures4} width={600} />
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
            <Image src={mockOurFeatures5} width={600} />
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="w-full mx-auto bg-P1 ">
        <p className="pt-48  text-center text-6xl font-semibold text-N7">
          Frequently Asked Questions (FAQ)
        </p>
        <div className="mx-auto mt-24 grid w-full grid-cols-2 place-items-center gap-y-10">
          <div className="flex h-[140px] w-[700px] items-center justify-center rounded-2xl bg-N1 shadow-lg">
            <p className="me-auto ml-10 w-9/12 text-lg font-semibold">
              How to add products/manage products/access products?
            </p>
            <div className="mr-8 ms-auto">
              <IconButton size={"sm"} icon={<KeyboardArrowDownIcon />} />
            </div>
          </div>
          <div className="flex h-[140px] w-[700px] items-center justify-center rounded-2xl bg-N1 shadow-lg">
            <p className="me-auto ml-10 w-9/12 text-lg font-semibold">
              How is the management of cashier accounts handled within the application?
            </p>
            <div className="mr-8 ms-auto">
              <IconButton size={"sm"} icon={<KeyboardArrowDownIcon />} />
            </div>
          </div>
          <div className="flex h-[140px] w-[700px] items-center justify-center rounded-2xl bg-N1 shadow-lg">
            <p className="me-auto ml-10 w-9/12 text-lg font-semibold">
              What payments are possible?
            </p>
            <div className="mr-8 ms-auto">
              <IconButton size={"sm"} icon={<KeyboardArrowDownIcon />} />
            </div>
          </div>
          <div className="flex h-[140px] w-[700px] items-center justify-center rounded-2xl bg-N1 shadow-lg">
            <p className="me-auto ml-10 w-9/12 text-lg font-semibold">
              Where can users view transaction history, both on mobile and the dashboard?
            </p>
            <div className="mr-8 ms-auto">
              <IconButton size={"sm"} icon={<KeyboardArrowDownIcon />} />
            </div>
          </div>
          <div className="flex h-[140px] w-[700px] items-center justify-center rounded-2xl bg-N1 shadow-lg">
            <p className="me-auto ml-10 w-9/12 text-lg font-semibold">
              How can first-time users access a manual guide when initially using the application?
            </p>
            <div className="mr-8 ms-auto">
              <IconButton size={"sm"} icon={<KeyboardArrowDownIcon />} />
            </div>
          </div>
          <div className="flex h-[140px] w-[700px] items-center justify-center rounded-2xl bg-N1 shadow-lg">
            <p className="me-auto ml-10 w-9/12 text-lg font-semibold">
              How does the application allow for the management of member accounts?
            </p>
            <div className="mr-8 ms-auto">
              <IconButton size={"sm"} icon={<KeyboardArrowDownIcon />} />
            </div>
          </div>
        </div>
      </section>
      {/*  Gets App */}
      <section className="w-full bg-P1">
        <div className="mx-auto flex w-[1711px] items-center justify-center pt-40">
          <div className="w-5/12">
            <p className="text-[60px] font-semibold text-P6">
              QBills is available for iOS and Android
            </p>
            <p>
              The Qbills application can be downloaded for iOS and Android devices via the App Store
              and Google Play Store. Download QBills now and experience the difference. Join
              thousands who've embraced a smarter, more efficient way to empower businesses of all
              sizes with an intuitive, robust, and flexible point-of-sale solution.
            </p>
            <Image src={downloadImage} width={250} className="mt-5" />
          </div>
          <div className="ms-auto">
            <Image src={getApps} width={600} />
          </div>
        </div>
      </section>
    </main>
  );
};
