function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-8 px-4">
        <div className="container mx-auto">
          {/* Mobile Layout */}
          <div className="md:hidden space-y-6 text-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">THE REBEL</h3>
            </div>
            
            <div className="flex justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M12.933 13.522l-1.583-1.055a.5.5 0 00-.6 0l-1.583 1.055a1 1 0 01-1.217-.852l-.4-2.8a1 1 0 01.717-1.115l2.45-1.05a1 1 0 011.016 0l2.45 1.05a1 1 0 01.717 1.115l-.4 2.8a1 1 0 01-1.217.852zM9.5 6.5l.5-3a1 1 0 011-1h2a1 1 0 011 1l.5 3" />
                <path d="M7 12.5a1 1 0 00-1 1v5a1 1 0 001 1h10a1 1 0 001-1v-5a1 1 0 00-1-1h-1" />
              </svg>
            </div>
            
            <div className="space-y-2">
              <p>
                <a href="mailto:team.therebel@gmail.com" className="hover:text-white text-sm">
                  team.therebel@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+919999848268" className="hover:text-white text-sm">
                  +91 9999848268
                </a>
              </p>
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center">
            {/* Left Side: The Rebel */}
            <div>
              <h3 className="text-xl font-bold text-white">THE REBEL</h3>
            </div>
      
            {/* Middle: T-Shirt Icon */}
            {/* <div className="text-white">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12.933 13.522l-1.583-1.055a.5.5 0 00-.6 0l-1.583 1.055a1 1 0 01-1.217-.852l-.4-2.8a1 1 0 01.717-1.115l2.45-1.05a1 1 0 011.016 0l2.45 1.05a1 1 0 01.717 1.115l-.4 2.8a1 1 0 01-1.217.852zM9.5 6.5l.5-3a1 1 0 011-1h2a1 1 0 011 1l.5 3" />
                <path d="M7 12.5a1 1 0 00-1 1v5a1 1 0 001 1h10a1 1 0 001-1v-5a1 1 0 00-1-1h-1" />
              </svg>
            </div> */}
      
            {/* Right Side: Contact Info */}
            <div className="text-right">
              <p>
                <a href="mailto:team.therebel@gmail.com" className="hover:text-white">
                  team.therebel@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+919999848268" className="hover:text-white">
                  +91 9999848268
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer; 