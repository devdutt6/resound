export interface GetTrackResponse {
  data: Track[];
  meta: Meta;
  error: any;
}

export interface Track {
  id: string;
  title: string;
  description: string;
  link: string;
  artist: string;
  image: string;
}

export interface Meta {
  message: string;
  url: string;
  seconds: number;
}
