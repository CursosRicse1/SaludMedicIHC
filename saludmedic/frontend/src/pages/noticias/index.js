import Footer from "components/Footer";
import Expand from "components/icons/Expand";

export default function Noticias() {
  return (
    <section className="relative pt-8 bg-blueGray-50">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-10/12 md:w-10/12 lg:w-11/12 px-12 md:px-4 mr-auto ml-auto -mt-78 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-[#85C1E9] cursor-pointer transition ease-in duration-300 hover:bg-[#6fa1c2]">
              <img
                alt="..."
                src="https://web.ins.gob.pe/sites/default/files/inline-images/VISITA%20DEL%20DR.%20SUAREZ%20A%20IVITA.jpg"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                ></svg>
                <h4 className="text-xl font-bold text-white">
                  INS y la UNMSM realizarán investigaciones en salud pública en
                  Iquitos
                </h4>
                <p className="text-md font-light mt-2 text-gray-800">
                  El Instituto Nacional de Salud (INS) junto a la Universidad
                  Nacional Mayor de San Marcos (UNMSM), fortalecerán la
                  cooperación e investigación conjunta, para realizar diversas
                  investigaciones en salud pública en Iquitos.
                </p>
              </blockquote>
            </div>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-[#76D7C4] cursor-pointer transition ease-in duration-300 hover:bg-[#67bbaa]">
              <img
                alt="..."
                src="https://web.ins.gob.pe/sites/default/files/inline-images/CENAS%20SALUDABLES%20CENAN%20FOTO%201_0.jpg"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                ></svg>
                <h4 className="text-xl font-bold text-white">
                  Nutricionistas del INS alertan cuidar el exceso en consumo de
                  alimentos durante la cena navideña
                </h4>
                <p className="text-md font-light mt-2 text-gray-800">
                  Especialistas del INS recomiendan distanciamiento social y
                  bioseguridad en casa para prevenir contagios de COVID-19
                  especialmente por la variante Ómicrom.
                </p>
              </blockquote>
            </div>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-[#73C6B6] cursor-pointer transition ease-in duration-300 hover:bg-[#5eaa9b]">
              <img
                alt="..."
                src="https://web.ins.gob.pe/sites/default/files/inline-images/WhatsApp%20Image%202021-12-15%20at%201.28.52%20PM%20%281%29.jpeg"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                ></svg>
                <h4 className="text-xl font-bold text-white">
                  INS logra avances en el desarrollo de nanoanticuerpos para
                  neutralizar la infección por COVID-19 en una llama peruana
                </h4>
                <p className="text-md font-light mt-2 text-gray-800">
                  En el marco de las investigaciones y los aportes en la salud
                  pública peruana, el Instituto Nacional de Salud, (INS) del
                  Ministerio de Salud logró los avances en el desarrollo de
                  nanoanticuerpos para neutralizar la infección por COVID-19 en
                  una llama peruana llamada Tito, informó el biólogo molecular
                  del INS, Henri Bailón Calderón.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="group w-full flex justify-center space-x-3 cursor-pointer font-semibold">
        <div className="rounded-full bg-green-500 group-hover:bg-green-800">
          <Expand className="fill-current text-white" />
        </div>
        <span className="group-hover:underline">Ver más</span>
      </div>
      <footer className="relative bg-blueGray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
