import Filters from "@/components/Filters";
import Search from "@/components/Search";
import SearchResult from "@/components/SearchResult";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <main>
      <div className="flex items-center justify-center gap-4">
        <Search />
        <Button className="rounded-full px-24 py-8 text-xl">Search</Button>
      </div>
      <div className="flex">
        <div className="mx-12 mt-16 flex gap-16">
          <Filters />
        </div>
     
          <div className="mt-16 flex justify-center">
            <SearchResult />
       
        </div>
      </div>
    </main>
  );
};

export default page;
