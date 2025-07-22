import { CloudLightning, CloudRain, Waves, Wind } from 'lucide-react';
import extremeWeatherImage from '@/assets/images/extreme-weather/extreme_weather_collage.jpg';

const WeatherPrediction = () => {
  const applications = [
    {
      title: 'Hurricane Tracking',
      description: 'AI models can predict hurricane paths with greater accuracy and longer lead times, allowing for better evacuation planning.',
      icon: <Wind className="h-6 w-6" />,
    },
    {
      title: 'Flood Forecasting',
      description: 'AI systems analyze rainfall patterns, river levels, and terrain data to predict flooding events days in advance.',
      icon: <Waves className="h-6 w-6" />,
    },
    {
      title: 'Drought Prediction',
      description: 'AI can identify early warning signs of drought conditions by analyzing soil moisture, temperature trends, and precipitation patterns.',
      icon: <CloudRain className="h-6 w-6" />,
    },
    {
      title: 'Severe Storm Alerts',
      description: 'AI enhances the accuracy of severe storm warnings, reducing false alarms and increasing lead time for preparation.',
      icon: <CloudLightning className="h-6 w-6" />,
    },
  ];

  return (
    <section id="weather" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">AI for Weather Prediction</h2>
          <p className="text-lg max-w-3xl mx-auto text-foreground/80">
            Artificial intelligence is transforming how we predict and respond to extreme weather events, saving lives and reducing economic losses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src={extremeWeatherImage} 
              alt="Extreme Weather Events" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-6 text-primary">Predicting Extreme Weather Events</h3>
            <p className="mb-6">
              AI's ability to process and analyze vast datasets makes it invaluable for improving weather forecasting and predicting extreme events. Traditional weather models, while useful, often struggle with the complexity and chaotic nature of extreme weather phenomena.
            </p>
            <p className="mb-6">
              By leveraging machine learning algorithms, meteorologists can now analyze historical weather data, satellite imagery, ocean temperatures, and atmospheric conditions to identify patterns that humans might miss. This leads to more accurate predictions with longer lead times.
            </p>
            <p>
              Recent studies show that AI-enhanced weather forecasting can predict extreme events up to 10 days in advance with accuracy levels previously only possible for 3-day forecasts. This additional warning time is crucial for emergency preparedness and evacuation planning.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="bg-secondary/10 rounded-lg shadow-lg p-6 transition-transform hover:scale-105"
            >
              <div className="bg-secondary text-secondary-foreground p-3 rounded-full inline-block mb-4">
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

export default WeatherPrediction;

