import dagoLifeImage from '@/assets/dago-life.png';

export interface Project {
  id: string;
  title: string;
  image: string;
  downloadUrl: string;
  type: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: 'dago-life',
    title: 'DAGO LIFE',
    image: dagoLifeImage,
    downloadUrl: 'https://drive.google.com/file/d/1-3OCOss6ch-GBKu7g--YqjDCvtcnkmgj/view',
    type: 'game',
    year: 2024,
  },
];