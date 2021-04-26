import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Api from '../Service/Api';
import DealsList from './DealsList';
import OtherDeals from './OtherDeals';

const ResultDetails = ({route, navigation}: any) => {
  const [game, setGame] = useState<any>({});

  const item = route.params.item;
  const getGame = async (id: any) => {
    await Api.get(`/games?id=${Number(id)}`)
      .then(response => {
        const game = JSON.stringify(response.data);
        setGame(JSON.parse(game));
      })
      .catch(error => {
        console.error(`your game error: ${error}`);
      });
  };

  useEffect(() => {
    getGame(item.gameID);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item?.title}</Text>
      <View style={{flexDirection: 'row', margin: 10, paddingRight: 6}}>
        <Text style={{textDecorationLine: 'line-through'}}>
          {item?.normalPrice}{' '}
        </Text>

        <Text style={{color: 'green'}}>{item?.salePrice}</Text>
      </View>
      <Text style={{color: 'black', fontSize: 15}}>
        {' '}
        you save: {item?.savings}{' '}
      </Text>
      <Image style={styles.image} source={{uri: item?.thumb}} />

      <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
        Available at : {game?.info?.title}
      </Text>
      <View>
        <OtherDeals results={game?.deals} navigation={navigation} />
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

export default ResultDetails;
