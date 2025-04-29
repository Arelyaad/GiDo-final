import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import IconCarousel from './ui/IconCarousel';
import iconFeatures from '../data/iconFeatures';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  return (
    <section 
      id="hero" 
      ref={ref}
      className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Parallax */}
      <motion.div 
        className="absolute inset-0 bg-black/50 z-0"
        style={{ y, opacity }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.pexels.com/photos/6044273/pexels-photo-6044273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` 
          }}
        />
      </motion.div>
      
      {/* Content */}
      <div className="container relative z-10 text-center px-4 py-16">
        <IconCarousel icons={iconFeatures} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-white"
        >
          <h1 className="text-shadow-lg">Arquitectura en Plata</h1>
          <p className="text-lg md:text-xl mb-6 text-shadow">
            Imagina un plano en blanco que cobra vida al tacto de un artesano: la plata se curva, se pliega y se eleva en cada trazo hasta convertirse en joyas que cuentan tu propia historia.
          </p>
          <p className="text-lg md:text-xl mb-8 text-shadow">
            En Gi.Do llevamos dos décadas uniendo la precisión de la arquitectura con la delicadeza de la joyería, para que cada pieza sea un pequeño refugio de arte y emoción que habita tu piel.
          </p>
          <a href="#colecciones" className="btn btn-primary">
            Explora Nuestras Colecciones
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;