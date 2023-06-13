import { atom } from 'recoil';

interface Option {
  color: string;
  size: string;
}

const initialOptions: Option[] = []; // 초기값 설정

export const optionListState = atom<Option[]>({
  key: 'optionListState',
  default: initialOptions,
});

export const countListState = atom({
  key: 'countListState',
  default: 0,
});

export const optionSelectsCountState = atom<Map<string, number>>({
  key: 'optionSelectsCountState',
  default: new Map(),
});
