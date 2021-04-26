import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

interface Props {
  results: any[];
  navigation: any;
}
const DealsList = ({results, navigation}: Props) => {
  if (!results?.length) {
    return null;
  }

  const ItemView = ({item}: {item: any}) => {
    return (
      <View
        style={{
          padding: 10,
          width: '100%',
        }}>
        <View style={styles.innerContainer}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image style={styles.image} source={{uri: item.thumb}} />
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: 250,
                padding: 10,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                Title: {item.title}
              </Text>
              <Text style={{textDecorationLine: 'line-through'}}>
                Was: {item.normalPrice}
              </Text>
              <Text style={{color: 'green'}}>Now: {item.salePrice}</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ResultDetails', {
                item: item,
              })
            }
            style={styles.button}>
            <Text style={{fontSize: 15, fontWeight: 'bold', margin: 5}}>
              View More
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const deals = () => {
    return (
      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <ItemView item={item} />;
        }}
      />
    );
  };
  return results?.length > 0 ? (
    <View style={{top: 40}}>{deals()}</View>
  ) : (
    <View style={{flex: 1}}>
      <View>
        <Text>Loading Deals...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  parent: {
    marginBottom: 10,
  },
  innerContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderColor: 'grey',
    borderRadius: 20,
    height: 200,
    borderWidth: 1,
    width: '100%',
    flexDirection: 'column',
  },
  image: {height: 100, width: 100},
  savingsText: {},
  button: {
    height: 40,
    width: 100,
    bottom: -20,
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
  },
});

export default DealsList;
