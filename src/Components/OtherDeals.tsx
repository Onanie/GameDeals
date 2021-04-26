import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

interface Props {
  results: any[];
  navigation: any;
}
const OtherDeals = ({results, navigation}: Props) => {
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
        <View style={styles.container}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Price: {item.price}
          </Text>

          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'green'}}>
            Saving: {item.savings}
          </Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DealInfo', {
                item: item,
              })
            }
            style={styles.button}>
            <Text style={{fontSize: 15, fontWeight: 'bold', margin: 5}}>
              View Deal
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
  return results.length > 0 ? (
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
  button: {
    height: 40,
    width: 100,
    bottom: -20,
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
  },
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderColor: 'grey',
    borderRadius: 20,
    height: 150,
    borderWidth: 1,
    width: '100%',
    flexDirection: 'column',
  },
});

export default OtherDeals;
