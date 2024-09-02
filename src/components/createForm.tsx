"use client";
import { useState } from "react";
import { Input } from "./internal/input";
import { SelectAnouncer } from "./selectAnouncer";
import { SelectSize } from "./selectSize";
import { Button } from "./internal/button";

interface CampaignData {
  Campaña: string;
  Cliente: { label: string; value: string }[];
  Advertiser: string;
  Size: string;
  Units: number;
  C_model: string;
  Ucost: string;
  Investment: number;
  USMC_Tare: number;
}

interface CreateCampaignFormProps {
  setData: (newData: CampaignData) => void;

  setCreateFlag: (flag: boolean) => void;
}

const CreateCampaignForm = ({ setData, setCreateFlag }: CreateCampaignFormProps) => {
  const [formData, setFormData] = useState<CampaignData>({
    Campaña: "",
    Cliente: [
      { label: "Vevo", value: "vevo" },
      { label: "Coca-cola", value: "coca-cola" },
      { label: "Pepsi", value: "pepsi" },
      { label: "Youtube", value: "youtube" },
      { label: "Lays", value: "lays" },
      { label: "Amazon", value: "amazon" },
      { label: "McDonalds", value: "mcdonalds" },
    ],
    Advertiser: "",
    Size: "15 sec non skippable",
    Units: 0,
    C_model: "CPM",
    Ucost: "",
    Investment: 0,
    USMC_Tare: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setData(formData);
    setCreateFlag(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
        <Button className="absolute top-2 left-[45%] text-gray-300 hover:text-gray-800 text-3xl" onClick={() => setCreateFlag(false)}>
          &times;
        </Button>
        <h2 className="text-2xl font-bold text-center mt-10 mb-4">Crear Nueva Campaña</h2>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Nombre de la Campaña</label>
            <Input type="text" name="Campaña" value={formData.Campaña} onChange={handleChange} className="mt-1 block w-full border rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Anunciante</label>
            <Input type="text" name="Advertiser" value={formData.Advertiser} onChange={handleChange} className="mt-1 block w-full border rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Tamaño</label>
            <SelectSize sizeArray={["15 sec non skippable", "15 sec skippable", "30 sec non skippable", "30 sec skippable", "60 sec skippable"]} />
          </div>
          <div>
            <label className="block text-sm font-medium">Unidades</label>
            <Input type="number" name="Units" value={formData.Units} onChange={handleChange} className="mt-1 block w-full border rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium">C Model</label>
            <Input type="text" name="C_model" value="CPM" onChange={handleChange} className="mt-1 block w-full border rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Costo Unitario</label>
            <Input type="number" name="Ucost" value={formData.Ucost} onChange={handleChange} className="mt-1 block w-full border rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Inversión</label>
            <Input type="number" name="Investment" value={formData.Investment} onChange={handleChange} className="mt-1 block w-full border rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium">USMC Tare</label>
            <Input type="number" name="USMC_Tare" value={formData.USMC_Tare} onChange={handleChange} className="mt-1 block w-full border rounded-md" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Crear Campaña
          </button>
        </form>
      </div>
    </div>
  );
};

export { CreateCampaignForm };
