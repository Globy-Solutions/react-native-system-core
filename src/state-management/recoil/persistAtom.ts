/**
 * Creates a persistent atom that persists its value using the provided key.
 * The atom's value will be stored in local storage and retrieved on subsequent app launches.
 *
 * @param key - The key used to store and retrieve the atom's value from local storage.
 * @returns A function that accepts `setSelf` and `onSet` as arguments and sets up the persistent atom.
 */

import {DefaultValue} from 'recoil';
import {deleteData, getData, setData} from '../../utils/_storage';

export type PersistAtomProps = {
  setSelf: (value: any) => void;
  onSet: (
    handler: (newValue: any, oldValue: any, isReset: boolean) => void
  ) => void;
  trigger: 'get' | 'set';
};

const persistAtom =
  (key: string) =>
  ({setSelf, onSet}: PersistAtomProps) => {
    setSelf(() => {
      let data = getData(key);
      return data ?? new DefaultValue();
    });

    onSet((newValue, _, isReset) => {
      if (isReset) {
        deleteData(key);
      } else {
        setData(key, JSON.stringify(newValue));
      }
    });
  };

export default persistAtom;

/*
// https://recoiljs.org/docs/guides/atom-effects
import { atom } from 'recoil';
import persistAtom from './persistAtom';
const FAVORITES_KEY = 'favorites';

export const favorites = atom<Array<number>>({
  key: FAVORITES_KEY,
  default: [],
  effects: [persistAtom(FAVORITES_KEY)], // Each atom can reference an array of these atom effect functions which are called in priority order when the atom is initialized.
});

*/
