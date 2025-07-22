import { Building, Factory, Database, BarChart3 } from 'lucide-react';
import aiTechImage from '@/assets/images/ai-tech/ai_data_visualization.jpg';

const EnergyOptimization = () => {
  const applications = [
    {
      title: 'Smart Buildings',
      description: 'AI analyzes data from sensors to optimize HVAC systems, lighting, and appliances, reducing energy consumption by up to 30%.',
      icon: <Building className="h-6 w-6" />,
    },
    {
      title: 'Industrial Processes',
      description: 'AI optimizes machinery operation and predicts maintenance needs to prevent energy-intensive breakdowns in manufacturing facilities.',
      icon: <Factory className="h-6 w-6" />,
    },
    {
      title: 'Data Centers',
      description: 'AI manages workloads, server utilization, and cooling systems in data centers, which are major energy consumers.',
      icon: <Database className="h-6 w-6" />,
    },
    {
      title: 'Predictive Analytics',
      description: 'AI-driven predictive maintenance reduces downtime and energy consumption in various energy production and consumption systems.',
      icon: <BarChart3 className="h-6 w-6" />,
    },
  ];

  return (
    <section id="energy" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">AI for Energy Optimization</h2>
          <p className="text-lg max-w-3xl mx-auto text-foreground/80">
            Artificial intelligence is revolutionizing how we consume energy, leading to significant reductions in carbon emissions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Optimizing Energy Consumption</h3>
            <p className="mb-6">
              AI plays a crucial role in reducing energy waste and improving efficiency across various sectors. By analyzing vast amounts of data from sensors and systems, AI can identify patterns, predict usage, and automatically adjust settings to minimize energy consumption while maintaining optimal performance.
            </p>
            <p className="mb-6">
              These intelligent systems can learn from historical data and adapt to changing conditions, continuously improving their efficiency over time. The result is not only reduced carbon emissions but also significant cost savings for businesses and homeowners.
            </p>
            <p>
              According to recent studies, AI-powered energy management systems can reduce energy consumption by 10-30% in commercial buildings and industrial facilities, making them a powerful tool in the fight against climate change.
            </p>
          </div>

          <div>
            <img 
              src={aiTechImage} 
              alt="AI Energy Optimization Dashboard" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105"
            >
              <div className="bg-primary text-white p-3 rounded-full inline-block mb-4">
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

export default EnergyOptimization;

