import {StyleSheet} from 'react-native';

const ResultStyles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  heading: {
    position: 'absolute',
    fontSize: 20,
    color: '#E6AFFF',
    fontWeight: '700',
    textAlign: 'justify',
    marginLeft: 10,
    marginTop: 10,
  },
  displaytext: {
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 30,
    margin: 15,
    position: 'relative',
    // paddingRight:width-180,
    backgroundColor: 'white',
    marginTop: '-18%',
  },
  mainhead: {
    color: '#3A3939',
    margin: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  textinfo: {
    color: '#292929',
    margin: 20,
    fontSize: 15,
    // fontWeight: '700',
  },
});

export default ResultStyles;
