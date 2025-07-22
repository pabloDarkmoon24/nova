import { InteligenciaAnalisis } from '../sections/analisisp1';
import { Bot } from '../sections/bot';
import { Comunicacion } from '../sections/comunicacion';
import { DatosImpacto } from '../sections/datosImpacto';
import { Footer } from '../components/footer';
import { HacerConNova } from '../sections/hacerConNova';
import { Hero } from '../sections/hero';
import { ProblemasSector } from '../sections/probelmasSector';

export function Home() {
  return (
    <>
      <Hero />
      <ProblemasSector/>
      <HacerConNova/>
      <InteligenciaAnalisis/>
      <DatosImpacto/>
      <Bot/>
      <Comunicacion/>
      <Footer/>
      

    </>
  );
}
