"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Main = () => {
  const session = useSession();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    signIn(`credentials`, {
      username,
      password,
      redirect: false,
    })
      .then((res) => {
        if (res?.error) {
          setInvalid(true);
          setLoading(false);
          return;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      setLoading(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    }
  }, [session]);

  return (
    <main>
      <form onSubmit={handleSubmit} className="space-y-5">
        <section>
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </section>

        <section>
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>

        {invalid && <p>Invalid Username And Password</p>}

        <button type="submit" className="border border-black px-3 py-1">
          {loading ? "LOGIN..." : "LOGIN"}
        </button>
      </form>
    </main>
  );
};
