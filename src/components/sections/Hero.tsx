function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-bold">
          Мифы
        </h1>

        <p className="mt-6 text-2xl text-gray-300">
          Команда КВН Университета ИТМО
        </p>

        <p className="mt-4 text-lg text-gray-400">
          Юмор. Энергия. Большая сцена.
        </p>

        <button className="mt-8 rounded-xl bg-white px-8 py-3 text-black font-semibold">
          Ближайшее выступление
        </button>
      </div>
    </section>
  )
}

export default Hero