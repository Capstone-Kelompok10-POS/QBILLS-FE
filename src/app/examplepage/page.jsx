"use client";

import { SubmitButton } from "@/components";
import {
  ComponentButton,
  ComponentChip,
  ComponentFAB,
  ComponentIconButton,
  ComponentInput,
  ComponentNavigationDrawer,
  ComponentSelect,
  ComponentSnackBar,
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
        <div className="hidden">
          <ComponentNavigationDrawer />
        </div>
        <ComponentSelect />
        <ComponentSnackBar />
      </section>
    </main>
  );
};

export default ExamplePage;
