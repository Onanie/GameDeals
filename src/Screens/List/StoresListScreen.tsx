import React, {useEffect, useState} from 'react';
import {ScrollView, View, ActivityIndicator} from 'react-native';
import Api from '../../Service/Api';

import {SearchBar} from 'react-native-elements';
import StoresList from '../../Components/StoresList';

export default function DealsListScreen({navigation, route}: any) {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, loading] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    loading(true);
    Api.get('/stores')
      .then(response => {
        const stores = JSON.stringify(response.data);
        setData(JSON.parse(stores));
        loading(false);
      })
      .catch(error => {
        console.error(`your error: ${error}`);
        loading(false);
      });
  };

  const searchFilterFunction = (text: string) => {
    setValue(text);

    if (text) {
      const newData = data.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData(newData);
    }
  };

  return isLoading ? (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator />
    </View>
  ) : (
    <View style={{flex: 1}}>
      <SearchBar
        platform="default"
        containerStyle={{height: 20, width: '100%'}}
        placeholder="Search Store by name"
        onChangeText={text => searchFilterFunction(text)}
        autoCorrect={false}
        value={value}
      />

      <StoresList results={data} navigation={navigation} />
    </View>
  );
}
