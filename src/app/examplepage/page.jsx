"use client";

import { Chips, SnackBar, SubmitButton } from "@/components";
import { Footer, Header, Main } from "@/modules/example-page";
import logoVercel from "@/public/assets/images/logos/vercel.svg";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

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

      {/* COMPONENT CHIPS */}

      {/* 
          size={"sm" | "md"}
          startIcon={</>}
          label={""}
          endIcon={</>}
          onClick={() => {}}
          selected={true | false}
          disabled={true | false}
      */}

      <section className="flex items-center justify-center gap-5">
        {/* SIZE SMALL */}
        <div className="flex flex-col items-center justify-center gap-5">
          {/* WITHOUT ICON */}
          <div className="flex gap-5">
            {/* DEFAULT */}
            <Chips size={"sm"} label={"Label"} onClick={() => {}} />

            {/* SELECTED */}
            <Chips size={"sm"} label={"Label"} selected={true} />

            {/* DISABLED */}
            <Chips size={"sm"} label={"Label"} onClick={() => {}} disabled={true} />
          </div>

          {/* WITH ICON */}
          <div className="flex gap-5">
            {/* DEFAULT */}
            <Chips
              size={"sm"}
              startIcon={<CheckIcon fontSize="small" />}
              label={"Label"}
              onClick={() => {}}
            />

            {/* SELECTED */}
            <Chips
              size={"sm"}
              startIcon={<CheckIcon fontSize="small" />}
              label={"Label"}
              selected={true}
            />

            {/* DISABLED */}
            <Chips
              size={"sm"}
              startIcon={<CheckIcon fontSize="small" />}
              label={"Label"}
              onClick={() => {}}
              disabled={true}
            />
          </div>
        </div>

        {/* SIZE MEDIUM */}
        <div className="flex flex-col items-center justify-center gap-5">
          {/* WITHOUT ICON */}
          <div className="flex gap-5">
            {/* DEFAULT */}
            <Chips size={"md"} label={"Label"} onClick={() => {}} />

            {/* SELECTED */}
            <Chips size={"md"} label={"Label"} selected={true} />

            {/* DISABLED */}
            <Chips size={"md"} label={"Label"} onClick={() => {}} disabled={true} />
          </div>

          {/* ONE ICON */}
          <div className="flex gap-5">
            {/* DEFAULT */}
            <Chips
              size={"md"}
              startIcon={<CheckIcon fontSize="small" />}
              label={"Label"}
              onClick={() => {}}
            />

            {/* SELECTED */}
            <Chips
              size={"md"}
              startIcon={<CheckIcon fontSize="small" />}
              label={"Label"}
              selected={true}
            />

            {/* DISABLED */}
            <Chips
              size={"md"}
              startIcon={<CheckIcon fontSize="small" />}
              label={"Label"}
              onClick={() => {}}
              disabled={true}
            />
          </div>

          {/* TWO ICON */}
          <div className="flex gap-5">
            {/* DEFAULT */}
            <Chips
              size={"md"}
              startIcon={<CheckIcon fontSize="small" />}
              label={"Label"}
              endIcon={<CloseIcon sx={{ fontSize: 23 }} />}
              onClick={() => {}}
            />

            {/* SELECTED */}
            <Chips
              size={"md"}
              startIcon={<CheckIcon fontSize="small" />}
              label={"Label"}
              endIcon={<CloseIcon sx={{ fontSize: 23 }} />}
              selected={true}
            />

            {/* DISABLED */}
            <Chips
              size={"md"}
              startIcon={<CheckIcon fontSize="small" />}
              label={"Label"}
              endIcon={<CloseIcon sx={{ fontSize: 23 }} />}
              onClick={() => {}}
              disabled={true}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ExamplePage;
