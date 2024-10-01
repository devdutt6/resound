export interface GetPlanResponse {
  data: Plan[];
  meta: Meta;
  error: any;
}

export interface Plan {
  id: string;
  title: string;
  label: string;
  interval: string;
  interval_duration: number;
  tiral_period: any;
  description: string;
  amount: number;
  currency: string;
  falgs: Flags;
}

export interface Flags {
  currently_active: boolean;
  highlight: boolean;
}

export interface Meta {
  url: string;
  message: string;
}
