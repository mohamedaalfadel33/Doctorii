import OurDeals from "@/components/sections/HomePage/OurDeals";
import TopSpecialties from "@/components/sections/HomePage/TopSpecialties";
import MainSection from "@/components/sections/HomePage/MainSection";
import OurDoctors from "@/components/sections/HomePage/OurDoctors";
import AreYouADoctor from "@/components/sections/HomePage/AreYouADoctor";

export default function Home() {
  return (
    <main>
      <MainSection />

      <OurDoctors />

      <OurDeals />

      <TopSpecialties />

      <AreYouADoctor />
    </main>
  );
}
