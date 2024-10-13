"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import React from "react";

function page() {
  async function submit() {
    await axios
      .patch("/api/user/update-password", {
        oldPassword: "123123123123",
        newPassword: "123123123",
      })
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  }
  return (
    <div className="p-12">
      <h2 className="text-5xl tracking-wide">Update Password</h2>

      <form className="mt-12 flex flex-col gap-8">
        <div>
          <Label>New Password</Label>
          <Input
            placeholder="new Password"
            type="password"
            className="w-96 bg-zinc-100 p-6"
          />
        </div>
        <div>
          <Label>Confirm New Password</Label>
          <Input
            placeholder="Confirm New Password"
            type="password"
            className="w-96 bg-zinc-100 p-6"
          />
        </div>
        {/* <Button className="mt-16 w-72 rounded-full bg-blue-400 p-6">
          Update Password
        </Button> */}
      </form>
      {/*
      *********** 
      ON PURPOSE 
      *********** 
      */}
      <Button
        className="mt-16 w-72 rounded-full bg-blue-400 p-6"
        onClick={() => submit()}
      >
        TEST API CALL
      </Button>
    </div>
  );
}

export default page;
