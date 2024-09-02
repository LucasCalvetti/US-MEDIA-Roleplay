import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/internal/select";

export function SelectPublisher() {
  const publisherArray = ["Vevo", "Instagram", "Facebook", "Youtube", "Tiktok"];
  return (
    <Select required>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecciona una plataforma" />
      </SelectTrigger>
      <SelectContent className="bg-gray-600">
        <SelectGroup>
          {publisherArray.map((publisher, index) => (
            <SelectItem key={index} value={publisher} className="hover:bg-blue-400 cursor-pointer">
              {publisher}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
