/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { set, SubmitHandler, useForm } from "react-hook-form";
import { ScaleLoader } from "react-spinners";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  image: any;
};

const Page = () => {
  const GenderOptions = ["Male", "Female"];
  const [gender, setGender] = useState("Male");
  const { register, handleSubmit } = useForm<FormData>();
  const [file, setFile] = useState<File | null>(null);
  const [imageData, setImageData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // State for loading

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleImageSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Upload failed");
      }

      const data = await response.json();
      setImageData(data);
      setError(null);
      toast.success("Image uploaded successfully!");
    } catch (error: any) {
      setError(error.message);
      setImageData(null);
      toast.error(`Upload failed: ${error.message}`);
    } finally {
      setLoading(false); // Set loading to false after the upload finishes
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const res = await fetch("http://localhost:8085/api/v1/patients/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        gender: data.gender,
        photo: imageData.secure_url,
      }),
    });
    const data1 = await res.json();
  };

  return (
    <section className="flex min-h-[89.3vh] flex-col gap-8">
      {/* Main Text */}
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-extrabold">Doctorii</h1>
        <h2 className="mt-4 font-sans text-sm">Appointment Made Easier</h2>
      </div>

      {/*  Inputs */}
      <h1 className="px-12 text-2xl">SignUp</h1>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 px-12"
        >
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

              <div className="flex w-96 flex-col gap-3">
                <Label className="font-sans">Gender</Label>
                <select
                  {...register("gender")}
                  className="rounded-sm bg-zinc-200 p-2"
                  value={gender}
                  onChange={handleGenderChange}
                >
                  {GenderOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-20 rounded-full bg-[#567F9D] px-20 py-6 text-[#eeeeee]"
          >
            Create Account
          </Button>

          <p className="font-sans">
            By clicking “Create Account”, you agree to our <br />{" "}
            <span className="text-blue-500">Terms and Conditions </span>.
          </p>
        </form>

        <div className="w-96">
          <form className="flex flex-col gap-2" onSubmit={handleImageSubmit}>
            <Label className="font-sans">Upload Your Photo</Label>
            <Input type="file" onChange={handleFileChange} />
            <Button
              className="bg-[#567F9D] text-[#eeeeee]"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <ScaleLoader color="#fff" loading={loading} />
              ) : (
                "Upload"
              )}
            </Button>

            {imageData && (
              <div>
                <h2>Image Uploaded:</h2>
                <img src={imageData.secure_url} alt="Uploaded" />
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto flex items-center justify-center gap-8 bg-primary p-8">
        <h2 className="text-zinc-50">Already have an account with us?</h2>
        <Link href={"/login"}>
          <Button
            variant={"outline"}
            className="rounded-full bg-[#eeeeee] px-20 py-5"
          >
            bg-[#567F9D] text-[#eeeeee] Login
          </Button>
        </Link>
      </footer>
    </section>
  );
};

export default Page;
