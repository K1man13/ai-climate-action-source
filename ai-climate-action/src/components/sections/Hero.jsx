import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/images/climate-impacts/climate_impacts_overview.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center bg-gradient-to-r from-primary/90 to-primary/70 text-white overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Climate Change Impact" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            AI for Climate Action
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 animate-fade-in animation-delay-200">
            Leveraging artificial intelligence to combat climate change and achieve the goals of SDG 13 through innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

