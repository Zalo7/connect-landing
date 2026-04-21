export default function Coverage() {
  return (
    <section id="coverage" aria-label="Área de cobertura" className="h-[420px]">
      {/*
        Para el embed de Google Maps:
          1. Generá una API key en console.cloud.google.com
          2. Actualizá la URL con &key=TU_API_KEY
      */}
      <iframe
        title="Cobertura Connect en Quitilipi"
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27616.4!2d-60.217!3d-26.866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94399f2e6b9cff4b%3A0x6f7b65ade4b65614!2sQuitilipi%2C%20Chaco!5e0!3m2!1ses!2sar!4v1680000000000!5m2!1ses!2sar"
        allowFullScreen
      />
    </section>
  );
}
