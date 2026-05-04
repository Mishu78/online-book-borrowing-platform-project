const WhyChoosePlatform = () => {
  return (
    <section className="py-16 bg-slate-50 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">


        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
          The Modern Way to Read
        </h2>

        <p className="text-slate-600 max-w-xl mx-auto mb-12">
          We make borrowing books simple, fast, and completely digital.
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition flex flex-col items-center">
            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-2xl mb-5">
              📚
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Instant Access
            </h3>
            <p className="text-slate-600">
              Browse and read books instantly anytime, anywhere.
            </p>
          </div>

        
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition flex flex-col items-center">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-5">
              🔒
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Secure & Reliable
            </h3>
            <p className="text-slate-600">
              Your data and reading history are always safe.
            </p>
          </div>


          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition flex flex-col items-center">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-5">
              🌍
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Eco-Friendly
            </h3>
            <p className="text-slate-600">
              Reduce paper usage and support a greener future.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoosePlatform;