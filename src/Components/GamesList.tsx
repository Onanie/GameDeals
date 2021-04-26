import React, {useState} from 'react';
import {View} from 'react-native';

import {Picker} from '@react-native-community/picker';

interface Props {
  term: any;
  onSubmit: (option: any) => void;
  onTermChange: (option: any) => void;
}
const GamesList = ({term, onTermChange, onSubmit}: Props) => {
  const [selected, setSelected] = useState<any>('');
  const [currentLabel, setCurrentLabel] = useState('Filter');

  var list = [
    {label: 'Filter', value: 'none'},
    {label: 'On Sale', value: 'onSale'},
    {label: 'Sale Price', value: 'salePrice'},
    {label: 'Deal rating', value: 'dealRating'},
  ];

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

export default GamesList;
