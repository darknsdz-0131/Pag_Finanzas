'use client';

import { footerLinks, socialIcons } from '@/data/data';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className='bg-foreground text-background py-16 md:py-20'>
      <div className='container'>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='lg:col-span-2'
          >
            <h3 className='text-2xl font-bold mb-4'>
              <span className='text-primary'>FinPro</span>
            </h3>
            <p className='text-background/70 max-w-sm'>
              {t('footer.description')}
            </p>
            <div className='flex gap-4 mt-6'>
              {(['youtube', 'linkedin', 'instagram', 'facebook'] as const).map(social => {
                const Icon = socialIcons[social];
                return (
                  <motion.a
                    key={social}
                    href='#'
                    whileHover={{ scale: 1.1 }}
                    className='size-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-foreground transition-colors'
                  >
                    <span className='sr-only'>{social}</span>
                    <Icon className='size-4' />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className='font-semibold mb-4'>{t('footer.product')}</h4>
            <ul className='space-y-3'>
              {footerLinks.product.map((_, index) => (
                <li key={index}>
                  <a href='#' className='text-background/70 hover:text-primary transition-colors'>
                    {t(`footer.product.${index}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className='font-semibold mb-4'>{t('footer.company')}</h4>
            <ul className='space-y-3'>
              {footerLinks.company.map((_, index) => (
                <li key={index}>
                  <a href='#' className='text-background/70 hover:text-primary transition-colors'>
                    {t(`footer.company.${index}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className='font-semibold mb-4'>{t('footer.legal')}</h4>
            <ul className='space-y-3'>
              {footerLinks.legal.map((_, index) => (
                <li key={index}>
                  <a href='#' className='text-background/70 hover:text-primary transition-colors'>
                    {t(`footer.legal.${index}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='pt-8 border-t border-background/10 text-center text-background/50 text-sm'
        >
          &copy; {new Date().getFullYear()} FinPro. {t('footer.rights')}
        </motion.div>
      </div>
    </footer>
  );
};