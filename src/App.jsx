import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';

function App() {
  const appStyle = {
    backgroundImage: `url('/images/bg_img (1).png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  return (
    <div style={appStyle}>
      <HeroSection />
      <StorySection />
      <SignupForm />
      <Footer />
    </div>
  );
}

export default App;