import { Button } from "@/components";
import logoQbills from "@/public/assets/images/logos/white/logo-2.png";
import logoQbills2 from "@/public/assets/images/logos/white/logo-4.png";
import logoQbills3 from "@/public/assets/images/logos/white/logo-5.png";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav className="fixed left-0 top-0 z-10 flex w-full items-center justify-between px-24 py-5">
        <section className="flex items-center justify-center gap-2">
          <Image
            src={logoQbills}
            alt="Qbills"
            width={40}
            quality={30}
            priority
            className="h-auto"
          />
          <div className="flex flex-col items-center justify-center">
            <Image
              src={logoQbills2}
              alt="Qbills"
              width={110}
              quality={30}
              priority
              className="mb-1 h-auto"
            />
            <Image
              src={logoQbills3}
              alt="Qbills"
              width={130}
              quality={30}
              priority
              className="h-auto"
            />
          </div>
        </section>
        <section>
          <ul className="flex items-center gap-10 font-semibold text-P4">
            <li>
              <a href="#home" className="hover:text-P5">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutus" className="hover:text-P5">
                About Us
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-P5">
                Features
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-P5">
                FAQ
              </a>
            </li>
            <li>
              <a href="#getapp" className="hover:text-P5">
                Get App
              </a>
            </li>
            <li>
              <Link href={"/getsapp"}>
                <Button type={"button"} size={"md"} label={"Gets App"} />
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
};
