// import React, {useState} from 'react';
// import {StyleSheet} from 'react-native';
// import {SelectCountry} from 'react-native-element-dropdown';

// const local_data = [
//   {
//     value: '1',
//     lable: 'ETH',
//     image: {
//       uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
//     },
//   },
//   {
//     value: '2',
//     lable: 'RLY',
//     image: {
//       uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
//     },
//   },
//   {
//     value: '3',
//     lable: 'MATIC',
//     image: {
//       uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
//     },
//   },
// ];

// const Dropdown = _props => {
//   const [country, setCountry] = useState('1');

//   return (
//     <SelectCountry
//       style={styles.dropdown}
//       selectedTextStyle={styles.selectedTextStyle}
//       placeholderStyle={styles.placeholderStyle}
//       imageStyle={styles.imageStyle}
//       iconStyle={styles.iconStyle}
//       maxHeight={200}
//       value={country}
//       data={local_data}
//       valueField="value"
//       labelField="lable"
//       imageField="image"
//       placeholder="Select country"
//       searchPlaceholder="Search..."
//       onChange={e => {
//         setCountry(e.value);
//       }}
//     />
//   );
// };

// export default Dropdown;

// const styles = StyleSheet.create({
//   dropdown: {
//     margin: 16,
//     height: 40,
//     width: 120,
//     backgroundColor: '#1976D2',
//     borderRadius: 22,
//     paddingHorizontal: 8,
//     marginLeft: 100,
//   },
//   imageStyle: {
//     width: 16,
//     height: 16,
//     borderRadius: 12,
//   },
//   placeholderStyle: {
//     fontSize: 14,
//   },
//   selectedTextStyle: {
//     fontSize: 12,
//     marginLeft: 8,
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
//   data: {
//     backgroundColor: 'lightblue', // Set the desired background color for choices
//   },
// });

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

interface LocalData {
  value: string;
  label: string;
}

const local_data: LocalData[] = [
  {value: '1', label: 'ETH'},
  {value: '2', label: 'RLY'},
  {value: '3', label: 'MATIC'},
];

const Dropdown = () => {
  const [country, setCountry] = useState('ETH');
  const [open, setOpen] = useState(false);

  const handleSelect = (value: string, label: string) => {
    setCountry(label);
    setOpen(false);
  };

  const renderItem = ({item}: {item: LocalData}) => {
    return (
      <TouchableOpacity
        style={[styles.item, country === item.label && styles.selected]}
        onPress={() => handleSelect(item.value, item.label)}>
        <Text style={styles.itemText}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.dropdown}>
      <TouchableOpacity
        style={styles.selectedItem}
        onPress={() => setOpen(!open)}>
        <Text style={styles.selectedText}>{country}</Text>
      </TouchableOpacity>
      {open && (
        <View style={styles.dropdownList}>
          <FlatList
            data={local_data}
            renderItem={renderItem}
            keyExtractor={item => item.value}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    width: 120,
    marginLeft: 100,
  },
  selectedItem: {
    height: 40,
    backgroundColor: '#6A5ACD',
    borderRadius: 22,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedText: {
    color: 'white',
    alignSelf: 'center',
  },
  dropdownList: {
    backgroundColor: 'purple',
    marginTop: 5,
    borderRadius: 8,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selected: {
    backgroundColor: '#1976D2',
  },
  itemText: {
    color: 'black',
  },
});

export default Dropdown;
