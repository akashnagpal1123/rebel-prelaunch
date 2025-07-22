function StorySection() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-8 md:left-20 w-16 h-16 md:w-24 md:h-24 bg-teal-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-8 md:right-20 w-12 h-12 md:w-20 md:h-20 bg-purple-500 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 md:w-16 md:h-16 bg-pink-500 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700/50">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-xl md:text-2xl font-light text-gray-300">
              Born from Frustration. Built with Fire.
            </p>
          </div>
          
          {/* Story Content */}
          <div className="space-y-6 md:space-y-8 text-gray-300 leading-relaxed">
            
            <p className="text-lg md:text-xl">
              For years, fashion told us we had to shrink, squeeze, or settle.
            </p>
            
            <div className="space-y-4">
              <p className="text-base md:text-lg">
                Tried on a dress — too tight at the bust, loose at the waist.
              </p>
              <p className="text-base md:text-lg">
                Jeans that wouldn't go past our hips.
              </p>
              <p className="text-base md:text-lg">
                Or worse, being told to "check the men's section."
              </p>
            </div>
            
            <p className="text-xl md:text-2xl font-semibold text-white">
              Sound familiar?
            </p>
            
            <p className="text-lg md:text-xl">
              The Rebel was born from that same frustration — with Indian brands that forget how real women live, move, and want to feel.
            </p>
            
            <p className="text-lg md:text-xl">
              We're building a brand that doesn't start with trends or measurements.
            </p>
            
            <p className="text-xl md:text-2xl font-semibold text-white">
              We start with you.
            </p>
            
            {/* Features */}
            <div className="space-y-4 md:space-y-6 mt-8 md:mt-12">
              <div className="flex items-start space-x-3">
                <span className="text-teal-400 text-xl md:text-2xl">✔️</span>
                <p className="text-base md:text-lg">Sizes that actually fit — not just scaled-up S</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-purple-400 text-xl md:text-2xl">👗</span>
                <p className="text-base md:text-lg">Styles that turn heads, not hide bodies</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-pink-400 text-xl md:text-2xl">💰</span>
                <p className="text-base md:text-lg">Pricing that respects your budget, not just the brand name</p>
              </div>
            </div>
            
            <div className="space-y-4 mt-8 md:mt-12">
              <p className="text-lg md:text-xl font-semibold text-white">
                No more compromises. No more one-size-fits-all lies.
              </p>
              
              <p className="text-lg md:text-xl">
                We're here for every woman who's ever felt like fashion wasn't made for her.
              </p>
              
              <p className="text-lg md:text-xl">
                Because now, it finally is.
              </p>
            </div>
            
            {/* Closing */}
            <div className="text-center mt-12 md:mt-16">
              <p className="text-2xl md:text-3xl font-bold text-white">
                This is The Rebel.
              </p>
              <p className="text-lg md:text-xl text-gray-400 mt-2">
                And we're just getting started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection; 