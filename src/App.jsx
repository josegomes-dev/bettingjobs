function App() {
  return (
    <div className="font-sans leading-relaxed text-gray-800">

      {/* HERO */}
      <section className="text-center py-20 px-6 bg-white">
        <h1 className="text-4xl font-bold mb-4">
          Find Your Next <span className="text-teal-600">iGaming Job</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Discover top opportunities in Malta, Europe, and worldwide.
        </p>
      </section>

      {/* VALUE PROPS */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Trusted Companies</h3>
            <p className="text-gray-600">Work with verified and reputable brands.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-600">Opportunities across Europe and beyond.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Fast Hiring</h3>
            <p className="text-gray-600">Streamlined recruitment for top talent.</p>
          </div>
        </div>
      </section>

      {/* JOB CARDS */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Jobs</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-2">SEO Specialist</h4>
            <p className="text-gray-600 mb-4">iGaming • Malta</p>
            <button className="text-teal-600 font-medium hover:underline">View Job</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-2">Product Manager</h4>
            <p className="text-gray-600 mb-4">Remote • Europe</p>
            <button className="text-teal-600 font-medium hover:underline">View Job</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-2">Affiliate Manager</h4>
            <p className="text-gray-600 mb-4">Hybrid • Malta</p>
            <button className="text-teal-600 font-medium hover:underline">View Job</button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
