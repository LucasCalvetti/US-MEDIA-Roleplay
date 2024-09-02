"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/internal/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/internal/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/internal/popover";

export function ComboboxClients({ clientArray }: { clientArray: [{ label: string; value: string }] }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
          {value ? clientArray.find((client) => client.value === value)?.label : "Seleccione el cliente..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] bg-gray-600 p-0">
        <Command>
          <CommandInput className="text-gray-900" placeholder="Search client..." />
          <CommandList className="w-full">
            <CommandEmpty>No Client found.</CommandEmpty>
            <CommandGroup className="w-full">
              {clientArray.map((client) => (
                <CommandItem
                  className="hover:bg-blue-400 cursor-pointer"
                  key={client.value}
                  value={client.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === client.value ? "opacity-200" : "opacity-0")} />
                  {client.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
