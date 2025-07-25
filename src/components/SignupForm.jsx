// import { useState } from 'react';

// function SignupForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     message: '',
//   });
//   const [responseMessage, setResponseMessage] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setResponseMessage('');
//     setIsSubmitting(true);

//     if (!formData.name || !formData.email) {
//       setResponseMessage('Name and Email are required.');
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:3000/api/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setResponseMessage(data.message);
//         setFormData({ name: '', email: '', mobile: '', message: '' });
//       } else {
//         setResponseMessage(data.message || 'An error occurred.');
//       }
//     } catch (error) {
//       console.error('Submission error:', error);
//       setResponseMessage('Failed to connect to the server. Please try again later.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="signup-form" className="bg-black text-white py-12 md:py-20 px-4 relative overflow-hidden">
//       {/* Moodboard Background */}
//       <div className="absolute inset-10 opacity-20">
//         <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 h-full">
//           {/* Fashion Image 1 */}
//           <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg transform rotate-2 hover:rotate-0 transition-transform duration-300"></div>
          
//           {/* Fashion Image 2 */}
//           <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300"></div>
          
//           {/* Fashion Image 3 */}
//           <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"></div>
          
//           {/* Fashion Image 4 */}
//           <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"></div>
          
//           {/* Fashion Image 5 */}
//           <div className="bg-gradient-to-br from-blue-400 to-teal-500 rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-300"></div>
          
//           {/* Fashion Image 6 */}
//           <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300"></div>
          
//           {/* Fashion Image 7 */}
//           <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg transform rotate-2 hover:rotate-0 transition-transform duration-300"></div>
          
//           {/* Fashion Image 8 */}
//           <div className="bg-gradient-to-br from-red-400 to-pink-500 rounded-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300"></div>
          
//           {/* Fashion Image 9 */}
//           <div className="bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"></div>
          
//           {/* Fashion Image 10 */}
//           <div className="bg-gradient-to-br from-yellow-400 to-green-500 rounded-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"></div>
          
//           {/* Fashion Image 11 */}
//           <div className="bg-gradient-to-br from-pink-400 to-red-500 rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-300"></div>
          
//           {/* Fashion Image 12 */}
//           <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300"></div>
//         </div>
//       </div>
      
//       {/* Animated background elements */}
//       {/* <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-10 left-4 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-teal-500 rounded-full animate-pulse"></div>
//         <div className="absolute top-40 right-4 md:right-20 w-10 h-10 md:w-16 md:h-16 bg-purple-500 rounded-full animate-bounce"></div>
//         <div className="absolute bottom-20 left-1/4 w-8 h-8 md:w-12 md:h-12 bg-pink-500 rounded-full animate-ping"></div>
//       </div> */}
      
//       <div className="container mx-auto max-w-sm md:max-w-md lg:max-w-lg relative z-10">
//         <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700/50 hover:shadow-teal-500/20 transition-all duration-500 transform hover:scale-105">
//           <h2 className="text-2xl md:text-3xl font-serif mb-6 md:mb-8 text-center bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
//             Join the waitlist
//           </h2>
          
//           <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
//             <div className="relative group">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-3 md:p-4 bg-gray-800/70 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-white backdrop-blur-sm text-sm md:text-base"
//                 required
//               />
//               <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//             </div>
            
//             <div className="relative group">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 md:p-4 bg-gray-800/70 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-white backdrop-blur-sm text-sm md:text-base"
//                 required
//               />
//               <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//             </div>
            
//             <div className="relative group">
//               <input
//                 type="tel"
//                 name="mobile"
//                 placeholder="Mobile No (optional)"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 className="w-full p-3 md:p-4 bg-gray-800/70 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-white backdrop-blur-sm text-sm md:text-base"
//               />
//               <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//             </div>
            
//             <div className="relative group">
//               <textarea
//                 name="message"
//                 placeholder="Message (optional)"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="3"
//                 className="w-full p-3 md:p-4 bg-gray-800/70 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-white backdrop-blur-sm resize-none text-sm md:text-base"
//               ></textarea>
//               <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//             </div>
            
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/50 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group text-sm md:text-base"
//             >
//               <span className="relative z-10 flex items-center justify-center">
//                 {isSubmitting ? (
//                   <>
//                     <svg className="animate-spin -ml-1 mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     <span className="text-xs md:text-sm">Submitting...</span>
//                   </>
//                 ) : (
//                   'Submit'
//                 )}
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </button>
//           </form>
          
//           {responseMessage && (
//             <div className="mt-4 md:mt-6 p-3 md:p-4 rounded-xl bg-gray-800/70 border border-gray-600 animate-fade-in">
//               <p className="text-center text-xs md:text-sm">{responseMessage}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SignupForm;

import { useState, useEffect } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [isLoadingCount, setIsLoadingCount] = useState(true);
  const [showCountAnimation, setShowCountAnimation] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fetch subscriber count on component mount
  useEffect(() => {
    const fetchSubscriberCount = async () => {
      try {
        const isDevelopment = import.meta.env.DEV;
        const API_URL = isDevelopment ? 'http://localhost:3000' : '';
        console.log('🔍 Fetching subscriber count from:', `${API_URL}/api/subscriber-count`);
        
        const response = await fetch(`${API_URL}/api/subscriber-count`);
        const data = await response.json();
        
        console.log('📊 Subscriber count response:', data);
        
        if (response.ok) {
          setSubscriberCount(data.count);
          console.log('✅ Subscriber count set to:', data.count);
        } else {
          console.error('❌ Error response:', response.status, data);
        }
      } catch (error) {
        console.error('❌ Error fetching subscriber count:', error);
      } finally {
        setIsLoadingCount(false);
      }
    };

    fetchSubscriberCount();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage('');
    setIsSubmitting(true);

    if (!formData.name || !formData.email) {
      setResponseMessage('Name and Email are required.');
      setIsSubmitting(false);
      return;
    }

    try {
      // For production, use the same domain as the frontend (Vercel serverless function)
      // For development, use localhost:3000
      const isDevelopment = import.meta.env.DEV;
      const API_URL = isDevelopment ? 'http://localhost:3000' : '';
      const response = await fetch(`${API_URL}/api/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(data.message);
        setFormData({ name: '', email: '', mobile: '', message: '' });
        
        // Update subscriber count and trigger animation
        setSubscriberCount(prevCount => prevCount + 1);
        setShowCountAnimation(true);
        
        // Show thank you message and hide form
        setIsSubmitted(true);
        
        // Hide animation after 2 seconds
        setTimeout(() => {
          setShowCountAnimation(false);
        }, 2000);
      } else {
        setResponseMessage(data.message || 'An error occurred.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setResponseMessage('Failed to connect to the server. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup-form" className="bg-black text-white py-12 md:py-20 px-4 relative overflow-hidden">
      {/* Moodboard Background */}
      <div className="absolute inset-10 opacity-20">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 h-full">
          {/* Fashion Image 1 */}
          <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg transform rotate-2 hover:rotate-0 transition-transform duration-300"></div>
          
          {/* Fashion Image 2 */}
          <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300"></div>
          
          {/* Fashion Image 3 */}
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"></div>
          
          {/* Fashion Image 4 */}
          <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"></div>
          
          {/* Fashion Image 5 */}
          <div className="bg-gradient-to-br from-blue-400 to-teal-500 rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-300"></div>
          
          {/* Fashion Image 6 */}
          <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300"></div>
          
          {/* Fashion Image 7 */}
          <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg transform rotate-2 hover:rotate-0 transition-transform duration-300"></div>
          
          {/* Fashion Image 8 */}
          <div className="bg-gradient-to-br from-red-400 to-pink-500 rounded-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300"></div>
          
          {/* Fashion Image 9 */}
          <div className="bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"></div>
          
          {/* Fashion Image 10 */}
          <div className="bg-gradient-to-br from-yellow-400 to-green-500 rounded-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"></div>
          
          {/* Fashion Image 11 */}
          <div className="bg-gradient-to-br from-pink-400 to-red-500 rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-300"></div>
          
          {/* Fashion Image 12 */}
          <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300"></div>
        </div>
      </div>
      
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-4 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-teal-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-4 md:right-20 w-10 h-10 md:w-16 md:h-16 bg-purple-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 md:w-12 md:h-12 bg-pink-500 rounded-full animate-ping"></div>
      </div> */}
      
      <div className="container mx-auto max-w-sm md:max-w-md lg:max-w-lg relative z-10">
        <div className={`bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700/50 hover:shadow-teal-500/20 transition-all duration-700 transform ${!isSubmitted ? 'hover:scale-105' : 'scale-105'}`}>
          
          {!isSubmitted ? (
            <>
              <h2 className="text-2xl md:text-3xl font-serif mb-6 md:mb-8 text-center bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Join the waitlist
              </h2>
        
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="relative group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 md:p-4 bg-gray-800/70 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-white backdrop-blur-sm text-sm md:text-base"
                required
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            
            <div className="relative group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 md:p-4 bg-gray-800/70 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-white backdrop-blur-sm text-sm md:text-base"
                required
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            
            <div className="relative group">
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile No (optional)"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-3 md:p-4 bg-gray-800/70 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-white backdrop-blur-sm text-sm md:text-base"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            
            <div className="relative group">
              <textarea
                name="message"
                placeholder="Message (optional)"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full p-3 md:p-4 bg-gray-800/70 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-white backdrop-blur-sm resize-none text-sm md:text-base"
              ></textarea>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/50 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group text-sm md:text-base"
            >
              <span className="relative z-10 flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="text-xs md:text-sm">Submitting...</span>
                  </>
                ) : (
                  'Submit'
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>
          
          {/* Styled Subscriber Count Display */}
          <div className="mt-6 md:mt-8 text-center">
            <div className="relative inline-block">
              <div className="text-gray-400 text-sm md:text-base mb-2">
                Join <span className={`text-teal-400 font-semibold transition-all duration-300 ${showCountAnimation ? 'scale-110' : 'scale-100'}`}>
                  {isLoadingCount ? '...' : subscriberCount}
                </span> rebels on the waitlist
              </div>
            </div>
          </div>
          
          {responseMessage && (
            <div className="mt-4 md:mt-6 p-3 md:p-4 rounded-xl bg-gray-800/70 border border-gray-600 animate-fade-in">
              <p className="text-center text-xs md:text-sm">{responseMessage}</p>
            </div>
          )}
            </>
          ) : (
            /* Thank You Message - Full Form Space */
            <div className="text-center py-8 md:py-12">
              <div className="mb-6 md:mb-8">
                {/* Success Icon */}
                <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                
                {/* Thank You Text */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                  Thank You!
                </h2>
                
                <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
                  Welcome to the rebellion! 🎉
                </p>
                
                <p className="text-sm md:text-base text-gray-400 mb-8 md:mb-10">
                  You're now part of <span className="text-teal-400 font-semibold">{subscriberCount}</span> rebels on the waitlist.
                </p>
                
                {/* Decorative Elements */}
                <div className="flex justify-center items-center space-x-3">
                  <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SignupForm;