"use client";

import AdminPhoto from "@/public/assets/images/photo-profile/admin.jpg";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconButton } from "../icon-button";

const titleMap = {
  "/superadmin": "Manage Account",
  "/dashboard": "Dashboard",
  "/manageaccount": "Manage Account",
  "/manageproduct": "Manage Product",
  "/membership": "Membership",
  "/transaction": "Transaction",
  "/report": "Report",
};

export const HeaderAdmin = ({ name, role }) => {
  const pathname = usePathname();
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(titleMap[pathname] || "Example Page");
  }, [pathname]);

  return (
    <header className="w-full">
      <div className="flex items-center justify-between border-b px-5 pb-10 pt-20">
        <section>
          <h1 className="text-3xl font-bold">{title}</h1>
        </section>

        <section className="flex w-96 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={AdminPhoto}
                alt="Admin"
                width={45.81}
                quality={30}
                priority
                className="h-auto"
              />
            </div>

            <div className="space-y-1">
              <p className="font-semibold">{name}</p>
              <p className="text-xs">{role}</p>
            </div>
          </div>

          <IconButton size={"lg"} icon={<NotificationsOutlinedIcon fontSize="medium" />} />
        </section>
      </div>
    </header>
  );
};
