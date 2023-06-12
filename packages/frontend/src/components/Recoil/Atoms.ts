import { atom } from 'recoil';

export const optionListState = atom({
  key: 'optionListState',
  default: [],
});

export const countListState = atom({
  key: 'countListState',
  default: 0,
});

export const optionSelectsCountState = atom<Map<string, number>>({
  key: 'optionSelectsCountState',
  default: new Map(),
});
