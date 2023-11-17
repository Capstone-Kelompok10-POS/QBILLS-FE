import { IconButton } from "@/components";
import AdminPhoto from "@/public/assets/images/photo-profile/admin.jpg";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Image from "next/image";

export const HeaderAdmin = ({ title, name, role }) => {
  return (
    <header>
      <div className="flex w-full items-center justify-between border-b px-8 pb-10 pt-20">
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

          <IconButton
            size={"lg"}
            icon={<NotificationsOutlinedIcon fontSize="medium" />}
            onClick={() => {}}
          />
        </section>
      </div>
    </header>
  );
};
