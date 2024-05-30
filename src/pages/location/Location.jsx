import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../../components/location/slideshow/Slideshow';
import LocationInfo from '../../components/location/location-info/LocationInfo';
import Tags from '../../components/location/tags/Tags';
import Host from '../../components/location/host/Host';
import Rating from '../../components/location/rating/Rating';
import CollapseItem from '../../components/collapseItem/CollapseItem';
import locationsList from '../../datas/logements.json';

function Location() {
  const { id } = useParams();
  const location = locationsList.find(location => location.id === id);

  if (!location) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div>
      <div>
        <Slideshow
          pictures={location.pictures}
        />
        
        <LocationInfo
          title={location.title}
          location={location.location}
        />

        <Tags
          tags={location.tags}
        />
      </div>

      <div>
        <Host       
          hostName={location.host.name}
          hostPicture={location.host.picture}
        />

        <Rating
          rating={location.rating}
        />
      </div>

      <div>
        <CollapseItem
          title="Description"
          description={location.description}
        />
        <CollapseItem
          title="Équipements"
          equipments={location.equipments}
        />
      </div>
    </div>
  );
};

export default Location;
