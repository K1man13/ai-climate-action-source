import { Sun, Wind, Battery, BarChart4 } from 'lucide-react';
import renewableEnergyImage from '@/assets/images/renewable-energy/solar_wind_farm.jpg';
import smartGridImage from '@/assets/images/smart-grid/smart_grid_overview.jpg';

const RenewableEnergy = () => {
  const applications = [
    {
      title: 'Solar Forecasting',
      description: 'AI predicts solar energy production by analyzing weather patterns, cloud cover, and historical performance data.',
      icon: <Sun className="h-6 w-6" />,
    },
    {
      title: 'Wind Power Optimization',
      description: 'AI adjusts wind turbine parameters in real-time based on wind conditions to maximize energy generation.',
      icon: <Wind className="h-6 w-6" />,
    },
    {
      title: 'Energy Storage Management',
      description: 'AI determines optimal charging and discharging cycles for battery systems to balance supply and demand.',
      icon: <Battery className="h-6 w-6" />,
    },
    {
      title: 'Grid Integration',
      description: 'AI balances the intermittent nature of renewable sources with grid stability requirements.',
      icon: <BarChart4 className="h-6 w-6" />,
    },
  ];

  return (
    <section id="renewable" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">AI for Renewable Energy Management</h2>
          <p className="text-lg max-w-3xl mx-auto text-foreground/80">
            Artificial intelligence is accelerating the transition to renewable energy by making clean power more reliable, efficient, and accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Optimizing Renewable Energy Systems</h3>
            <p className="mb-6">
              One of the biggest challenges with renewable energy sources like solar and wind is their intermittent nature. AI is helping to overcome this challenge by predicting energy production, optimizing storage, and balancing supply with demand.
            </p>
            <p className="mb-6">
              Machine learning algorithms can analyze weather forecasts, historical generation data, and consumption patterns to predict renewable energy output with unprecedented accuracy. This allows grid operators to better plan for fluctuations and ensure reliable power delivery.
            </p>
            <p>
              Studies show that AI-optimized renewable energy systems can increase energy yield by 10-20% and reduce integration costs by up to 30%, making clean energy more competitive with fossil fuels.
            </p>
          </div>

          <div>
            <img 
              src={renewableEnergyImage} 
              alt="Solar and Wind Farm" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src={smartGridImage} 
              alt="Smart Grid System" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-6 text-primary">Smart Grid Management</h3>
            <p className="mb-6">
              AI is transforming traditional power grids into smart grids that can efficiently integrate renewable energy sources. These intelligent systems use machine learning to monitor and control the flow of electricity, optimizing distribution and reducing waste.
            </p>
            <p className="mb-6">
              By analyzing data from thousands of sensors across the grid, AI can identify patterns, predict demand fluctuations, and automatically adjust energy flow to maintain stability. This enables higher penetration of renewable energy without compromising reliability.
            </p>
            <p>
              Advanced AI algorithms can also optimize energy trading strategies by predicting market prices and demand, facilitating the efficient distribution of renewable energy and maximizing economic benefits for producers and consumers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="bg-accent/10 rounded-lg shadow-lg p-6 transition-transform hover:scale-105"
            >
              <div className="bg-accent text-accent-foreground p-3 rounded-full inline-block mb-4">
                {app.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3">{app.title}</h4>
              <p className="text-foreground/80">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RenewableEnergy;

