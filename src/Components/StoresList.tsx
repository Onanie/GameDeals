import React from 'react';
import {View, Image, Text, StyleSheet, FlatList} from 'react-native';

interface Props {
  results: any[];
  navigation: any;
}
const StoresList = ({results, navigation}: Props) => {
  if (!results.length) {
    return null;
  }

  const ItemView = ({item}: {item: any}) => {
    return (
      <View
        style={{
          padding: 10,
          width: '100%',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 15,
            borderColor: 'grey',
            borderRadius: 20,
            height: 100,
            borderWidth: 1,
            width: '100%',
            flexDirection: 'column',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              style={{height: 100, width: 100}}
              source={{uri: item.logo}}
            />
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: 250,
                padding: 10,
              }}>
              <Text style={styles.title}>{item.storeName}</Text>
            </View>
          </View>
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
  title: {fontSize: 20, fontWeight: 'bold', color: 'black'},
  container: {
    marginBottom: 10,
  },
});

export default StoresList;
