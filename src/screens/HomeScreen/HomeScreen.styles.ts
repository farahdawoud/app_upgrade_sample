import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
    alignItems: 'center',
  },
  mainTitle: {
    fontWeight: '600',
    marginTop: 60,
    fontSize: 24,
  },
});
