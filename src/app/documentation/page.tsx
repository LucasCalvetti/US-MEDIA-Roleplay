import { Header } from "@/components/header";
import Image from "next/image";
import imageGeneral from "@/assets/foto-1.jpg";
import imageNewCampaign from "@/assets/foto-2.jpg";
import imageResult from "@/assets/foto-3.jpg";

export default function Documentation() {
  return (
    <div className="text-gray-300 container mx-auto p-4">
      <Header />
      <h1 className="text-4xl font-bold text-center mb-10">Documentación</h1>
      <div className="flex flex-col gap-4 w-2/3 mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-2">Descripción General</h2>
        <p>
          La aplicación de cotización para USMEDIA permite a los usuarios (vendedores) calcular el margen de las campañas publicitarias. La aplicación proporciona una interfaz sencilla para ingresar datos sobre la campaña, calcular el
          margen y generar un reporte de campañas cotizadas.
        </p>
        <Image src={imageGeneral} alt="cotizador-image" />
        <ul className="list-decimal list-inside space-y-4 mb-4">
          <li className="mb-2 text-md">
            <span className="font-bold text-lg">Link a Documentación:</span> <br /> Link que al hacer click dirige al usuario a la pagina de la documentación.
          </li>
          <li className="mb-2 text-md">
            <span className="font-bold text-lg">Link al Cotizador:</span>
            <br /> Link que al hacer click dirige al usuario a la pagina del cotizador.
          </li>
          <li className="mb-2 text-md">
            <span className="font-bold text-lg">Crear Nueva Campaña:</span>
            <br /> El usuario puede crear una nueva campaña haciendo click en este botón, lo que abre un formulario adicional (ver siguiente imagen). Aquí, puede ingresar la información de la nueva campaña y los datos quedaran cargados en
            el formulario de cotización del punto 4. Si decide no crearla, puede cerrar este formulario.
          </li>
          <li className="mb-2 text-md">
            <span className="font-bold text-lg">Formulario de Cotización:</span>
            <br /> El usuario puede ingresar detalles sobre una campaña, como el nombre, cliente, anunciante, tamaño del anuncio, y más. Luego, puede calcular el margen de la campaña, que se muestra en la pantalla.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Crear nueva campaña</h2>
        <p>
          Al hacer click en el botón de crear nueva campaña podemos setear los datos de la misma en el formulario. Los datos de la nueva campaña se cargan en el formulario de cotización (el formulario anterior) al hacer click en "Crear
          nueva campaña".
          <br />
          <br />
          Dato: En el futuro seria mejor que estos datos vengan de una base de datos y no haya que cargar nuevos de esta forma para tener una mejor experiencia.
        </p>
        <Image src={imageNewCampaign} alt="new-campaign-image" />

        <h2 className="text-2xl font-semibold mb-2">Resultados</h2>
        <p>
          Una vez enviado los datos del formulario de cotización el programa verifica si esta campaña ya fue calculada previamente y si no lo fue, procede a calcularla y mostrarla debajo del formulario de cotización, si ha sido calculada
          previamente envia un mensaje de error para notificar al usuario, con un mensaje avisando que la campaña ya fue calculada.
        </p>
        <Image src={imageResult} alt="result-image" />
        <ul className="list-decimal list-inside space-y-4 mb-4">
          <li className="mb-2 text-md">
            <span className="font-bold text-lg">Campaña y margen:</span> <br /> Se muestra el nombre de la campaña y el margen calculado de la misma.
          </li>
          <li className="mb-2 text-md">
            <span className="font-bold text-lg">Botón de detalle:</span>
            <br /> Al hacer click en este botón, se muestra los datos relacionados a la campañá y el margen.
          </li>
          <li className="mb-2 text-md">
            <span className="font-bold text-lg">Reporte de campañas:</span>
            <br /> Este contador muestra el total de campañas publicitarias cotizadas y va incrementando a medida que se agregan nuevas.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Cálculo del margen</h2>
        <p>
          El margen de la campaña se calcula de la siguiente manera:
          <br />
          <br />
          <span className="font-bold">Margen = (1 + (-1 * (Costo + 0.1 * Inversión)) / Inversión) * 100</span>
        </p>
        <h2 className="text-2xl font-semibold mb-2">Datos referidos al programa</h2>
        <ul className="list-disc list-inside space-y-4 mb-4">
          <li className="mb-2 text-md">
            <span className="font-bold text-lg">Programa desarrollado por Lucas Calvetti.</span>
          </li>
          <li className="mb-2 text-md">
            <span className="font-bold text-lg">Tecnologías utilizadas: </span>
            Typescript, Javascript, React, Next.js, Tailwind, Vercel, CSS.
          </li>
          <li className="mb-2 text-md">
            <span className="font-bold text-lg">Tiempo dedicado al mismo: </span>
            9hs aproximadamente.
          </li>
        </ul>
      </div>
    </div>
  );
}
