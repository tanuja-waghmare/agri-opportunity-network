export default function Home() {
  return (
    <main className="min-h-screen bg-green-50">
      <nav className="flex items-center justify-between border-b bg-white px-8 py-4">
        <h1 className="text-2xl font-bold text-green-700">
          Agri Opportunity Network
        </h1>

        <div className="flex gap-4">
          <button className="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100">
            Login
          </button>

          <button className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700">
            Register
          </button>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-8 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900">
          Connect. Trade. Discover Opportunities.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          An AI-powered agricultural network connecting farmers and buyers
          through intelligent grain marketplace opportunities.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700">
            Explore Marketplace
          </button>

          <button className="rounded-lg border border-green-600 px-6 py-3 font-semibold text-green-700 hover:bg-green-100">
            Create Listing
          </button>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-8 pb-20 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold">🌾 For Farmers</h3>
          <p className="mt-3 text-gray-600">
            Create grain listings, showcase your produce, and discover
            potential buyers.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold">🏢 For Buyers</h3>
          <p className="mt-3 text-gray-600">
            Find suitable agricultural products and connect directly with
            farmers.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold">🤖 AI Matching</h3>
          <p className="mt-3 text-gray-600">
            Get intelligent recommendations based on grain, quantity, price,
            quality, and location.
          </p>
        </div>
      </section>
    </main>
  );
}