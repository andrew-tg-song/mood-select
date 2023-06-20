import { atom } from 'recoil';

export const darkModeState = atom<'light' | 'dark'>({
  key: 'darkModeState',
  default: 'light',
});

export const categoryAppearState = atom<boolean>({
  key: 'categoryAppearState',
  default: false,
});
