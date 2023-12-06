import Image from "next/image";
import bgEllipse from "@/public/assets/images/landing-page/ellipse-hero-section.svg";
import mockHeroSection from "@/public/assets/images/landing-page/mockup-hero-section.png";
import logoQbills from "@/public/assets/images/logos/brown/logo-2.png";
import { Button } from "@/components";

export const Main = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-screen w-screen overflow-hidden bg-gradient-to-r from-P3 to-P4">
        <Image
          src={logoQbills}
          alt="QBills"
          width={500}
          quality={30}
          priority
          className="absolute -top-10 left-5 h-auto -rotate-12 opacity-20"
        />
        <Image src={bgEllipse} alt="Ellipse" quality={10} priority className="absolute right-0" />

        <div className="relative z-10 grid h-full w-full grid-cols-2">
          <div className="flex items-center justify-center gap-5 text-N1">
            <div className="w-[540px] space-y-5">
              <h1 className="text-5xl font-semibold">
                Boost Your Sales with
                <br />
                Our Point of Sales App
              </h1>
              <p className="text-justify">
                Manage your transaction, track product, and analyze report sales. Build It On
                Desktop, Launch It On Mobile. You can gets it on Google Play and App Store.
              </p>
              <div className="flex items-center gap-5">
                <Button type={"button"} size={"md"} label={"Gets App"} />
                <Button type={"button"} variant={"outline"} size={"md"} label={"Gets App"} />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={mockHeroSection}
              alt="Mockup"
              width={700}
              quality={50}
              priority
              className="-mb-5 -mr-24"
            />
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section></section>
    </main>
  );
};
