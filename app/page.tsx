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
    <div>
      <h1>AWS Icons</h1>
      <Input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        let search = event.target.value;
        setSearchedIcon(search);
        console.log(search);
      }}/>
      <Button onClick={() => (getIcons())}>Search</Button>
      <AWSIconsCardList icons={icons.filter((i) => (i.toLowerCase().includes(searchedIcon)))}/>
    </div>
  );
}
