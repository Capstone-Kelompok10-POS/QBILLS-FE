"use client";

import logoQbills from "@/public/assets/images/logos/brown/logo-2.png";
import logoQbills2 from "@/public/assets/images/logos/brown/logo-4.png";
import logoQbills3 from "@/public/assets/images/logos/brown/logo-5.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import LocalPoliceOutlinedIcon from "@mui/icons-material/LocalPoliceOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PaymentIcon from "@mui/icons-material/Payment";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import clsx from "clsx";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavigationDrawer = () => {
  const pathname = usePathname();

  let navLinks;

  if (pathname === "/superadmin") {
    navLinks = [
      {
        path: "/superadmin",
        name: "Manage Account",
        Icon: AccountCircleIcon,
        OutlinedIcon: AccountCircleOutlinedIcon,
      },
    ];
  } else {
    navLinks = [
      {
        path: "/dashboard",
        name: "Dashboard",
        Icon: DashboardIcon,
        OutlinedIcon: DashboardOutlinedIcon,
      },
      {
        path: "/manageaccount",
        name: "Manage Account",
        Icon: AccountCircleIcon,
        OutlinedIcon: AccountCircleOutlinedIcon,
      },
      {
        path: "/manageproduct",
        name: "Manage Product",
        Icon: AddBoxIcon,
        OutlinedIcon: AddBoxOutlinedIcon,
      },
      {
        path: "/membership",
        name: "Membership",
        Icon: LocalPoliceIcon,
        OutlinedIcon: LocalPoliceOutlinedIcon,
      },
      {
        path: "/transaction",
        name: "Transaction",
        Icon: PaymentIcon,
        OutlinedIcon: PaymentOutlinedIcon,
      },
      {
        path: "/report",
        name: "Report",
        Icon: LeaderboardIcon,
        OutlinedIcon: LeaderboardOutlinedIcon,
      },
    ];
  }

  return (
    <nav className="fixed left-0 top-0 flex h-screen w-96 flex-col gap-14 border-r bg-N1.1 px-6 py-14 text-N3">
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
          {navLinks.map(({ path, name, Icon, OutlinedIcon }) => (
            <li
              key={path}
              className={clsx("w-full cursor-pointer rounded-lg p-4", {
                "hover:bg-P2 hover:text-P6 active:scale-95": pathname !== path,
                "bg-P2 text-P6": pathname === path,
              })}
            >
              <Link href={path} className="flex items-center gap-4">
                {pathname === path ? <Icon /> : <OutlinedIcon />}
                {name}
              </Link>
            </li>
          ))}
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
