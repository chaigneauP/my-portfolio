import React from "react";
import "./backgrounds.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
	{
		avatar: AVTR1,
		name: "Bac professionnel Systèmes Electroniques et Numériques",
		location: "Lycée Sainte Matie du Port - Les Sables d'Olonne - 85",
		dates: '2014 - 2017',
		review:
			"Début de mon parcours dans le domaine de l'informatique, avec les conseils de mon frère je me suis lancé dans un bac professionnel SEN option Télécomunication et Réseaux. " +
			"A l'époque je ne savais pas vraiment quoi faire et l'informatique était un domaine qui m'intriguait. J'ai commencé par apprendre comment tournais le monde autour du réseau et " +
			"j'ai pu mettre un premier pas dans le milieu professionnel grâce à divers stages.",
	},
  {
		avatar: AVTR2,
		name: "BTS Services Informatiques aux Organisations",
		location: "Lycée Notre Dame du Roc - La roche sur yon - 85",
		date:'2017 - 2019',
		review:
		"Bac en poche je décide d'arrêter le réseau pour me diriger vers le développement d'applications. J'ai donc intégré un BTS SIO qui à été pour moi le lancement dans ma carrière de développeur." +
		"J'ai eu l'occasion de travailler pour la première fois en stage au poste de développeur en expérimentant startup et industrie.",	
	},
  {
		avatar: AVTR3,
		name: "Bac+3 DEVOPS : Concepteur Développeur d'Applications ",
		location: "Ecole d'ingénierie informatique: EPSI - Nantes - 44",
		dates: "2019 - 2020",
		review: 
		"Avec mes précédentes expériences j'ai pris la décision de continuer les études en bac+3 pour continuer de découvrir les métiers du digital et évoluer dans ce milieu. " +
		"J'ai rejoins l'EPSI avec une alternances chez VISIATIV en tant que développeur backend JAVA. Durant cette année j'ai pu avoir une vision plus large du métier de développeur ainsi que des autres corps de métier qui s'y raccrochaient. " +
		"A la fin de mon contrat d'alternance, diplôme en main, j'ai décidé de ne pas rester dans mon entreprise et de partir à la découverte d'une nouvelle expérience professionnelle. "
	},
  {
		avatar: AVTR4,
		name: "Bac5 Expert en Informatique et système  d’information ",
		location: "Ecole d'ingénierie informatique: EPSI - Nantes - 44",
		dates: "2020 - 2022",
		review:
			"Arrive enfin la dernière étape de mon parcour, le master validé en 2 ans toujours à l'EPSI et en alternance chezn ASI. Ces deux dernières années ont été pour moi une vraie épreuve car le master n'avais plus pour objectif de nous former sur l'aspect technique mais plutot de nous donner " +
			"une vision bien plus haute d'un projet informatique. Gestion de projet, analyse de data, gestion d'équipes, architecture de système d'information etc.. Tout ces sujets nouveaux pour moi qui m'ont finalement aidé à grandir et avoir une vision différente des métiers du digital. " +
			"Avec mon alternance en tant de développeur chez ASI j'ai pu continuer d'évoluer sur le plan technique et m'épanouir dans ce métier. Aujourd'hui c'est avec mon master que je débute ma carrière de dévelopeur, toujours chez ASI."
	},
];

const Backgrounds = () => {
	return (
		<section id="backgrounds">
			<h5>Mon parcours</h5>
			<h2>Etudes et expériences professionnelles</h2>

			<Swiper className="container backgrounds__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>

				{
          data.map(({avatar, name, location, date, review}, index) => {
            return (
            <SwiperSlide key={index} className="background">
              <div className="background__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="background__name">{name}</h5>
			  <h6 className="background_location_date">{location}{date}</h6>
              <small className="background__review">
                {review}
              </small>
				    </SwiperSlide>
            )
          })
        }
			</Swiper>
		</section>
	);
};

export default Backgrounds;
