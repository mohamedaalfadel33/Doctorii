"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

const Page = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const response = fetch("http://localhost:8085/api/v1/patients/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // router.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="flex min-h-[100vh] flex-col gap-8">
      {/* Main Text */}
      <div className="flex flex-col items-center">
        <h1 className="text-7xl">Doctorii</h1>
        <h2 className="mt-4 font-sans text-sm">Appointment Made Easier</h2>
      </div>

      {/* Email & Password input */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-12"
      >
        <div className="flex flex-col gap-6">
          <div className="w-96">
            <Label className="font-sans">Email</Label>
            <Input
              {...register("email")}
              className="bg-zinc-200 p-6"
              type="email"
              placeholder="Your Email Address"
            />
          </div>
          <div className="w-96">
            <Label className="font-sans">Password</Label>
            <Input
              {...register("password")}
              className="bg-zinc-200 p-6"
              type="password"
              placeholder="Your Password"
            />
          </div>
          <Link href={"/"} className="font-sans text-sm underline">
            Forgot your password?
          </Link>
        </div>
        <Button type="submit" className="rounded-full px-20 py-5">
          Login
        </Button>
      </form>

      {/* Footer */}
      <footer className="mt-auto flex items-center justify-center gap-8 bg-primary p-8">
        <h2 className="text-zinc-50">Don&apos;t have an account?</h2>
        <Link href={"/signup"}>
          <Button
            variant={"outline"}
            className="rounded-full bg-zinc-50 px-20 py-5"
          >
            Create Account
          </Button>
        </Link>
      </footer>
    </section>
  );
};

export default Page;
