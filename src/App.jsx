import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image Container */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/images/bg_img (1).png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <StorySection />
        <SignupForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;