
export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail[];
  urls: Url[];
}

interface Thumbnail {
    extension: string;
    path: string;
}
interface Url {
  type: string;
  url: string;
}
