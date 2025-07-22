import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import the custom icons
import energyOptimizationIcon from '@/assets/images/icons/energy_optimization_icon.png';
import weatherPredictionIcon from '@/assets/images/icons/weather_prediction_icon.png';
import renewableEnergyIcon from '@/assets/images/icons/renewable_energy_icon.png';

const AIApplications = () => {
  const applications = [
    {
      id: 'energy',
      title: 'Energy Optimization',
      description: 'AI algorithms can analyze data from sensors to optimize heating, ventilation, air conditioning systems, lighting, and other energy-consuming appliances, leading to significant energy savings and reduced carbon footprints.',
      icon: energyOptimizationIcon,
      color: 'bg-primary',
    },
    {
      id: 'weather',
      title: 'Weather Prediction',
      description: 'AI models can analyze historical weather data, satellite imagery, and other environmental factors to provide more accurate and timely predictions of extreme weather events like hurricanes, floods, droughts, and wildfires.',
      icon: weatherPredictionIcon,
      color: 'bg-secondary',
    },
    {
      id: 'renewable',
      title: 'Renewable Energy Management',
      description: 'AI algorithms can optimize the operation of smart grids by predicting energy demand fluctuations, managing energy storage, and integrating intermittent renewable sources like solar and wind power more effectively.',
      icon: renewableEnergyIcon,
      color: 'bg-accent',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">AI Applications for Climate Action</h2>
          <p className="text-lg max-w-3xl mx-auto text-foreground/80">
            Artificial intelligence offers powerful tools to address climate change through these key applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {applications.map((app) => (
            <div 
              key={app.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className={`${app.color} p-6 flex justify-center`}>
                <img 
                  src={app.icon} 
                  alt={app.title} 
                  className="h-24 w-24 object-contain"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">{app.title}</h3>
                <p className="mb-6 text-foreground/80">{app.description}</p>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => document.getElementById(app.id).scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIApplications;

