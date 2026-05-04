const LibraryStats = () => {
  return (
    <section className="py-16 bg-slate-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">


        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Our Library at a Glance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-4xl font-bold text-blue-400">500+</h3>
            <p className="text-gray-300 mt-2">Books Available</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-400">1K+</h3>
            <p className="text-gray-300 mt-2">Active Readers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">300+</h3>
            <p className="text-gray-300 mt-2">Books Borrowed</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-pink-400">24/7</h3>
            <p className="text-gray-300 mt-2">Access Anywhere</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LibraryStats;