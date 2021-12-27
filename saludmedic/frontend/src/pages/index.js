import React, { useEffect, useState } from "react";
import LoadingBox from "components/LoadingBox";
import MessageBox from "components/MessageBox";
import RegisterCard from "components/Card/RegisterCard";

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          {/* Banner */}
          <div className="bg-white flex justify-center">
            <img
              src="https://image.shutterstock.com/image-photo/medical-physician-doctor-hands-healthcare-260nw-261024704.jpg"
              alt=""
            ></img>
          </div>
          {/* Cuerpo */}
          <div className="sm:flex justify-center bg-green-300">
            {/* Cuerpo covid */}
            <div className="flex items-center">
              <div className="mx-5">
                <h2 className="font-bold text-blue-500">
                  Prevencion contra el covid-19
                </h2>
                <p className="text-sm sm:text-base">
                  En esta sistuacion es importante conocer aspectos importantes
                  contr el COVID-19 .Aqui encontraras tips y videos utilitarios
                  que te serviran para evitar un posible contagio del nuevo
                  coranavirus.
                </p>
              </div>
            </div>
            {/* Video */}
            <div className="my-3 flex justify-center">
              <video controls src=""></video>
            </div>
          </div>
          {/* Noticias */}
          <div className="bg-white">
            <h2 className="m-3 font-bold text-blue-500">Noticias</h2>
            <div className="grid gap-2 grid-cols-3">
              <div className="m-3">
                <div className="flex justify-center">
                  <img src="https://www.cocemfe.es/wp-content/uploads/2021/01/cocemfe-alicante-vacunacion-covid-256x256.jpg"></img>
                </div>

                <p className="text-center text-xs sm:text-base">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Corporis sequi, laudantium soluta excepturi asperiores
                  voluptates exercitationem qui ducimus? Facere praesentium
                  mollitia ipsam accusantium esse, quod
                </p>
              </div>
              <div className="m-3">
                <div className="flex justify-center">
                  <img src="https://www.cocemfe.es/wp-content/uploads/2021/01/cocemfe-alicante-vacunacion-covid-256x256.jpg"></img>
                </div>

                <p className="text-center text-xs sm:text-base">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Corporis sequi, laudantium soluta excepturi asperiores
                  voluptates exercitationem qui ducimus? Facere praesentium
                  mollitia ipsam accusantium esse, quod
                </p>
              </div>
              <div className="m-3">
                <div className="flex justify-center">
                  <img src="https://www.cocemfe.es/wp-content/uploads/2021/01/cocemfe-alicante-vacunacion-covid-256x256.jpg"></img>
                </div>
                <p className="text-center text-xs sm:text-base">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Corporis sequi, laudantium soluta excepturi asperiores
                  voluptates exercitationem qui ducimus? Facere praesentium
                  mollitia ipsam accusantium esse, quod
                </p>
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer className="bg-green-300 grid grid-cols-3">
            {/* Direccion */}
            <div className="text-white font-bold text-center">
              <h2 className="sm:text-2xl">SaludMedic</h2>
              <h5 className="text-xs">Villa el Salvador-163</h5>
              <h5 className="text-xs">Calle Bolivar</h5>
            </div>
            {/* Sucursal */}
            <div className="text-white font-bold text-center">
              <h2 className="sm:text-2xl">¿Donde me atiendo?</h2>
              <h5 className="text-xs sm:text-base">Lima y Regiones</h5>
            </div>
            {/* Redes */}
            <div className="text-white font-bold text-center">
              <h2 className="sm:text-2xl">Redes Sociales</h2>
              <img alt="facebook"></img>
              <img alt="instagram"></img>
              <img alt="twitter"></img>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
