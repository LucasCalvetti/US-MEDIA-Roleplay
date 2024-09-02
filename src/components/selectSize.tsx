import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/internal/select";

export function SelectSize({ sizeArray }: { sizeArray: string[] }) {
  return (
    <Select required>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecciona tamaño del anuncio" />
      </SelectTrigger>
      <SelectContent className="bg-gray-600">
        <SelectGroup>
          {sizeArray.map((size, index) => (
            <SelectItem key={index} value={size} className="hover:bg-blue-400 cursor-pointer">
              {size}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
