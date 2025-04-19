export enum PageLink {
  Home = "home",
  AboutUs = "about-us",
  OurServices = "our-services",
  WorkPipeline = "work-pipeline",
  Cases = "cases",
  Contacts = "contacts",
}

export type OrderFormData = {
  name: string;
  email: string;
  telegram?: string;
  whatsapp?: string;
};
