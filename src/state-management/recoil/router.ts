/**
 * Selector for accessing the current route from the router state.
 * https://recoiljs.org/docs/guides/atom-effects#local-storage-persistence
 *
 * @remarks
 * This selector provides a convenient way to get and set the current route in the router state.
 *
 * @param get - The Recoil `get` function.
 * @param set - The Recoil `set` function.
 * @returns The current route from the router state.
 */

import { atom, selector } from 'recoil';

import persistAtom from './persistAtom';

export enum DeviceOrientation {
  portrait = 'portrait',
  landscape = 'landscape',
};
export type Route = {
  key: string | undefined;
  name?: string;
  params?: any;
};

const ROUTES_KEY = 'router';

export const deviceOrientation = atom<keyof typeof DeviceOrientation>({
  default: 'portrait',
  key: 'deviceOrientation',
});
export const router = atom<Route>({
  default: {key: undefined, params: null},
  key: ROUTES_KEY,
  effects: [persistAtom(ROUTES_KEY)]
});

export const hookRoute = selector({
  key: 'hookRoute',
  get: ({get}) => get(router),
  set: ({set}, newValue) => {
    set(router, newValue);
  }
});

export default hookRoute;
