import React from 'react';
import Banner from '../../components/banner/Banner';
import bannerAbout from '../../assets/images/banner-about.png';
import CollapseItem from '../../components/collapseItem/CollapseItem';
import aboutData from '../../datas/aboutData.json';

const About = () => {
  return (
    <>
      <Banner
        isAboutPage
        imageUrl={bannerAbout}
        altText="Paysage de montagnes"
        bannerText=""
      />

      <div className="collapse-about">
        {aboutData.map((item, index) => (
          <CollapseItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};

export default About;
