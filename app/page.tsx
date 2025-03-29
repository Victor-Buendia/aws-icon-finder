"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import IconsResponse from "@/interfaces/IconsResponse";
import AWSIconsCardList from "@/components/AWSIconsCardList";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [icons, setIcons] = useState<string[]>([]);
  const [searchedIcon, setSearchedIcon] = useState<string>("");

  async function getIcons() {
    const jsonResponse = await fetch("/api/aws-icons", { method: "GET" })
      .then((res) => res.json()) as IconsResponse;
    console.log(jsonResponse);
    const iconsFilePaths = jsonResponse.response.blobs;
    setIcons(iconsFilePaths);
  }

  useEffect(() => {
    getIcons();
  }, []);

  return (
    <div className="py-6 px-8 flex flex-col items-center gap-y-4">
      <h1 className="font-bold text-5xl" >AWS Icons</h1>
      <div className="flex gap-2 w-full">
        <Input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let search = event.target.value;
          setSearchedIcon(search);
          console.log(search);
        }} />
        <Button onClick={() => (getIcons())}>Search</Button>
      </div>
      <AWSIconsCardList className="w-full" icons={icons.filter((i) => (i.toLowerCase().includes(searchedIcon)))} />
    </div>
  );
}
