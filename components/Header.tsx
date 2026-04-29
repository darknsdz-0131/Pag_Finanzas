'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/data/data';
import { Button } from './ui/button';
import { Globe, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const [langOpen, setLangOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();

  const translateNavItems = navItems.map(item => ({
    ...item,
    label: t(item.key),
  }));

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border'
      >
        <div className='container'>
          <div className='flex items-center justify-between h-16 md:h-20'>
            {/* LOGO */}
            <motion.a
              href=''
              className='text-3xl font-bold text-foreground font-sora'
            >
              <span className='text-gradient'>FinPro</span>
            </motion.a>

            {/* Nav Desktop */}
            <nav className='hidden lg:flex items-center gap-8'>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group'
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                  <span className='absolute -bottom-1 left-0 w-0 h-0 5 bg-primary transition-all duration-300 group-hover:w-full' />
                </motion.a>
              ))}
            </nav>

            <div className='flex items-center gap-3'>
              {/* Toggle de Tema */}
              <Button
                variant='ghost'
                size={'sm'}
                className='flex items-center gap-2 text-muted-foreground hover:text-foreground'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className='size-4' />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className='size-4' />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>

              {/* Selector de Idiomas */}
              <div className='relative'>
                <Button
                  variant='ghost'
                  size={'sm'}
                  className='flex items-center gap-2 text-muted-foreground hover:text-foreground'
                  onClick={() => setLangOpen(!langOpen)}
                >
                  <Globe className='size-4' />
                  <span>{language}</span>
                </Button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className='absolute right-0 mt-2 py-2 w-32 bg-card rounded-lg shadow-lg border border-border overflow-hidden'
                    >
                      <button
                        onClick={() => { setLanguage('es'); setLangOpen(false); }}
                        className={cn(
                          'w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors',
                          language === 'es' ? 'text-primary font-medium' : 'text-foreground'
                        )}
                      >
                        🇪🇸 Español
                      </button>
                      <button
                        onClick={() => { setLanguage('en'); setLangOpen(false); }}
                        className={cn(
                          'w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors',
                          language === 'en' ? 'text-primary font-medium' : 'text-foreground'
                        )}
                      >
                        🇺🇸 English
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Download Button */}
              <Button variant={'default'} className='hidden lg:flex'>
                {t('header.download')}
              </Button>

              <Button
                variant={'ghost'}
                size={'icon'}
                className='lg:hidden'
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className='size-5' />
                ) : (
                  <Menu className='size-5' />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='lg:hidden bg-card border-t border-border overflow-hidden'
            >
              <nav className='container px-4 py-4 flex flex-col gap-2'>
                {navItems.map((item, index) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className='py-3 px-4 text-foreground hover:bg-muted rounded-lg transition-colors'
                  >
                    {item.label}
                  </a>
                ))}
                <Button variant={'default'} className='mt-2 w-full'>
                  Descargar
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden'
            style={{ top: '64px' }}
          />
        )}
      </AnimatePresence>
    </>
  );
};
