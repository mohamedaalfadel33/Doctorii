"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, HeartHandshake, MapPin, UserRound } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

function Search() {
  const [position, setPosition] = useState("bottom");
  const [name, setName] = useState<string>();
  const router = useRouter();

  function handleSearch() {
    router.push(`/search?name=${name || ""}`);
  }

  return (
    <>
      <div className="flex flex-col gap-6 rounded-sm bg-zinc-600 p-14 lg:flex-row">
        <div>
          <p className="font-sans text-zinc-50">Choose Specialty</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="flex gap-4 p-6">
              <Button variant="outline">
                <HeartHandshake />
                <span>Specialty</span>
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="top">All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Dentist
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  Neurology
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <p className="font-sans text-zinc-50">City</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="flex gap-4 p-6">
              <Button variant="outline">
                <MapPin />
                <span>Location</span>
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="top">
                  Khartoum
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <p className="font-sans text-zinc-50">Area</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="flex gap-4 p-6">
              <Button variant="outline">
                <HeartHandshake />
                <span>Speciality</span>
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="top">All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  AL-Amarat
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <p className="font-sans text-zinc-50">
            Doctor/Hospital name (optional)
          </p>
          <div className="flex items-center rounded-sm bg-zinc-50">
            <UserRound />
            <Input
              className="w-52 p-6"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        </div>
      </div>
      <Button
        className="rounded-full bg-[#567F9D] px-24 py-8 text-xl text-[#eeeeee]"
        onClick={() => handleSearch()}
      >
        Search
      </Button>
    </>
  );
}

export default Search;
