import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, HeartHandshake } from 'lucide-react';
export default function Services() {
  const services = [
    {
      icon: Award,
      title: 'Qualidade Incomparável',
      description:
        'Utilizamos apenas materiais de primeira linha e as melhores práticas de engenharia para garantir durabilidade, segurança e um acabamento impecável em cada detalhe.',
    },
    {
      icon: Zap,
      title: 'Inovação Contínua',
      description:
        'Estamos sempre à frente, incorporando as últimas tecnologias e soluções sustentáveis para criar projetos mais eficientes, econômicos e com menor impacto ambiental.',
    },
    {
      icon: HeartHandshake,
      title: 'Compromisso Total',
      description:
        'Nosso compromisso vai além do contrato. Construímos relacionamentos de confiança, cumprindo prazos rigorosamente e oferecendo suporte completo do início ao fim da obra.',
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 },
    },
  };
  return (
    <section id="services" className="section-padding bg-background">
      {' '}
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {' '}
        <div className="text-center mb-16">
          {' '}
          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl font-extrabold text-dark mb-4"
          >
            {' '}
            Construindo o futuro com{' '}
            <span className="text-gradient">integridade e inovação</span>{' '}
          </motion.h2>{' '}
          <motion.p
            variants={cardVariants}
            className="max-w-3xl mx-auto text-lg text-dark/70"
          >
            {' '}
            Nossos valores fundamentais são os pilares que sustentam cada
            projeto que realizamos. Eles guiam nossas ações e garantem a
            excelência que nos define.{' '}
          </motion.p>{' '}
        </div>{' '}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {' '}
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-light p-8 rounded-2xl shadow-lg hover:shadow-primary/30 hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {' '}
              <div className="flex-grow">
                {' '}
                <div className="bg-primary text-light rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {' '}
                  <service.icon size={32} />{' '}
                </div>{' '}
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {service.title}
                </h3>{' '}
                <p className="text-dark/70 leading-relaxed">
                  {service.description}
                </p>{' '}
              </div>{' '}
              <div className="mt-auto pt-6">
                {' '}
                <a
                  href="#contact"
                  className="font-bold text-primary hover:text-secondary transition-colors duration-300"
                >
                  {' '}
                  Saber mais &rarr;{' '}
                </a>{' '}
              </div>{' '}
            </motion.div>
          ))}{' '}
        </div>{' '}
      </motion.div>{' '}
    </section>
  );
}
