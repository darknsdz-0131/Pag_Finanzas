'use client';

import { partners } from '@/data/data';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export const PartnertsSection = () => {
  const { t } = useLanguage();

  return (
    <section className='py-16 bg-muted/50'>
      <div className='container'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // 👈 Fix: era animate, debe ser whileInView
          viewport={{ once: true }}
          className='text-center text-sm text-muted-foreground mb-10'
        >
          {t('partners.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // 👈 Fix: era animate
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className='flex flex-wrap justify-center items-center gap-8 md:gap-16'
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} // 👈 Fix: era animate
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className='text-2xl md:text-3xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors'
            >
              {partner.logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};