"use client";

import { SubmitButton, Checkbox } from "@/components";
import {
  ComponentAnalytics,
  ComponentButton,
  ComponentChip,
  ComponentDate,
  ComponentFAB,
  ComponentHeaderAdmin,
  ComponentIconButton,
  ComponentInput,
  ComponentNavigationDrawer,
  ComponentPagination,
  ComponentSelect,
  ComponentSnackBar,
  ComponentTable,
} from "@/modules/components";
import { Footer, Header, Main } from "@/modules/example-page";
import logoVercel from "@/public/assets/images/logos/vercel.svg";
import Image from "next/image";

const ExamplePage = () => {
  return (
    <main>
      <section className="hidden">
        <SubmitButton />
        <Header />
        <Main />
        <Footer />
        <Image src={logoVercel} alt="Vercel" width={100} className="h-auto" />
      </section>
      <section className="space-y-5 p-5">
        <ComponentButton />
        <ComponentChip />
        <ComponentFAB />
        <ComponentIconButton />
        <ComponentInput />
        <ComponentSelect />
        <ComponentDate />
        <ComponentSnackBar />
        <div className="hidden">
          <ComponentNavigationDrawer />
        </div>
        <div className="">
          <ComponentHeaderAdmin />
        </div>
        <ComponentAnalytics />
        <ComponentTable />
        <ComponentPagination />
      </section>
      <section className="item-center flex justify-center gap-5">
        <div className="item-center flex flex-col justify-center gap-5">
          <div className="flex gap-5">
            <Checkbox onChange={() => {}} />
            <Checkbox onChange={() => {}} disabled={true} checked={true} />
            <Checkbox checked={true} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExamplePage;
