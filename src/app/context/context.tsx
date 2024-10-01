import { createContext } from 'react';

export const WebsiteContext = createContext<WebsiteContext | null>(null);

export interface WebsiteContext {
  services: Service[];
  appStatus: AppStatus;
  websiteDetails: WebsiteDetails;
}

export interface BannerSection {
  image: string;
  title: string;
  description: string;
  button: string;
  link: string;
}

export interface AboutUsSection {
  title: string;
  image: string;
  description: string;
}

export interface Services {
  title: string;
  description: string;
}

export interface Subscription {
  title: string;
  description: string;
}

export interface Footer {
  primary_text: string;
  secondary_text: string;
  button: string;
  link: string;
}

export interface ContactSection {
  address: Address;
  location: Location;
}

export interface Address {
  address_line_1: string;
  address_line_2: string;
  city: string;
  pincode: string;
}

export interface Location {
  latitude: string;
  longitude: string;
}

export interface Other {
  powered_by: string;
  copy_right: string;
}

export interface MetaTags {
  title: string;
  description: string;
  keywords: string;
  author: string;
  canonical_link: string;
}

export interface Scripts {
  header: string;
  body: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface AppStatus {
  licensee: Licensee;
}

export interface Licensee {
  name: string;
  firm: string;
  email: string;
  contact: Contact;
  colours: Colours;
  logo: Logo;
  reset_timeout: number;
  show_home_page: boolean;
  research_account: boolean;
}

export interface Contact {
  country: string;
  number: string;
}

export interface Colours {
  primary: string;
  rgb_format: RgbFormat;
  secondary: string;
}

export interface RgbFormat {
  primary: string;
  secondary_rgb: string;
}

export interface Logo {
  branding: string;
  licensee: string;
  player_image: string;
}

export interface WebsiteDetails {
  banner_section: BannerSection2;
  about_us_section: AboutUsSection2;
  services: Services2;
  subscription: Subscription2;
  footer: Footer2;
  contact_section: ContactSection2;
  other: Other2;
  meta_tags: MetaTags2;
  scripts: Scripts2;
}

export interface BannerSection2 {
  image: string;
  title: string;
  description: string;
  button: string;
  link: string;
}

export interface AboutUsSection2 {
  title: string;
  image: string;
  description: string;
}

export interface Services2 {
  title: string;
  description: string;
}

export interface Subscription2 {
  title: string;
  description: string;
}

export interface Footer2 {
  primary_text: string;
  secondary_text: string;
  button: string;
  link: string;
}

export interface ContactSection2 {
  address: Address2;
  location: Location2;
}

export interface Address2 {
  address_line_1: string;
  address_line_2: string;
  city: string;
  pincode: string;
}

export interface Location2 {
  latitude: string;
  longitude: string;
}

export interface Other2 {
  powered_by: string;
  copy_right: string;
}

export interface MetaTags2 {
  title: string;
  description: string;
  keywords: string;
  author: string;
  canonical_link: string;
}

export interface Scripts2 {
  header: string;
  body: string;
}
