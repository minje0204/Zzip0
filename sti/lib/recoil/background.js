import { atom } from 'recoil';
import { v1 } from 'uuid';

export const backgroundState = atom({
  key: `backgroundChangeState/${v1()}`,
  default: 'https://www.youtube.com/embed/Ihw_I-zvu1Q'
});

export const backgroundBEState = atom({
  key: `backgroundBEApi/${v1()}`,
  default: {
    bgId: 0,
    bgCategory: 'CHRISTMAS',
    bgTitle: 'background_title',
    thumbnailUrl: '',
    bgUrl: 'https://www.youtube.com/embed/Ihw_I-zvu1Q',
    bgmUrl: 'https://a401.s3.ap-northeast-2.amazonaws.com/bgm/CHRISTMAS01.mp3'
  }
});

export const volumeState = atom({
  key: `volume/${v1()}`,
  default: 0
});
