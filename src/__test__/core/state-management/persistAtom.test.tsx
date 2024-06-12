import persistAtom from 'src/state-management/recoil/persistAtom';

import type {PersistAtomProps} from 'src/state-management/recoil/persistAtom'; // Import the type definition for PersistAtomProps

describe('persistAtom', () => {
  test('should persist atom value', () => {
    const key = 'favorites';
    const setSelf = jest.fn();
    const onSet = jest.fn();
    const newValue = [1, 2, 3];
    const isReset = false;

    const persist = persistAtom(key);
    const props: PersistAtomProps = {setSelf, onSet, trigger: 'get'};

    persist(props);

    expect(setSelf).toHaveBeenCalled();
    expect(onSet).toHaveBeenCalled();

    onSet(newValue, null, isReset);

    expect(setSelf).toHaveBeenCalledTimes(1);
    expect(onSet).toHaveBeenCalledTimes(2);
  });
});
