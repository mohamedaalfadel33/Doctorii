"use client";

import useSession from "@/Hooks/useSession";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const { register, handleSubmit } = useForm();

  const session = useSession() as any;
  const [isLoad, setIsLoad] = useState(false);

  useEffect(
    function () {
      setIsLoad(true);
    },
    [setIsLoad]
  );

  const onSubmit = async (formData: any) => {
    console.log(formData);

    await axios
      .patch("/api/user/update-user", { ...formData, photo: "" })
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  };
  if (isLoad)
    return (
      <div className="p-12">
        <h2 className="text-5xl tracking-wide">Update Profile</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex flex-col gap-8"
        >
          <div>
            <Label>Name</Label>
            <Input
              {...register("name")}
              placeholder="Mohamed"
              type="text"
              className="w-96 bg-zinc-100 p-6"
            />
          </div>
          <div>
            <Label>City</Label>
            <Input
              {...register("location")}
              placeholder="Mohamed"
              type="text"
              className="w-96 bg-zinc-100 p-6"
            />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input
              placeholder="+249 123 456 789"
              type="number"
              className="w-96 bg-zinc-100 p-6"
            />
          </div>

          <Button className="mt-16 w-72 rounded-full bg-blue-400 p-6">
            Update Profile
          </Button>
        </form>
      </div>
    );
};

export default Page;
