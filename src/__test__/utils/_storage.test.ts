import {deleteData, getData, setData} from 'src/utils/_storage';

describe('setData', () => {
  const name = 'testData';
  const data = {id: 1, name: 'John Doe'};
  test('should set data in AsyncStorage', () => {
    setData(name, data);

    const storedData = getData(name);
    expect(storedData).toEqual([data]);
  });

  test('should delete data in AsyncStorage', () => {
    setData(name, data);

    deleteData(name);

    const storedData = getData(name);
    expect(storedData).toEqual(null);
  });
});
