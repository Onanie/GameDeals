import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Api from '../../Service/Api';
import DealsList from '../../Components/DealsList';

import Filters from '../../Hooks/Filter';
import {SearchBar} from 'react-native-elements';
import GamesList from '../../Components/GamesList';

export default function GamesListScreen({navigation, route}: any) {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, loading] = useState(false);
  const [value, setValue] = useState('');
  const [term, setTerm] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    loading(true);
    Api.get('/deals')
      .then(response => {
        const deals = JSON.stringify(response.data);
        setData(JSON.parse(deals));
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

  const doFilter = (option: any) => {
    console.log('do filter: ' + option);
    let newList = Filters(option, data);
    setData(newList);
  };

  return (
    <View style={{flex: 1}}>
      <SearchBar
        platform="default"
        containerStyle={{height: 50, width: '100%'}}
        placeholder="Search Deals by name"
        onChangeText={text => searchFilterFunction(text)}
        autoCorrect={false}
        value={value}
      />
      <View
        style={{
          top: 20,
          height: 50,
          width: '95%',
          marginLeft: 5,
          marginRight: 5,
        }}>
        <GamesList
          term={term}
          onTermChange={setTerm}
          onSubmit={() => doFilter(term)}
        />
      </View>

      <View>
        <DealsList results={data} navigation={navigation} />
      </View>
    </View>
  );
}
