import { atom, selector } from 'recoil';
import { game5dumy } from '../components/GameList/dumy/Game5dumy';
interface TypeDumy {
  id: number;
  name: string;
  screenshop: string;
  original_price: string;
  final_price: string;
  discount: string;
}

export const dumyGame5List = atom<TypeDumy[]>({
  key: 'dumyGame5List',
  default: game5dumy,
});
export const dumyGame5ListSelector = selector({
  key: 'dumy5gamelist',
  get: ({ get }) => {
    const dumyTest = get(dumyGame5List);
    const newArrDumy = dumyTest.filter((_, idx) => {
      return idx < 5;
    });
    return newArrDumy;
  },
});

export const numberAtom = atom({
  key: 'numberAtom',
  default: 0,
});
export const gameSelect = atom({
  key: 'gameSelect',
  default: null,
});

export const dumySelector = selector({
  key: 'dumySelector',
  get: ({ get }) => {
    const dumyTest = get(dumyGame5List);
    const num = get(numberAtom);
    // const result = dumyTest.filter((el) => el.id === num);
    return dumyTest[num];
  },
  set: ({ set }) => {},
});

// export const testText = atom({
//   key: 'text',
//   default: '',
// });

//타입 지정시 key 은 무시하고 default 들거나는 데이터만 타입 지정
