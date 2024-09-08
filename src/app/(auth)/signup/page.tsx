import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SectionContainer from '@/components/ui/SectionContainer';
import Link from 'next/link';

const page = () => {
  return (
    <section className="min-h-[100vh] flex flex-col gap-8">
      {/* Main Text */}
      <div className="flex flex-col items-center ">
        <h1 className="text-7xl">Doctorii</h1>
        <h2 className="text-sm mt-4 font-sans">Appointment Made Easier</h2>
      </div>

      {/*  Inputs */}
      <form className="flex flex-col gap-8 px-12 ">
        <h1 className="text-2xl">SignUp</h1>

        <div className="flex gap-8">
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

            <div className="w-96">
              <Label className="font-sans ">Confirm Password</Label>
              <Input
                className="p-6 bg-zinc-200"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="w-96">
              <Label className="font-sans ">Full Name</Label>
              <Input
                className="p-6 bg-zinc-200"
                type="text"
                placeholder="Full Name"
              />
            </div>

            <div className="w-96">
              <Label className="font-sans ">City</Label>
              <Input
                className="p-6 bg-zinc-200"
                type="text"
                placeholder="Your City"
              />
            </div>

            <div className="w-96">
              <Label className="font-sans ">Phone Number</Label>
              <Input
                className="p-6 bg-zinc-200"
                type="number"
                placeholder="Phone Number"
              />
            </div>
          </div>
        </div>

        <Button type="submit" className="rounded-full px-20 py-6 w-20">
          Create Account
        </Button>

        <p className=" font-sans">
          By clicking “Create Account”, you agree to our <br />{' '}
          <span className="text-blue-500">Terms and Conditions </span>.
        </p>
      </form>

      {/* Footer */}
      <footer className="mt-auto bg-primary flex p-8 justify-center items-center gap-8">
        <h2 className="text-zinc-50">Already have an account with us?</h2>
        <Link href={'/login'}>
          <Button
            variant={'outline'}
            className="rounded-full px-20 py-5 bg-zinc-50"
          >
            Login
          </Button>
        </Link>
      </footer>
    </section>
  );
};

export default page;
