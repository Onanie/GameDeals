import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import Api from '../Service/Api';

const DealInfo = ({route, navigation}: any) => {
  const [deal, setDeal] = useState<any>({});

  const item = route.params.item;
  const getDeal = async (id: any) => {
    await Api.get(`/deals?id=${id}`)
      .then(response => {
        const game = JSON.stringify(response.data);
        setDeal(JSON.parse(game));
      })
      .catch(error => {
        console.error(`your deal error: ${error}`);
      });
  };

  useEffect(() => {
    getDeal(item.dealID);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{deal?.gameInfo?.name}</Text>
      <View style={{flexDirection: 'column', margin: 10, paddingRight: 6}}>
        <Text style={{color: 'black', fontSize: 15}}>
          {' '}
          Retail Price: {deal?.gameInfo?.retailPrice}{' '}
        </Text>
        <Text style={{color: 'green'}}>
          {' '}
          Sale Price: {deal?.gameInfo?.salePrice}
        </Text>

        <Image style={styles.image} source={{uri: deal?.gameInfo?.thumb}} />

        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
          Available at : {deal?.gameInfo?.publisher}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    margin: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default DealInfo;
