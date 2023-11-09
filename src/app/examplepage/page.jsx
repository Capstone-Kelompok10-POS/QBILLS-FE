"use client";

import { SnackBar, SubmitButton } from "@/components";
import { Footer, Header, Main } from "@/modules/example-page";
import logoVercel from "@/public/assets/images/logos/vercel.svg";
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

      {/* 
          variant={"success" | "information" | "warning" | "error"}
          size={"sm" | "lg"}
          desc={""}
          onClickClose={() => {}}
          action={true | false}
          actionLabel={""}
          onClickAction={() => {}}
      */}

      <section className="flex flex-col items-center justify-center gap-5">
        {/* SIZE SMALL */}
        <SnackBar
          variant={"success"}
          size={"sm"}
          desc={"Lorem ipsum is simply dummy text of the printing"}
          onClickClose={() => {}}
          action={true}
          actionLabel={"Action"}
          onClickAction={() => {}}
        />

        {/* SIZE LARGE */}
        <SnackBar
          variant={"success"}
          size={"lg"}
          desc={
            "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing."
          }
          onClickClose={() => {}}
          action={true}
          actionLabel={"Action"}
          onClickAction={() => {}}
        />

        {/* VARIANT SUCCESS */}
        <div className="flex gap-5">
          {/* WITH ACTION */}
          <SnackBar
            variant={"success"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
            action={true}
            actionLabel={"Action"}
            onClickAction={() => {}}
          />

          {/* WITHOUT ACTION */}
          <SnackBar
            variant={"success"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
          />
        </div>

        {/* VARIANT INFORMATION */}
        <div className="flex gap-5">
          {/* WITH ACTION */}
          <SnackBar
            variant={"information"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
            action={true}
            actionLabel={"Action"}
            onClickAction={() => {}}
          />

          {/* WITHOUT ACTION */}
          <SnackBar
            variant={"information"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
          />
        </div>

        {/* VARIANT WARNING */}
        <div className="flex gap-5">
          {/* WITH ACTION */}
          <SnackBar
            variant={"warning"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
            action={true}
            actionLabel={"Action"}
            onClickAction={() => {}}
          />

          {/* WITHOUT ACTION */}
          <SnackBar
            variant={"warning"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
          />
        </div>

        {/* VARIANT ERROR */}
        <div className="flex gap-5">
          {/* WITH ACTION */}
          <SnackBar
            variant={"error"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
            action={true}
            actionLabel={"Action"}
            onClickAction={() => {}}
          />

          {/* WITHOUT ACTION */}
          <SnackBar
            variant={"error"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
          />
        </div>
      </section>
    </section>
  );
};

export default ExamplePage;
