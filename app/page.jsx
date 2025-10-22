import HomeSeacrh from "@/components/home-search";

export default function Home() {
  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section with Gradient Title */}

      <section className="relative py-16 md:py-28 dotted-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-5xl mb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-pulse">
              Find your Dream Car with Vehiql AI
            </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
              Advanced AI Car Search and test drive from thousands of vehicles.
            </p>
          </div>
          {/* Search Component (Client) */}
          <HomeSeacrh />
        </div>
      </section>

    </div>
  );
}
