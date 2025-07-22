import { Thermometer, CloudRain, AlertTriangle } from 'lucide-react';
import sdgImage from '@/assets/images/climate-impacts/climate_risks_diagram.png';

const AboutSDG = () => {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">About SDG 13: Climate Action</h2>
          <p className="text-lg max-w-3xl mx-auto text-foreground/80">
            Taking urgent action to combat climate change and its impacts through global cooperation and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={sdgImage} 
              alt="SDG 13 Climate Action" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">The Climate Crisis</h3>
            <p className="mb-6">
              Human-induced climate change has reached alarming levels, with some impacts already irreversible for centuries. Global temperatures have broken records and temporarily exceeded the 1.5°C threshold, highlighting the urgent need to curb greenhouse gas emissions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-full">
                  <Thermometer size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Rising Temperatures</h4>
                  <p>2024 marked the first year when global temperatures surpassed the 1.5°C threshold, reaching 1.55°C above the pre-industrial level – making it the hottest year in 175 years.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-full">
                  <CloudRain size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Extreme Weather Events</h4>
                  <p>Tropical cyclones, floods, and droughts have led to the highest number of new displacements in 16 years, worsening food crises and bringing massive economic losses and social instability.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-full">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Urgent Action Needed</h4>
                  <p>With bold action, limiting long-term global warming to 1.5°C is still possible. Every fraction of a degree matters in reducing risks, lowering costs, and preventing catastrophic damage to people and the planet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSDG;

