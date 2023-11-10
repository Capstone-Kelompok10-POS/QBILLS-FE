"use client";

import { IconButton, SnackBar, SubmitButton } from "@/components";
import { Footer, Header, Main } from "@/modules/example-page";
import logoVercel from "@/public/assets/images/logos/vercel.svg";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Image from "next/image";

const ExamplePage = () => {
  return (
    <section className="space-y-5 p-5">
      <section>
        <SubmitButton />
        <Header />
        <Main />
        <Footer />
        <Image src={logoVercel} alt="Vercel" width={100} className="h-auto" />
      </section>

      {/* [x] Untuk dev dan melihat hasilnya bisa di sini saja dan jika sudah selesai berikan contoh penggunaan component nya di sini */}

      {/* COMPONENT SNACK BAR */}
      <section className="flex flex-col items-center justify-center gap-5 py-5">
        <SnackBar
          variant={"wa"}
          size={"sm"}
          desc={"Lorem ipsum is simply dummy text of the printing"}
          action={true}
          actionLabel={"Action"}
        />
        <SnackBar
          variant={"wa"}
          size={"lg"}
          desc={"Lorem ipsum is simply dummy text of the printing"}
          action={true}
          actionLabel={"Action"}
        />
        <SnackBar
          variant={"wa"}
          size={"lg"}
          desc={
            "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing."
          }
          action={true}
          actionLabel={"Action"}
        />
        <div className="flex gap-5">
          <SnackBar
            variant={"wa"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            action={true}
            actionLabel={"Action"}
          />
          <SnackBar
            variant={"wa"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            action={false}
            actionLabel={""}
          />
        </div>
        <div className="flex gap-5">
          <SnackBar
            variant={"wa"}
            size={"sm"}
            desc={
              "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing."
            }
            action={true}
            actionLabel={"Action"}
          />
          <SnackBar
            variant={"wa"}
            size={"sm"}
            desc={
              "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing."
            }
            action={false}
            actionLabel={""}
          />
        </div>
        <div className="flex gap-5">
          <SnackBar
            variant={"in"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            action={true}
            actionLabel={"Action"}
          />
          <SnackBar
            variant={"in"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            action={false}
            actionLabel={""}
          />
        </div>
        <div className="flex gap-5">
          <SnackBar
            variant={"in"}
            size={"sm"}
            desc={
              "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing."
            }
            action={true}
            actionLabel={"Action"}
          />
          <SnackBar
            variant={"in"}
            size={"sm"}
            desc={
              "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing."
            }
            action={false}
            actionLabel={""}
          />
        </div>
        <div className="flex gap-5">
          <SnackBar
            variant={"su"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            action={true}
            actionLabel={"Action"}
          />
          <SnackBar
            variant={"su"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            action={false}
            actionLabel={""}
          />
        </div>
        <div className="flex gap-5">
          <SnackBar
            variant={"su"}
            size={"sm"}
            desc={
              "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing."
            }
            action={true}
            actionLabel={"Action"}
          />
          <SnackBar
            variant={"su"}
            size={"sm"}
            desc={
              "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing."
            }
            action={false}
            actionLabel={""}
          />
        </div>
        <div className="flex gap-5">
          <SnackBar
            variant={"er"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            action={true}
            actionLabel={"Action"}
          />
          <SnackBar
            variant={"er"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            action={false}
            actionLabel={""}
          />
        </div>
        <div className="flex gap-5">
          <SnackBar
            variant={"er"}
            size={"sm"}
            desc={
              "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing."
            }
            action={true}
            actionLabel={"Action"}
          />
          <SnackBar
            variant={"er"}
            size={"sm"}
            desc={
              "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing."
            }
            action={false}
            actionLabel={""}
          />
        </div>
      </section>

      {/* ICON BUTTON */}

      {/* 
          size={"sm" | "md"}
          icon={</>}
          onClick={() => {}}
          disabled={true | false}
      */}

      <section className="space-y-5">
        {/* SIZE SMALL */}
        <div className="flex items-center justify-center gap-5">
          {/* DEFAULT */}
          <IconButton size={"sm"} icon={<NotificationsOutlinedIcon />} onClick={() => {}} />

          {/* DISABLED */}
          <IconButton
            size={"sm"}
            icon={<NotificationsOutlinedIcon />}
            onClick={() => {}}
            disabled={true}
          />
        </div>

        {/* SIZE MEDIUM */}
        <div className="flex items-center justify-center gap-5">
          {/* DEFAULT */}
          <IconButton
            size={"md"}
            icon={<NotificationsOutlinedIcon sx={{ fontSize: 40 }} />}
            onClick={() => {}}
          />

          {/* DISABLED */}
          <IconButton
            size={"md"}
            icon={<NotificationsOutlinedIcon sx={{ fontSize: 40 }} />}
            onClick={() => {}}
            disabled={true}
          />
        </div>
      </section>
    </section>
  );
};

export default ExamplePage;
