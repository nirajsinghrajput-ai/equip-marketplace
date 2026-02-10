export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Find Construction Equipment On Demand
      </h1>

      <p className="text-lg text-gray-600 mb-10 text-center max-w-xl">
        Get verified JCBs, Cranes, RMC Pumps and more delivered to your project site.
      </p>

      <div className="flex gap-4">
        <a href="/post-requirement" className="bg-black text-white px-6 py-3 rounded-xl">
          Get Equipment
        </a>

        <a href="/list-equipment" className="border px-6 py-3 rounded-xl">
          List Your Equipment
        </a>
      </div>
    </main>
  )
}
