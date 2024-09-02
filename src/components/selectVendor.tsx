import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/internal/select";

export function SelectVendor({ vendorArray }: { vendorArray: string[] }) {
  return (
    <Select required>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecciona un vendedor" />
      </SelectTrigger>
      <SelectContent className="bg-gray-600">
        <SelectGroup>
          {vendorArray.map((vendor, index) => (
            <SelectItem key={index} value={vendor} className="hover:bg-blue-400 cursor-pointer">
              {vendor}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
