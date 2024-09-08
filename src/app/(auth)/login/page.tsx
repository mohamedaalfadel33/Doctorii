import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SectionContainer from '@/components/ui/SectionContainer';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <section className="min-h-[100vh] flex flex-col gap-8">

      {/* Main Text */}
      <div className="flex flex-col items-center ">
        <h1 className="text-7xl">Doctorii</h1>
        <h2 className="text-sm mt-4 font-sans">Appointment Made Easier</h2>
      </div>

      {/* Email & Password input */}
      <form className="flex flex-col gap-12 items-center justify-center ">
        <div className="flex flex-col gap-6">
          <div className="w-96">
            <Label className="font-sans ">Email</Label>
            <Input
              className="p-6 bg-zinc-200"
              type="email"
              placeholder="Your Email Address"
            />
          </div>
          <div className="w-96">
            <Label className="font-sans ">Password</Label>
            <Input
              className="p-6 bg-zinc-200"
              type="password"
              placeholder="Your Password"
            />
          </div>
          <Link href={'/'} className="underline text-sm font-sans">
            Forgot your password?
          </Link>
        </div>
        <Button type="submit" className="rounded-full px-20 py-5">
          Login
        </Button>
      </form>

      {/* Footer */}
      <footer className="mt-auto bg-primary flex p-8 justify-center items-center gap-8">
        <h2 className="text-zinc-50">Don’t have an account?</h2>
        <Link href={'/signup'}>
          <Button
            variant={'outline'}
            className="rounded-full px-20 py-5 bg-zinc-50"
          >
            Create Account
          </Button>
        </Link>
      </footer>
    </section>
  );
};

export default page;
