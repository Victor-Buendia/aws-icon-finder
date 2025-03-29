"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import AWSIconsCardList from "@/components/AWSIconsCardList";
import { Input } from "@/components/ui/input";
import iconPaths from "../public/icon-paths.json";

export default function Home() { 
  const [searchedIcon, setSearchedIcon] = useState<string>("");

  return (
    <div className="py-6 px-8 flex flex-col items-center gap-y-4">
      <h1 className="font-bold text-5xl">AWS Icons</h1>
      <div className="flex gap-2 w-full">
        <Input 
          placeholder="Search icons..."
          onChange={(e) => setSearchedIcon(e.target.value.toLowerCase())} 
          value={searchedIcon}
        />
        <Button onClick={() => setSearchedIcon("")}>Clear</Button>
      </div>
      <AWSIconsCardList 
        className="w-full" 
        icons={iconPaths.filter((i: string) => i.toLowerCase().includes(searchedIcon))} 
      />
    </div>
  );
}
