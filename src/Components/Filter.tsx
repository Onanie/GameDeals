import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

interface Props {
  term: any;
  onSubmit: (option: any) => void;
  onTermChange: (option: any) => void;
}

const Filters = ({term, onTermChange, onSubmit}: Props) => {
  const [selected, setSelected] = useState('Filter here');
  const [currentLabel, setCurrentLabel] = useState('Select your carrier');

  const pickerChange = (index: number) => {
    list.map((v, i) => {
      if (index === i) {
        setCurrentLabel(list[index].label);
        setSelected(list[index].value);
        onTermChange(list[index].value);
        onSubmit(term);
      }
    });
  };

  var list = [
    {label: 'Filter', value: 'none'},
    {label: 'On Sale', value: 'onSale'},
    {label: 'Sale Price', value: 'salePrice'},
    {label: 'Deal rating', value: 'dealRating'},
  ];

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'navy',
          overflow: 'hidden',
          margin: 5,
        }}>
        <Picker
          prompt={'Pick a filter'}
          selectedValue={selected}
          style={{
            height: 50,
            width: '100%',
          }}
          onValueChange={(itemValue, itemIndex) => pickerChange(itemIndex)}>
          {list.map(item => {
            return (
              <Picker.Item
                label={item.label}
                value={item.value}
                key={item.value}
              />
            );
          })}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    borderColor: 'grey',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default Filters;
