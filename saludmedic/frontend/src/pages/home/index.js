import Footer from "components/Footer";

export default function Home() {
  const BgImage =
    "https://auna.pe/wp-content/uploads/2021/08/Foto-1-portada-1.jpg";

  return (
    <>
      <section className="relative  bg-blueGray-50">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${BgImage})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute bg-gray-700 bg-opacity-30 backdrop-filter backdrop-blur-sm"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-0 sm:pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Vida Saludable
                  </h1>
                  <p className="mt-4 text-sm sm:text-lg text-white">
                    Hoy en día se han incrementado ciertas enfermedades
                    degenerativas debido a estilos de vida no saludables; entre
                    las principales enfermedades crónicas degenerativas que
                    destacan en nuestro país son: Diabetes, enfermedades del
                    corazón, hipertensión arterial, entre otros. En SaludMedic
                    cuidamos de tu salud y te ayudamos a llevar una vida
                    saludable. Por ello, presentamos nuestra sección Vida
                    Saludable, donde encontraras consejos e indicaciones para
                    mejorar tu calidad de vida y tener mejores hábitos
                    beneficiosos para tu salud. ¡Comencemos haciendo pequeños
                    cambios en nuestra salud!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <section className="pb-10 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#85C1E9]">
                      1
                    </div>
                    <h6 className="text-xl font-semibold">
                      Cuida tu alimentación
                    </h6>
                    <p className="mt-2 mb-4">
                      Una alimentación saludable consiste en ingerir una
                      variedad de alimentos que te brinden los nutrientes que
                      necesitas para mantenerte sana, sentirte bien y tener
                      energía.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#76D7C4]">
                      2
                    </div>
                    <h6 className="text-xl font-semibold">Actividad física</h6>
                    <p className="mt-2 mb-4">
                      La actividad física es una importante alternativa para una
                      vida saludable, incluyendo no tener dolores, no disminuir
                      nuestras capacidades, mantenerse mentalmente activo y no
                      reducir involuntariamente nuestras actividades.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#73C6B6]">
                      3
                    </div>
                    <h6 className="text-xl font-semibold">Descanso</h6>
                    <p className="mt-2 mb-4">
                      Un descanso adecuado es básico para la salud. Dormir poco
                      o mal afecta el sistema inmunológico y cognitivo. Para
                      disfrutar de un buen descanso procura ir a la cama siempre
                      a la misma hora y en un entorno tranquilo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative  pt-2 pb-2">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <Footer />
                </div>
              </div>
            </div>
          </footer>
        </section>
      </section>
    </>
  );
}
