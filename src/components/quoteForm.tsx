import { useEffect, useState } from "react";
import { Input } from "./internal/input";
import { SelectVendor } from "./selectVendor";
import { SelectPublisher } from "./selectPublisher";
import { ComboboxClients } from "./comboboxClient";

interface CampaignData {
  Campaña: string;
  Cliente: [{ label: string; value: string }];
  Advertiser: string;
  Size: string;
  Units: number;
  C_model: string;
  Margin: string;
  Ucost: number;
  Investment: number;
  USMC_Tare: number;
}

interface QuoteFormProps {
  onSubmit: (formData: CampaignData) => void;
  data: CampaignData;
  vendorArray: string[];
}

const QuoteForm = ({ onSubmit, data, vendorArray }: QuoteFormProps) => {
  const [formData, setFormData] = useState<CampaignData>(data);

  useEffect(() => {
    console.log(data);

    setFormData(data);
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit(formData);
  };

  return (
    <div className="w-[85%] mx-auto rounded-2xl bg-gray-900 grid grid-cols-2 hover:shadow-diffuse hover:shadow-gray-800 duration-500">
      <div className="w-full flex items-center justify-center rounded-2xl bg-orange-900 bg-hero-gradient">
        <img className="w-[60%] brightness rounded-full p-8 brightness-[0.9] shadow-orange-900 shadow-2xl" src="https://usmediaconsulting.com/wp-content/uploads/2023/02/logo-20-years.png" />
      </div>
      <form className="p-4 space-y-4 w-full mx-auto flex flex-col items-center" onSubmit={handleSubmit}>
        <h2 className="text-2xl mt-4 font-bold text-center">Cotizador</h2>
        <div className="w-full space-y-4 flex flex-col gap-4 p-4">
          <div>
            <label className="block text-sm font-medium">Vendedor</label>
            <SelectVendor vendorArray={vendorArray} />
          </div>

          <div>
            <label className="block text-sm font-medium">Cliente</label>
            <ComboboxClients clientArray={formData.Cliente} />
          </div>

          <div>
            <label className="block text-sm font-medium">Nombre de la Campaña</label>
            <Input type="text" name="Campaña" value={formData.Campaña} onChange={handleChange} className="mt-1 block w-full border rounded-md" required />
          </div>

          <div>
            <label className="block text-sm font-medium">Anunciante</label>
            <Input type="text" name="Advertiser" value={formData.Advertiser} onChange={handleChange} className="mt-1 block w-full border rounded-md" required />
          </div>

          <div>
            <label className="block text-sm font-medium">Plataforma</label>
            <SelectPublisher />
          </div>

          <button type="submit" className="mx-auto w-1/2 bg-blue-500 hover:bg-blue-800 duration-300 hover:shadow-inner hover:shadow-blue-400 text-white py-2 rounded-md">
            Calcular Margen
          </button>
        </div>
      </form>
    </div>
  );
};

export { QuoteForm };
