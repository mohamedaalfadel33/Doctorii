import Search from '@/components/Search';
import { Button } from '@/components/ui/button';
import OurDeals from '@/components/OurDeals';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center ">
        <h1 className="text-7xl">Doctorii</h1>
        <h2 className="text-sm mt-4 font-sans">Appointment Made Easier</h2>
      </div>
      <div className="flex flex-col items-center gap-8 mt-16">
        <h1 className="text-3xl">Book a Doctor</h1>
        <Search />

        <Button className="rounded-full px-24 py-8 bg-blue-400 text-xl">
          Search
        </Button>

        <p className="font-sans text-center mt-12">
          <span className="text-blue-400">Doctorii</span>
           is your one-stop online platform for convenient and affordable
          healthcare. We connect <br /> you with qualified doctors from the
          comfort of your home. Whether you need a routine <br />{' '}
          checkup, specialist consultation, or urgent medical advice.
        </p>
      </div>
      {/* OUR DOCTORS */}
      <div className="bg-zinc-800 p-6 flex justify-center gap-8 mt-24">
        <Button className="bg-zinc-50 px-10 text-zinc-800 rounded-full">
          Our Doctors
        </Button>
        <Button className="bg-zinc-50 px-10 text-zinc-800 rounded-full">
          Our Deals
        </Button>
      </div>

      {/* OUR Deals */}
      <OurDeals />
    </main>
  );
}
