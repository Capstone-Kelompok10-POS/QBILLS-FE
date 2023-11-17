"use client";

import { SubmitButton } from "@/components";
import {
  ComponentTable,
  ComponentAnalytics,
  ComponentButton,
  ComponentChip,
  ComponentFAB,
  ComponentIconButton,
  ComponentInput,
  ComponentNavigationDrawer,
  ComponentSelect,
  ComponentSnackBar,
  ComponentFAB,
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
        <ComponentAnalytics />
        <ComponentButton />
        <ComponentChip />
        <ComponentFAB />
        <ComponentIconButton />
        <ComponentInput />
        <div className="hidden">
          <ComponentNavigationDrawer />
        </div>
        <ComponentSelect />
        <ComponentSnackBar />
        <ComponentTable />
      </section>
    </main>
  );
};

export default ExamplePage;
