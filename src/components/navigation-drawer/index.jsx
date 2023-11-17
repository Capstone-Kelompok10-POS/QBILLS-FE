import logoQbills from "@/public/assets/images/logos/brown/logo-2.png";
import logoQbills2 from "@/public/assets/images/logos/brown/logo-4.png";
import logoQbills3 from "@/public/assets/images/logos/brown/logo-5.png";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import LocalPoliceOutlinedIcon from "@mui/icons-material/LocalPoliceOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

export const NavigationDrawer = () => {
  return (
    <nav className="bg-N1.1 fixed left-0 top-0 flex h-screen w-96 flex-col gap-14 px-6 py-14 text-N3">
      <section className="flex w-full items-center justify-center gap-2">
        <Image src={logoQbills} alt="Qbills" width={60} quality={30} priority className="h-auto" />
        <div className="flex flex-col items-center justify-center">
          <Image
            src={logoQbills2}
            alt="Qbills"
            width={130}
            quality={30}
            priority
            className="mb-1 h-auto"
          />
          <Image
            src={logoQbills3}
            alt="Qbills"
            width={150}
            quality={30}
            priority
            className="h-auto"
          />
        </div>
      </section>

      <section>
        <ul className="flex w-full flex-col gap-4 text-xl font-semibold">
          <li className="w-full cursor-pointer rounded-lg p-4 hover:bg-P2 hover:text-P6 active:scale-95">
            <Link href={"/dashboard"} className="flex items-center gap-4">
              <DashboardOutlinedIcon />
              Dashboard
            </Link>
          </li>
          <li className="w-full cursor-pointer rounded-lg p-4 hover:bg-P2 hover:text-P6 active:scale-95">
            <Link href={"/manageaccount"} className="flex items-center gap-4">
              <AccountCircleOutlinedIcon />
              Manage Account
            </Link>
          </li>
          <li className="w-full cursor-pointer rounded-lg p-4 hover:bg-P2 hover:text-P6 active:scale-95">
            <Link href={"/manageproduct"} className="flex items-center gap-4">
              <AddBoxOutlinedIcon />
              Manage Product
            </Link>
          </li>
          <li className="w-full cursor-pointer rounded-lg p-4 hover:bg-P2 hover:text-P6 active:scale-95">
            <Link href={"/listproduct"} className="flex items-center gap-4">
              <LocalCafeOutlinedIcon />
              List Product
            </Link>
          </li>
          <li className="w-full cursor-pointer rounded-lg p-4 hover:bg-P2 hover:text-P6 active:scale-95">
            <Link href={"/membership"} className="flex items-center gap-4">
              <LocalPoliceOutlinedIcon />
              Membership
            </Link>
          </li>
          <li className="w-full cursor-pointer rounded-lg p-4 hover:bg-P2 hover:text-P6 active:scale-95">
            <Link href={"/transaction"} className="flex items-center gap-4">
              <PaymentOutlinedIcon />
              Transaction
            </Link>
          </li>
          <li className="w-full cursor-pointer rounded-lg p-4 hover:bg-P2 hover:text-P6 active:scale-95">
            <Link href={"/report"} className="flex items-center gap-4">
              <LeaderboardOutlinedIcon />
              Report
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-auto w-full">
        <button
          type="button"
          onClick={() => signOut()}
          className="flex w-full cursor-pointer items-center gap-4 rounded-lg p-4 text-xl font-semibold hover:bg-P2 hover:text-P6 active:scale-95"
        >
          <LogoutOutlinedIcon />
          Logout
        </button>
      </section>
    </nav>
  );
};
