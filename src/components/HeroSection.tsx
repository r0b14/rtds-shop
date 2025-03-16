import React from "react";
import { useUser } from "../contexts/UserContext";

export default function HeroSection() {
  const { user } = useUser();
  return (
    <section className="relative px-28 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row items-center" style={{backgroundColor: "#f2f0f1"}}>
      <div className="p-8 md:w-1/2">
        {user && (
          <h1 className="mt-4 text-4xl mb-2.5 text-gray-600">
            Olá, {user.firstName}!
          </h1>
        )}

        <h2 className="text-3xl font-extrabold text-black">
          ENCONTRE ROUPAS <br /> QUE COMBINAM COM SEU ESTILO
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Navegue pela nossa diversa gama de roupas meticulosamente
          confeccionadas, projetadas para destacar sua individualidade.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://media.discordapp.net/attachments/1350669777760292915/1350673596904771605/Rectangle_2.png?ex=67d7984f&is=67d646cf&hm=534a67956770c4d457492a4427c581ef5a2dfddecb27b3c3f8ea26ef2cd69f03&=&format=webp&quality=lossless&width=1738&height=800"
          alt="Banner de Moda"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
