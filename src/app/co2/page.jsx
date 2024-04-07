"use client"
import { useEffect, useState } from 'react';
import Graphco2 from './graphco2';
import Real from './real';

function Page() {
  const [zoomedCard, setZoomedCard] = useState(null);

  const handleCardClick = (card) => {
    setZoomedCard(card);
  };

  const handleCloseZoomedCard = () => {
    setZoomedCard(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.zoomed-card')) {
        handleCloseZoomedCard();
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div><Graphco2/></div>
      <div><Real/></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[
            {image: 'https://www.hindustantimes.com/ht-img/img/2024/01/26/550x309/a8887e06-2154-11ec-bc30-10e4c85a206c_1632941002194_1706258624258.jpg', title: "Trillions Needed: Trees Can't Fix Emissions Alone", description: "Each year, a staggering 36.8 billion metric tons of CO2 are released into the atmosphere, primarily from burning fossil fuels. While planting trees is a key weapon in the fight against climate change, it's important to understand the challenge. There's no one-to-one conversion between CO2 and trees due to variations in species, age, and environment. However, estimates suggest the number of trees required to absorb this amount of CO2 would be in the trillions, highlighting the need for both aggressive tree planting and reduced CO2 emissions."},
            {image: 'https://i.unu.edu/media/ourworld.unu.edu-en/article/21453/sea-level-rise-is-inevitable-but-we-can-still-prevent-catastrophe-for-coastal-regions.jpg', title: 'Rising seas, fueled by CO2, threaten to swallow millions in coastal cities.', description: "Rising CO2 traps heat, warming the oceans which then expand and melt land-based ice. This double whammy threatens coastal regions with rising sea levels. Depending on our success in curbing emissions, estimates suggest sea levels could rise by 0.3 to 2 meters by 2100, potentially submerging significant areas of low-lying land and displacing millions living in vulnerable coastal cities. The exact number of cities is uncertain, but some studies suggest hundreds of cities around the world could be partially or entirely inundated by rising seas by the end of the century."},  
            {image: 'https://sb.ecobnb.net/app/uploads/sites/3/2022/04/copertina-1.jpg', title: 'CO2 Trap: Plants Feast, Animals Starve', description: "CO2 emissions are a double-edged sword for nature. Plants initially enjoy a growth boost, but this buffet comes with a hidden cost: their food quality suffers. This disrupts the food chain for animals who rely on them. Meanwhile, oceans become acidic as they absorb CO2, dissolving the shells of coral and other creatures. Rising seas, fueled by a warming planet, threaten coastal habitats, disrupting breeding grounds and migration routes for wildlife. Studies suggest extinction rates could skyrocket 20-50 times by 2100 if we don't cut CO2. The future of plants, animals, and the entire web of life hinges on our ability to curb CO2 emissions."}, 
            {image: 'https://varmentguard.com/uploads/permanent/1d3825ccca58100c20f547962159623d', title: 'CO2 heat: Up go temps, down goes nature.', description: "Earth's CO2 blanket traps heat, disrupting ecosystems and pushing temperatures up. Studies warn of extinction rates spiking 20-50 times by 2050 if emissions continue. Countless species already face a precarious fight for survival due to scorching heat, melting glaciers, and habitat loss. While pinpointing exact extinction numbers linked solely to CO2 is difficult, the decline in biodiversity is a troubling sign. Urgent action to curb CO2 emissions is critical to prevent a mass extinction event."}].map((card, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-gray-100 cursor-pointer" onClick={() => handleCardClick(card)}>
              <img src={card.image} alt={card.title} className="w-full h-auto" />
              <div className="px-4 py-2">
                <h2 className="text-xl font-bold text-gray-800">{card.title}</h2>
                <p className="text-gray-600">{card.description.substring(0, 50)}{!zoomedCard ? '... (click for more)' : ''}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {zoomedCard && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex justify-center items-center">
          <div className="max-w-4xl zoomed-card">
            <div className="relative">
              <button onClick={handleCloseZoomedCard} className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={zoomedCard.image} alt={zoomedCard.title} className="w-full h-96 object-cover" />
                <div className="px-6 py-4">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{zoomedCard.title}</h2>
                  <p className="text-gray-700">{zoomedCard.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;