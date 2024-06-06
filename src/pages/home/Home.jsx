import React from 'react';
import Banner from '../../components/banner/Banner';
import bannerHome from '../../assets/images/banner-home.png';
import { Link } from 'react-router-dom';
import LocationCard from '../../components/location-card/LocationCard';
import locationsList from '../../datas/logements.json';

function Home() {
    return (
        <>
            <Banner 
            imageUrl={bannerHome}
            altText="Paysage de bord de mer"
            bannerText="Chez vous, partout et ailleurs"
            />
            <div className="location-list">
                {locationsList.map(location => (
                    <Link to={`/location/${location.id}`} key={location.id}>
                        <LocationCard 
                        title={location.title}
                        cover={location.cover}
                        />
                   </Link> 
                ))}
            </div>
        </>
    )
};

export default Home;