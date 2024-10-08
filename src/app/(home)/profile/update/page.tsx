"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);

    const req = await fetch(
      "http://localhost:8085/api/v1/patients/update/66f96ed655dc318969f98b7d",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          city: data.city,
        }),
      },
    );
  };

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
            {...register("city")}
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
