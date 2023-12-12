import Image from "next/image";
import LogoQbills from "@/public/assets/images/landing-page/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
export const Footer = () => {
  return (
    <footer className="bg-P4 text-N1">
      <section className="flex items-start justify-center py-24">
        <div className="me-auto mx-32 flex w-[440px] flex-col items-start justify-start gap-y-5 py-5">
          <Image src={LogoQbills} width={200} />
          <p className="">
            Qbills is a point of sale application that is a solution for your business, features are
            available to make your work easier, use it now
          </p>
        </div>
        <div className="mx-32 flex items-start justify-center gap-x-14">
          <div className="w-[255px]">
            <hr className="h-2 rounded-sm border-P3 bg-P3" />
            <p className="py-5 text-3xl font-semibold">Archiact</p>
            <ul className="font-light">
              <li className="py-2">
                <a href="">Home</a>
              </li>
              <li className="py-2">
                <a href="">About Us</a>
              </li>
              <li className="py-2">
                <a href="">Features</a>
              </li>
              <li className="py-2">
                <a href="">Get App</a>
              </li>
              <li className="py-2">
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="w-[255px]">
            <hr className="h-2 rounded-sm border-P3 bg-P3" />
            <p className="py-5 text-3xl font-semibold">Features</p>
            <ul className="font-light">
              <li className="py-2">
                <a href="">Manage Product</a>
              </li>
              <li className="py-2">
                <a href="">Manage Account Cashier</a>
              </li>
              <li className="py-2">
                <a href="">Track Transaction History</a>{" "}
              </li>
              <li className="py-2">
                <a href="">Manage Membership</a>
              </li>
              <li className="py-2">
                <a href="">Analyze Sales Report</a>
              </li>
            </ul>
          </div>
          <div className="w-[255px]">
            <hr className="h-2 rounded-sm border-P3 bg-P3" />
            <p className="py-5 text-3xl font-semibold">Social Media</p>
            <ul className="font-light">
              <li className="flex items-center justify-start gap-x-5 py-2">
                <FacebookIcon />
                Facebook
              </li>
              <li className="flex items-center justify-start gap-x-5 py-2">
                <InstagramIcon />
                Instagram
              </li>
              <li className="flex items-center justify-start gap-x-5 py-2">
                <YouTubeIcon />
                Youtube
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className=" bg-P5 text-P2">
        <div className="flex h-28 items-center justify-between">
          <div className="mx-32 flex gap-x-5">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Manage Cookies</p>
          </div>
          <p className="mx-32">Copyright 2023</p>
        </div>
      </section>
    </footer>
  );
};
