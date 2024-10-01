export interface GetCardsResponse {
  data: any[];
  meta: Meta;
  error: any;
}

export interface Meta {
  message: string;
  url: string;
  currency_symbol: string;
}
