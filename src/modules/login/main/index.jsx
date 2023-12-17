"use client";

import { Button, Input } from "@/components";
import logoQBillsBrown from "@/public/assets/images/logos/brown/logo-1.png";
import logoQBillsGray from "@/public/assets/images/logos/gray/logo-2.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Main = () => {
  const session = useSession();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visibility, setVisibility] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    signIn(`credentials`, {
      username,
      password,
      redirect: false,
    }).then((res) => {
      if (res?.error) {
        setInvalid(true);
        setLoading(false);
        return;
      }
    });
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      setLoading(true);
      if (session.data.user.results?.role === "Admin") {
        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      } else {
        setTimeout(() => {
          router.push("/superadmin");
        }, 1000);
      }
    }
  }, [session, router]);

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-P1 p-5">
      <section className="fixed -top-24 left-5">
        <Image
          src={logoQBillsGray}
          alt="QBills"
          width={400}
          quality={30}
          priority
          className="h-auto rotate-45 opacity-20"
        />
      </section>
      <section className="fixed -bottom-20 -right-5">
        <Image
          src={logoQBillsGray}
          alt="QBills"
          width={400}
          quality={30}
          priority
          className="h-auto -rotate-[25deg] opacity-20"
        />
      </section>
      <section className="z-10 flex h-fit w-[600px] flex-col items-center justify-center gap-10 rounded-xl bg-white px-5 py-10 shadow-center shadow-N7/20">
        <Image
          src={logoQBillsBrown}
          alt="QBills"
          width={200}
          quality={30}
          priority
          className="h-auto"
        />
        <div className="space-y-3">
          <h1 className="text-center text-4xl font-bold">Welcome Admin</h1>
          <p className="mx-auto w-[380px] text-center">
            Log in to access your personalized dashboard and take control of your online experience.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-[550px] space-y-5">
          <div className={`w-full space-y-5 ${!invalid && "mb-10"}`}>
            <Input
              type={"text"}
              size={"md"}
              label={"Username"}
              name={"username"}
              startIcon={<AccountCircleOutlinedIcon sx={{ fontSize: 35 }} />}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={invalid}
            />

            <Input
              type={visibility ? "text" : "password"}
              size={"md"}
              label={"Password"}
              name={"password"}
              startIcon={<LockPersonOutlinedIcon sx={{ fontSize: 35 }} />}
              value={password}
              endIcon={
                visibility ? (
                  <VisibilityOutlinedIcon
                    sx={{ fontSize: 25 }}
                    className={`cursor-pointer ${invalid ? "hover:text-E5" : "hover:text-P4"}`}
                  />
                ) : (
                  <VisibilityOffOutlinedIcon
                    sx={{ fontSize: 25 }}
                    className={`cursor-pointer ${invalid ? "hover:text-E5" : "hover:text-P4"}`}
                  />
                )
              }
              endIconOnClick={() => setVisibility(!visibility)}
              onChange={(e) => setPassword(e.target.value)}
              error={invalid}
            />
          </div>

          {invalid && (
            <p className="text-center font-semibold text-E4">Invalid Username And Password</p>
          )}

          <Button
            type={"submit"}
            label={loading ? "Login..." : "Login"}
            size={"xl-full"}
            disabled={loading}
          />
        </form>
      </section>
    </main>
  );
};
