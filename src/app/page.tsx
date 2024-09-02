"use client";
import { useState } from "react";
import { QuoteForm } from "@/components/quoteForm";
import { Result } from "@/components/result";
import { CreateCampaignForm } from "@/components/createForm";
import { Button } from "@/components/internal/button";
import { Header } from "@/components/header";
import { toast } from "sonner";

export default function Home() {
  const [createFlag, setCreateFlag] = useState(false);
  const [data, setData] = useState({
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
    Units: 390839,
    C_model: "CPM",
    Ucost: 5.42,
    Investment: 2116.74,
    USMC_Tare: 3.72,
  } as any);
  const [campaigns, setCampaigns] = useState([]);

  const vendorArray = ["Nicolas", "Carla", "Rafael", "Catia"];
  const handleFormSubmit = (formdata) => {
    setData((prevData) => ({ ...prevData, ...formdata }));

    const { Investment, USMC_Tare, Units } = formdata;
    const cost = (Units * USMC_Tare) / 1000;
    const newMargin = ((1 + (-1 * (cost + 0.1 * Investment)) / Investment) * 100).toFixed(2);

    if (campaigns.find((campaign) => campaign.Campaña === formdata.Campaña)) {
      toast.error("La campaña: " + formdata.Campaña + " ya existe");
    } else {
      setCampaigns((prevCampaigns) => [...prevCampaigns, { ...formdata, Margin: newMargin, Cost: cost }]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <main className="flex flex-col items-center justify-center p-4">
        <QuoteForm data={data} vendorArray={vendorArray} onSubmit={handleFormSubmit} />
        {campaigns.length > 0 && <Result campaigns={campaigns} />}
        <Button variant="link" onClick={() => setCreateFlag(!createFlag)} className="mt-8">
          Crear Nueva Campaña
        </Button>
        {createFlag && <CreateCampaignForm setData={setData} setCreateFlag={setCreateFlag} />}
      </main>
    </div>
  );
}

/* 
Revisar la documentación
Subir todo a vercel
*/
