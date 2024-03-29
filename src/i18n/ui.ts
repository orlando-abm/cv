import resumenEs from 'resume-es.json'
import resumenEn from 'resume-en.json'
export const showDefaultLang = false;

export const languages = {
    en: 'English',
    es: 'Español',
  };

export const defaultLang = 'es';

export const resume = {
    es: resumenEs,
    en: resumenEn
}

export const ui = {
    en: {
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.education': 'Education',
      'nav.skills': 'Skills',
    },
    es: {
      'nav.about': 'Sobre mí',
      'nav.experience': 'Experiencia Laboral',
      'nav.education': 'Educación',
      'nav.skills': 'Habilidades',
    },
  } as const;
