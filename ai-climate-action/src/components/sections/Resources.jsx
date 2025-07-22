import { FileText, Wrench, Building2, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resources = () => {
  const resourceCategories = [
    {
      title: 'Research Papers',
      icon: <FileText className="h-6 w-6" />,
      resources: [
        {
          title: 'AI for Climate Change Mitigation',
          author: 'Climate Science Institute',
          link: '#',
        },
        {
          title: 'Machine Learning Applications in Renewable Energy Forecasting',
          author: 'Energy Research Journal',
          link: '#',
        },
        {
          title: 'Predicting Extreme Weather Events with Deep Learning',
          author: 'Weather Prediction Institute',
          link: '#',
        },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="h-6 w-6" />,
      resources: [
        {
          title: 'ClimatePredict AI',
          description: 'Open-source weather prediction model',
          link: '#',
        },
        {
          title: 'EnergyOptimize',
          description: 'AI-powered energy management system',
          link: '#',
        },
        {
          title: 'RenewableAI',
          description: 'Renewable energy forecasting platform',
          link: '#',
        },
      ],
    },
    {
      title: 'Organizations',
      icon: <Building2 className="h-6 w-6" />,
      resources: [
        {
          title: 'Climate Change AI',
          description: 'Non-profit focused on AI applications for climate',
          link: 'https://www.climatechange.ai/',
        },
        {
          title: 'AI for Earth',
          description: 'Microsoft initiative for environmental sustainability',
          link: '#',
        },
        {
          title: 'Green AI Coalition',
          description: 'Industry partnership for sustainable AI',
          link: '#',
        },
      ],
    },
    {
      title: 'Educational Materials',
      icon: <BookOpen className="h-6 w-6" />,
      resources: [
        {
          title: 'AI for Climate Action Course',
          description: 'Free online course on AI applications',
          link: '#',
        },
        {
          title: 'Climate Data Science Handbook',
          description: 'Comprehensive guide to climate data analysis',
          link: '#',
        },
        {
          title: 'Renewable Energy AI Workshop',
          description: 'Hands-on tutorials for energy optimization',
          link: '#',
        },
      ],
    },
  ];

  return (
    <section id="resources" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Resources</h2>
          <p className="text-lg max-w-3xl mx-auto text-foreground/80">
            Explore these valuable resources to learn more about AI applications in climate action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resourceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary p-4 flex items-center gap-3">
                <div className="bg-white p-2 rounded-full text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  {category.resources.map((resource, idx) => (
                    <li key={idx} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-lg">{resource.title}</h4>
                      {resource.author && (
                        <p className="text-sm text-foreground/70 mb-1">By {resource.author}</p>
                      )}
                      {resource.description && (
                        <p className="text-sm text-foreground/70 mb-2">{resource.description}</p>
                      )}
                      <a 
                        href={resource.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 text-sm flex items-center gap-1"
                      >
                        Access Resource <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-6 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  View All {category.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;

