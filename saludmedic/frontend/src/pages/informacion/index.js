import Footer from "components/Footer";

export default function Informacion() {
  return (
    <section className="relative pt-12 bg-blueGray-50">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-3/12 ml-auto mr-auto px-4 hidden lg:flex">
          <img
            alt="..."
            className="max-w-full rounded-lg shadow-lg"
            src="https://fmcna.com/content/dam/fmcna/live/home-page-redesign/research_492x690@2x.jpg"
          />
        </div>
        <div className="w-10/12 md:w-7/12 ml-auto mr-auto px-4">
          <div className="pr-0 lg:pr-12">
            <h3 className="text-3xl font-semibold">¿Quiénes somos?</h3>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              SaludMedic es una iniciativa de los médicos especialistas ante la
              crisis sanitaria por el COVID-19 en el Perú.
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex flex-col">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3">
                      <i className="fas fa-fingerprint"></i>
                    </span>
                    <span classNameName="font-bold">Misión</span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Brindamos prestaciones de salud a nuestros asegurados con
                      una gestión eficiente e innovadora que garantiza la
                      protección contra la actual pandemia.
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex flex-col">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3">
                      <i className="fab fa-html5"></i>
                    </span>
                    <span classNameName="font-bold">Visión</span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Ser una institución moderna y en mejora continua, centrada
                      en los asegurados que garantiza el acceso a la atención de
                      salud adecuada de acuerdo a las circunstancias.
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="relative  pt-8 pb-6 mt-8">
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
