import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/carousel/Carousel';
// import LocationInfo from '../../components/location-info/LocationInfo'

import locationsList from '../../datas/logements.json';

const Location = () => {
  const { id } = useParams();
  const location = locationsList.find(location => location.id === id);

  if (!location) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div>
      <Carousel
        pictures={location.pictures}
      />
      
      {/* <LocationInfo
        title={location.title}
        description={location.description}
        // Ajoutez d'autres props nécessaires
      /> */}
    </div>
  );
};

export default Location;
