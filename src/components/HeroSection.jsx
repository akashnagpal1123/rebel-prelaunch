function HeroSection() {
    const scrollToForm = () => {
      const formSection = document.getElementById('signup-form');
      if (formSection) {
        formSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    return (
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-4 w-full">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-widest mb-4 md:mb-6">
            THE REBEL
          </h1>
          <p className="text-2xl md:text-4xl lg:text-5xl font-light px-4 mb-8 md:mb-12">
            Dare to be different.
          </p>
          
          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-105"
          >
            Join the Waitlist
          </button>
        </div>
      </section>
    );
  }
  
  export default HeroSection;