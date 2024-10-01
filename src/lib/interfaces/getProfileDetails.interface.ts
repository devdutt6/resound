export interface GetProfileDetailsResponse {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: string;
  stripe_id: string;
  first_name: string;
  last_name: string;
  email: string;
  birthday: string;
  contact: Contact;
  profile: string;
  flags: Flags;
  subscription_expiry_date: any;
  submitted_research_count: number;
}

export interface Contact {
  country_iso_code: string;
  number: string;
  phone_code: string;
}

export interface Flags {
  free_account: boolean;
  subscription_active: boolean;
  can_update_password: boolean;
  can_update_plans: boolean;
  survey_questions_completed: boolean;
  resubmit_research: boolean;
}

export interface Meta {
  message: string;
}
