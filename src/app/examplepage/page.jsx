"use client";

import { SubmitButton } from "@/components";
import {
  ComponentProductDetail,
  ComponentCardMembership,
  ComponentCheckbox,
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
} from "@/modules/example-page/components";
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
        <ComponentCheckbox />
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
        <ComponentCardMembership />
        <ComponentProductDetail />
      </section>
    </main>
  );
};

export default ExamplePage;
