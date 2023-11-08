import React from "react";
// import logoQbills from "";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import PaymentIcon from "@mui/icons-material/Payment";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SettingIcon from "@mui/icons-material/Settings";

export const NavigationDrawer = () => {
  return (
    <div className="flex h-screen w-96 flex-col gap-6 bg-P5 p-6 text-white">
      <div>
        <ul className="flex flex-col items-start gap-4 self-stretch">
          <li className="p-4 text-xl">
            <a href="#" className="flex items-center gap-4">
              <DashboardIcon className="w-8" />
              Home
            </a>
          </li>
          <li className="p-4 text-xl">
            <a href="#" className="flex items-center gap-4">
              <AccountCircleIcon className="w-8" />
              Manage Account
            </a>
          </li>
          <li className="p-4 text-xl">
            <a href="#" className="flex items-center gap-4">
              <LibraryAddIcon className="w-8" />
              Manage Product
            </a>
          </li>
          <li className="p-4 text-xl">
            <a href="#" className="flex items-center gap-4">
              <LocalCafeIcon className="w-8" />
              List Product
            </a>
          </li>
          <li className="p-4 text-xl">
            <a href="#" className="flex items-center gap-4">
              <LocalPoliceIcon className="w-8" />
              Membership
            </a>
          </li>
          <li className="p-4 text-xl">
            <a href="#" className="flex items-center gap-4">
              <PaymentIcon className="w-8" />
              Transaction
            </a>
          </li>
          <li className="p-4 text-xl">
            <a href="#" className="flex items-center gap-4">
              <LeaderboardIcon className="w-8" />
              Report
            </a>
          </li>
          <li className="p-4 text-xl">
            <a href="#" className="flex items-center gap-4">
              <SettingIcon className="w-8" />
              Setting
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
