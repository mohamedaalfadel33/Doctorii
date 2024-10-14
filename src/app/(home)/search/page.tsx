import Filters from "@/components/Filters";
import Search from "@/components/SearchPage/Search";
import SearchResult from "@/components/SearchPage/SearchResult";
import { Suspense } from "react";

function Page() {
  return (
    <main>
      <div className="flex items-center justify-center gap-4">
        <Search />
      </div>
      <div className="flex">
        <div className="mx-12 mt-16 flex gap-16">
          <Filters />
        </div>

        <div className="mt-16 flex justify-center">
          <Suspense>
            <SearchResult />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

export default Page;
