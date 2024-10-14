"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

import { useToast } from "@/hooks/use-toast";

function Page() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Watch new password for matching with confirm password
  const newPassword = watch("newPassword");

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.patch("/api/user/update-password", {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      });

      // Handle success response

      toast({
        title: response.data.status,
        description: response.data.message,
      });
    } catch (error: any) {
      // Handle error response
      toast({
        title: error.response.data.status,
        description: error.response.data.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="p-12">
      <h2 className="text-5xl tracking-wide">Update Password</h2>

      <form
        className="mt-12 flex flex-col gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Label htmlFor="oldPassword">Old password</Label>
          <Input
            id="oldPassword"
            placeholder="old password"
            type="password"
            className="w-96 bg-zinc-100 p-6"
            {...register("oldPassword", {
              required: "Old password is required",
            })}
          />
          {errors.oldPassword && (
            <p className="text-sm text-destructive">
              {errors.oldPassword.message as string}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="newPassword">New Password</Label>
          <Input
            id="newPassword"
            placeholder="New Password"
            type="password"
            className="w-96 bg-zinc-100 p-6"
            {...register("newPassword", {
              required: "New password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.newPassword && (
            <p className="text-sm text-destructive">
              {errors.newPassword.message as string}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
          <Input
            id="confirmNewPassword"
            placeholder="Confirm New Password"
            type="password"
            className="w-96 bg-zinc-100 p-6"
            {...register("confirmNewPassword", {
              required: "Please confirm your new password",
              validate: (value) =>
                value === newPassword || "Passwords do not match",
            })}
          />
          {errors.confirmNewPassword && (
            <p className="text-sm text-destructive">
              {errors.confirmNewPassword.message as string}
            </p>
          )}
        </div>
        <Button className="mt-16 w-72 rounded-full bg-[#567F9D] p-6 text-[#eeeeee]">
          Update Password
        </Button>
      </form>

      {/*
      *********** 
      ON PURPOSE 
      *********** 
      */}
    </div>
  );
}

export default Page;
