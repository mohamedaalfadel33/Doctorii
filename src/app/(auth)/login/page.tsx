"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>();
  const { toast } = useToast();

  let error = "";

  const onSubmit = async (formData: FormData) => {
    await axios
      .post("/api/auth/login", formData)
      .then((response: any) => {
        if (response.data.status === "success" && typeof window !== "undefined")
          window.localStorage.setItem(
            "session",
            JSON.stringify(response.data.data)
          );

        toast({
          title: response.data.status,
          description: response.data.message,
        });
        if (response.data.status === "fail") {
          toast({
            title: response.data.status,
            description: response.data.message,
            variant: "destructive",
          });
          error = response.message;
        }
        if (response.data.status === "success") router.push("/");
        else
          toast({
            title: response.data.status,
            description: response.data.message,
            variant: "destructive",
          });
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  };

  return (
    <section className="flex min-h-[89.3vh] flex-col gap-8">
      {/* Main Text */}
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-extrabold">Doctorii</h1>
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
        {error.length !== 0 && <p className="text-destructive">{error}</p>}
        <Button
          type="submit"
          className="rounded-full bg-[#567F9D] px-20 py-5 text-[#eeeeee]"
        >
          Login
        </Button>
      </form>

      {/* Footer */}
      <footer className="mt-auto flex items-center justify-center gap-8 bg-primary p-8">
        <h2 className="text-zinc-50">Don&apos;t have an account?</h2>
        <Link href={"/signup"}>
          <Button
            variant={"outline"}
            className="rounded-full bg-[#eeeeee] px-20 py-5"
          >
            Create Account
          </Button>
        </Link>
      </footer>
    </section>
  );
}

export default LoginPage;
