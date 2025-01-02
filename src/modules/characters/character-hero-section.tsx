export function CharacterHeroSection() {
  return (
    <div className="relative w-full h-[650px] bg-hero-section-background-characters bg-cover bg-center flex items-end p-11">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1) 1%, transparent)",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

      <div className="relative w-[800px]">
        <h1 className="text-white text-5xl font-bold">
          Meet the Characters of Rick and Morty
        </h1>
        <p className="text-white text-lg mt-4">
          Dive into a world of madness and adventure alongside the unique
          characters that make each episode unforgettable. From the brilliant
          yet eccentric Rick to his insecure grandson Morty—each brings their
          own personality and dynamic to the thrilling stories. Discover how
          their relationships and traits influence their journeys through
          endless worlds and how they tackle the challenges posed by the
          multiverse.
        </p>
      </div>
    </div>
  );
}
