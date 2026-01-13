export enum Language {
  ENGLISH = 'en',
  SPANISH = 'es',
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ContentText {
  heroTitle: string;
  heroSubtitle: string;
  ctaButton: string;
  aboutTitle: string;
  aboutText: string;
  detailsTitle: string;
  detailsWhen: string;
  detailsWhere: string;
  detailsWhen2: string;
  detailsWhere2: string;
  detailsWhen3: string;
  detailsWhere3: string;
  detailsWhenTxt: string;
  detailsWhereTxt: string;
  aiTitle: string;
  aiDescription: string;
  aiButton: string;
  footerRights: string;
  navHome: string;
  navAbout: string;
  navEvents: string;
  navContact: string;
}

export interface IcebreakerResponse {
  english: string;
  spanish: string;
}
