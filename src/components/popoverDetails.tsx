import { Button } from "@/components/internal/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/internal/popover";

export function PopoverDetails({ campaign }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="link" className="h-6 p-2 ml-2">
          Detalle
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-gray-800 text-gray-300">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none text-xl text-center">{campaign.Campaña}</h4>
          </div>
          <div className="grid gap-2">
            {Object.entries(campaign).map(([key, value]) => {
              if (key === "Units" || key === "C_model" || key === "Ucost" || key === "Investment" || key === "USMC_Tare" || key === "Margin" || key === "Cost") {
                return (
                  <div key={key} className="flex justify-between">
                    <span className="font-medium">{key}:</span>
                    <span>{String(value)}</span>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
