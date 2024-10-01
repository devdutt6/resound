export interface LogoutResponse {
  data: any;
  meta: LogoutMeta;
  error: any;
}

export interface LogoutMeta {
  message: string;
  url: string;
}
