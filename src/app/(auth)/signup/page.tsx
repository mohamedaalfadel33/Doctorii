"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  image: any;
};

const Page = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    const req = await fetch("http://localhost:8085/api/v1/patients/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        gender: data.gender,
        photo: data.image,
      }),
    });

    const res = await req.json();
    console.log(res);
  };

  return (
    <section className="flex min-h-[100vh] flex-col gap-8">
      {/* Main Text */}
      <div className="flex flex-col items-center">
        <h1 className="text-7xl">Doctorii</h1>
        <h2 className="mt-4 font-sans text-sm">Appointment Made Easier</h2>
      </div>

      {/*  Inputs */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 px-12"
      >
        <h1 className="text-2xl">SignUp</h1>

        <div className="flex gap-8">
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

            <div className="w-96">
              <Label className="font-sans">Confirm Password</Label>
              <Input
                {...register("confirmPassword")}
                className="bg-zinc-200 p-6"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="w-96">
              <Label className="font-sans">Name</Label>
              <Input
                {...register("name")}
                className="bg-zinc-200 p-6"
                type="text"
                placeholder="Name"
              />
            </div>

            <div className="w-96">
              <Label className="font-sans">Gender</Label>
              <Input
                {...register("gender")}
                className="bg-zinc-200 p-6"
                type="text"
                placeholder="Your Gender"
              />
            </div>

            <div className="w-96">
              <Label className="font-sans">Your Photo</Label>
              <Input
                {...register("image")}
                className="bg-zinc-200 p-6"
                type="file"
                placeholder="Your Photo"
              />
            </div>

            {/* <div className="w-96">
              <Label className="font-sans">City</Label>
              <Input
                className="bg-zinc-200 p-6"
                type="text"
                placeholder="Your City"
              />
            </div>

            <div className="w-96">
              <Label className="font-sans">Phone Number</Label>
              <Input
                className="bg-zinc-200 p-6"
                type="number"
                placeholder="Phone Number"
              />
            </div> */}
          </div>
        </div>

        <Button type="submit" className="w-20 rounded-full px-20 py-6">
          Create Account
        </Button>

        <p className="font-sans">
          By clicking “Create Account”, you agree to our <br />{" "}
          <span className="text-blue-500">Terms and Conditions </span>.
        </p>
      </form>

      {/* Footer */}
      <footer className="mt-auto flex items-center justify-center gap-8 bg-primary p-8">
        <h2 className="text-zinc-50">Already have an account with us?</h2>
        <Link href={"/login"}>
          <Button
            variant={"outline"}
            className="rounded-full bg-zinc-50 px-20 py-5"
          >
            Login
          </Button>
        </Link>
      </footer>
    </section>
  );
};

export default Page;
