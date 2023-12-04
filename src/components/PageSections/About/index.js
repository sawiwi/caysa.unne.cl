import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
import MeetingForm from '../../../components/Form/MeetingForm';
import { imgAboutMe } from '../../../data/userData';


// import ContactUs from './components/ContactUs';
// import Alliances from './components/Alliances';

const AboutComponent = () => {
  return (
    <Section>
    {/* <Fade delay={300} direction="right"> */}
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3  gap-1">
      <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col justify-center mx-2 xl:ml-6">
        <h2 className="text-6xl xl:text-5xl text-center  text-primary font-bold">
            Sobre mí
          </h2>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
        <div className="col-span-2 xl:col-span-1 flex flex-col ">
          { imgAboutMe.length > 0 ? imgAboutMe.map((item) =>
            <div key={item.id}>
                <img
                src={item.img}
                alt="about-img"
                className="rounded-full  h-[200px] w-[200px] mt-10 mx-14 md:mx-2 xl:w-[410px] xl:h-[400px] xl:mt-20 xl:mx-2 object-cover"
              />
            </div>

          ):
            <img
            src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1691681682/Projects/unne/img/experienciaUsuarios/mujer.png"
            alt="about-img"
            className="rounded-full  h-[200px] w-[200px] mt-10 mx-14 md:mx-2 xl:w-[400px] xl:h-[400px] xl:mt-20 xl:mx-2"
          />     
          }

        </div>
        <div className="col-span-2 xl:col-span-1">
          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1  xl:text-left">
            Soy Sandra Vera, Corredora de Propiedades con una trayectoria de 6 años en el rubro. Mi formación como Administradora de Empresas, respaldada por 27 años de experiencia en el sector bancario, específicamente en instituciones de renombre como Banco Chile y Scotiabank, me confiere una base sólida para ofrecer un servicio de calidad a nuestros clientes.
 
            <br />
            <br />
            Esta rica experiencia en el ámbito financiero me permite aplicar conocimientos especializados y habilidades adquiridas a lo largo de los años, garantizando así un servicio óptimo en el mercado inmobiliario. Mi misión es asesorar, orientar y brindar apoyo integral en todas las facetas del ámbito inmobiliario, asegurando la satisfacción y el éxito de nuestros clientes en cada transacción.
            <br />
            <br />
            {/* Unne es un acelerador inmobiliario que ofrece una amplia gama de productos y servicios innovadores, esto junto con una gestión comercial proactiva, impulsarán los resultados de nuestros clientes.
            <br />
            <br /> */}
          </p>

          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 xl:text-left">
            Sandra Vera.
          </p>
          <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-1 xl:text-left">
            Corredora de propiedades.
          </p>
        </div>
    
        </div>
       
  
      </div>
      <div className="col-span-1 md:col-span-1 xl:col-span-1 flex flex-col justify-center mx-2 xl:ml-24">
      <MeetingForm 
            title="Contacto corredor"
            subtitle="Enviar mensaje"
          />
      </div>

      {/* 
        <div className="pt-10">
          <h2 className="text-2xl xl:text-4xl font-bold text-black text-center sm:text-start">
            “Un largo camino
            <br />
            se inicia con un solo paso...”
          </h2>
        </div> */}
    </div>
    {/* </Fade>  */}
  </Section>
    // <Fragment>
    //   <About />
    // </Fragment>
  );
};

export default AboutComponent;
