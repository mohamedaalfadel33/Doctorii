import { CircleDollarSign, ListFilter } from "lucide-react";
import React from "react";

const Filters = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <ListFilter size={50} />
        <h2 className="text-4xl">Filters</h2>
      </div>
      <div className="bg-[#DADADB] py-6">
        <div className="">
          <div className="mx-6 flex gap-2">
            <CircleDollarSign />
            <h2>Fees</h2>
          </div>

          <form className="mx-12 flex flex-col font-sans">
            <div>
              <input type="checkbox" id="any" name="any" value="any" />
              <label htmlFor="any"> any</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="50_to_100"
                name="50_to_100"
                value="50_to_100"
              />
              <label htmlFor="50_to_100"> From 50 to 100</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="50_to_100"
                name="50_to_100"
                value="50_to_100"
              />
              <label htmlFor="50_to_100"> From 50 to 100</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="50_to_100"
                name="50_to_100"
                value="50_to_100"
              />
              <label htmlFor="50_to_100"> From 50 to 100</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="50_to_100"
                name="50_to_100"
                value="50_to_100"
              />
              <label htmlFor="50_to_100"> From 50 to 100</label>
            </div>
          </form>
        </div>

        <div className="mt-8">
          <div className="mx-6 flex gap-2">
            <CircleDollarSign />
            <h2>Gender</h2>
          </div>

          <form className="mx-12 flex flex-col font-sans">
            <div>
              <input type="checkbox" id="any" name="any" value="any" />
              <label htmlFor="any"> any</label>
            </div>

            <div>
              <input type="checkbox" id="male" name="male" value="male" />
              <label htmlFor="male"> male</label>
            </div>

            <div>
              <input type="checkbox" id="female" name="female" value="female" />
              <label htmlFor="female"> female</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filters;
