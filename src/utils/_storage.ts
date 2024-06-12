/**
 * Method for LocalStorage
 * setData allways return Array object
 *
 * @function
 */

import {MMKV} from 'react-native-mmkv';

const AsyncStorage = new MMKV();

const getData = (name: string) => {
  const value = AsyncStorage.getString(name);
  return value ? JSON.parse(value) : null;
};

const setData = (name: string, data: any): void => {
  const currentState = getData(name);
  let temp: any[] = [];
  if (currentState) {
    temp = [...currentState, data];
  } else {
    temp = [data];
  }
  AsyncStorage.set(name, JSON.stringify(temp));
};

const deleteData = (name: string) => {
  AsyncStorage.delete(name);
};

export {deleteData, getData, setData};
