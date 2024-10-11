'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
};

function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (formData: FormData) => {
    await axios
      .post('/api/auth/login', formData)
      .then((response : any) => {
        console.log('Response Data:', response.data);

        if (response.data.status === 'success' && typeof window !== 'undefined')
          window.localStorage.setItem(
            'session',
            JSON.stringify(response.data.data)
          );

        router.push('/');
      })
      .catch((error) => {
        console.error('Error:', error.response.data);
      });
  };

  return (
    <section className="flex min-h-[100vh] flex-col gap-8">
      {/* Main Text */}
      <div className="flex flex-col items-center">
        <h1 className="text-7xl">Doctorii</h1>
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
              {...register('email')}
              className="bg-zinc-200 p-6"
              type="email"
              placeholder="Your Email Address"
            />
          </div>
          <div className="w-96">
            <Label className="font-sans">Password</Label>
            <Input
              {...register('password')}
              className="bg-zinc-200 p-6"
              type="password"
              placeholder="Your Password"
            />
          </div>
          <Link href={'/'} className="font-sans text-sm underline">
            Forgot your password?
          </Link>
        </div>
        <Button type="submit" className="rounded-full px-20 py-5">
          Login
        </Button>
      </form>

      {/* Footer */}
      <footer className="mt-auto flex items-center justify-center gap-8 bg-primary p-8">
        <h2 className="text-zinc-50">Don&apos;t have an account?</h2>
        <Link href={'/signup'}>
          <Button
            variant={'outline'}
            className="rounded-full bg-zinc-50 px-20 py-5"
          >
            Create Account
          </Button>
        </Link>
      </footer>
    </section>
  );
}

export default LoginPage;
