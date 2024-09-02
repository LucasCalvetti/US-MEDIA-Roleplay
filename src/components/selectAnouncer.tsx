import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/internal/select";

export function SelectAnouncer({ anouncerArray }: { anouncerArray: string[] }) {
  return (
    <Select required>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecciona un anunciante" />
      </SelectTrigger>
      <SelectContent className="bg-gray-600">
        <SelectGroup>
          {anouncerArray.map((anouncer, index) => (
            <SelectItem key={index} value={anouncer} className="hover:bg-blue-400 cursor-pointer">
              {anouncer}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
