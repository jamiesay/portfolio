import Image from "next/image";

const FavorProject = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Image Section */}
      <div className="relative w-full h-[50vh] mb-12">
        <Image
          src="/assets/favor-hero.png"  // Update with your image path
          alt="Favor Project Overview"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>

      {/* Three Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Problem Column */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
            Problem
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300">
            College students often struggle to exchange goods and services within their campus community, 
            lacking a dedicated platform that understands their unique needs and constraints.
          </p>
        </div>

        {/* Solution Column */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
            Solution
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300">
            Developed a mobile-first platform that enables secure peer-to-peer bartering, 
            featuring verified student profiles, in-app messaging, and a reputation system.
          </p>
        </div>

        {/* Results Column */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
            Results
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300">
            Successfully launched beta with 500+ active users across 3 campuses, 
            facilitating over 200 successful trades in the first month.
          </p>
        </div>
      </div>
    </main>
  );
};

export default FavorProject;