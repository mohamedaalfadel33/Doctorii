'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  ChevronDown,
  HeartHandshake,
  LocateIcon,
  MapPin,
  UserRound,
} from 'lucide-react';
import { useState } from 'react';
import { Input } from './ui/input';

const Search = () => {
  const [position, setPosition] = useState('bottom');

  return (
    <div className="flex justify-center items-center">
      <div className="bg-zinc-600 p-14 rounded-sm flex gap-6">
        <div>
          <p className="font-sans text-zinc-50">Choose Specialty</p>
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
                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Bottom
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  Right
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
                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Bottom
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  Right
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
                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Bottom
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  Right
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <p className="font-sans text-zinc-50">
            Doctor/Hospital name (optional)
          </p>
          <div className="flex items-center bg-zinc-50 rounded-sm">
            <UserRound />
            <Input className="p-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
