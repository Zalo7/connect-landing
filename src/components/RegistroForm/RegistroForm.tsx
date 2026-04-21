"use client";

import { useState } from "react";

export default function RegistroForm() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    barrio: "",
    telefono: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, quiero pre-registrarme.\nNombre: ${form.nombre} ${form.apellido}\nBarrio: ${form.barrio}\nTeléfono: ${form.telefono}`;
    window.open(
      `https://wa.me/5493644587317?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 rounded-[24px] bg-[#BFB4D8] px-8 py-10 lg:px-12 lg:py-14"
    >
      <div className="flex flex-col gap-8 lg:gap-10">
        <div>
          <label className="block font-display text-[1.1rem] font-normal text-[#1A063A] lg:text-[1.25rem]">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="mt-2 w-full border-b-2 border-[#1A063A]/40 bg-transparent pb-2 font-display text-[1rem] text-[#1A063A] outline-none focus:border-[#1A063A] lg:text-[1.1rem]"
          />
        </div>

        <div>
          <label className="block font-display text-[1.1rem] font-normal text-[#1A063A] lg:text-[1.25rem]">
            Apellido
          </label>
          <input
            type="text"
            name="apellido"
            value={form.apellido}
            onChange={handleChange}
            required
            className="mt-2 w-full border-b-2 border-[#1A063A]/40 bg-transparent pb-2 font-display text-[1rem] text-[#1A063A] outline-none focus:border-[#1A063A] lg:text-[1.1rem]"
          />
        </div>

        <div>
          <label className="block font-display text-[1.1rem] font-normal text-[#1A063A] lg:text-[1.25rem]">
            Barrio
          </label>
          <input
            type="text"
            name="barrio"
            value={form.barrio}
            onChange={handleChange}
            required
            className="mt-2 w-full border-b-2 border-[#1A063A]/40 bg-transparent pb-2 font-display text-[1rem] text-[#1A063A] outline-none focus:border-[#1A063A] lg:text-[1.1rem]"
          />
        </div>

        <div>
          <label className="block font-display text-[1.1rem] font-normal text-[#1A063A] lg:text-[1.25rem]">
            Teléfono
          </label>
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            required
            className="mt-2 w-full border-b-2 border-[#1A063A]/40 bg-transparent pb-2 font-display text-[1rem] text-[#1A063A] outline-none focus:border-[#1A063A] lg:text-[1.1rem]"
          />
        </div>
      </div>
    </form>
  );
}
