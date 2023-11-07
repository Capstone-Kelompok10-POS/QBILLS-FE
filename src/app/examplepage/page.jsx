import { SubmitButton } from "@/components/example-buttons";
import { Footer, Header, Main } from "@/modules/example-page";
import logoVercel from "@/public/assets/images/logos/vercel.svg";
import Image from "next/image";

const ExamplePage = () => {
  return (
    <>
      <SubmitButton />
      <Header />
      <Main />
      <Footer />
      <Image src={logoVercel} alt="Vercel" width={100} className="h-auto" />
    </>
  );
};

export default ExamplePage;
