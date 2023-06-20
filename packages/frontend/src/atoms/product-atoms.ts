import { atom } from 'recoil';

interface Option {
  color: string;
  size: string;
}

export const optionListState = atom<Option[]>({
  key: 'optionListState',
  default: [],
});

export const optionSelectsCountState = atom<Map<string, number>>({
  key: 'optionSelectsCountState',
  default: new Map(),
});
