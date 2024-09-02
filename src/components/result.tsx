import { PopoverDetails } from "./popoverDetails";

const Result = ({ campaigns }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto mt-4 w-[85%] border rounded-md">
      <h2 className="text-2xl font-semibold text-center text-gray-200 rounded-t-md col-span-full m-0 bg-orange-700 py-4">Resultado</h2>
      <div className="flex flex-col gap-2 p-4">
        {campaigns.map((campaign, index) => (
          <div key={index} className="flex justify-between border-2 p-2 border-gray-500">
            <h3 className="text-lg font-bold">Campaña: "{campaign["Campaña"]}"</h3>
            <div className="flex">
              <p className="text-md font-bold">Margen: {campaign.Margin}%</p>
              <PopoverDetails campaign={campaign} />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-800 p-4 text-center">
        <h3 className="text-lg font-bold mb-4">Reporte de número de campañas cotizadas</h3>
        <p className="text-3xl font-bold mb-4">{campaigns.length}</p>
      </div>
    </div>
  );
};

export { Result };
