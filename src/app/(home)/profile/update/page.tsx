"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast, useToast } from "@/hooks/use-toast";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Page() {
  const { register, handleSubmit } = useForm();
  const { toast } = useToast();

  const onSubmit = async (formData: any) => {
    await axios
      .patch("/api/user/update-user", { ...formData, photo: "" })
      .then((response: any) => {
        toast({
          title: response.data.status,
          description: response.data.message,
        });
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
        toast({
          title: error.response.data.status,
          description: error.response.data.message,
          variant: "destructive",
        });
      });
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
}

export default Page;
