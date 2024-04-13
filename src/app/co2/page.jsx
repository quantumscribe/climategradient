"use client"
import { useEffect, useState } from 'react';
import Graphco2 from './graphco2';
import Real from './real';
import Image from 'next/image';

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
  <div className="bg-cover bg-center w-full h-screen relative overflow-hidden">
    <Image src="/CO2 IMAGE.jpg" fill />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="text-black text-7xl font-bold text-center font-sans serif text-white-400 transition duration-500 ease-in-out hover:transform hover:-translate-y-12">
          Carbon Dioxide
      </div>

    </div> 
   </div>
   <div className='mt-10 ml-5 mr-5' >
    < Graphco2/>
   </div>
   <div className='mt-10 justify-center'>
        <Real/>
      </div> 
   <div>
    <div></div>
    
   <div className='p-5 rounded-md font-calibri body pl-5 mx-25 mt-20'>
     
 <p className='text-calibiri text-justify font-bold bg-clip-text text-transparent bg-gradient-to-b from-yellow-700 to-yellow-100'>
   Each year, human activities release more carbon dioxide into the atmosphere than natural processes can remove, causing the amount of carbon dioxide in the atmosphere to increase.
   The global average carbon dioxide set a new record high in 2022: 417.06 parts per million.
   Atmospheric carbon dioxide is now 50 percent higher than it was before the Industrial Revolution.
   The annual rate of increase in atmospheric carbon dioxide over the past 60 years is about 100 times faster than previous natural increases, such as those that occurred at the end of the last ice age 11,000-17,000 years ago.  
   The ocean has absorbed enough carbon dioxide to lower its pH by 0.1 units, a 30% increase in acidity.The concentration of CO2 in the atmosphere has been steadily increasing, with measurements showing a significant rise since the Industrial Revolution. In 2022, the global average concentration of CO2 reached a new record high of 417.06 parts per million. This level is approximately 50 percent higher than pre-industrial levels, representing a stark shift driven by human activities.
    The rapid increase in atmospheric CO2 has profound implications for Earth's climate system. CO2 is a potent greenhouse gas, trapping heat in the atmosphere and contributing to global warming and climate change. This warming leads to a variety of impacts, including rising sea levels, more frequent and intense extreme weather events, altered precipitation patterns, and disruptions to ecosystems and biodiversity.
    Efforts to mitigate the impacts of rising CO2 levels include transitioning to renewable energy sources, improving energy efficiency, reforestation and afforestation initiatives, and implementing carbon capture and storage technologies.
   </p>
   </div>
    </div>
   <div className='mt-20'>
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
</div>



  )
}


export default Page;