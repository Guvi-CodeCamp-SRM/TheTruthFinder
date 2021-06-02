import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  TextInput,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import LoadingScreen from '../Loader/LoadingScreen';
import Store from '../Store';

const SearchScreen = ({navigation}) => {
  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;

  const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];
  const opacity = useState(new Animated.Value(1))[0];
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  function moveImg() {
    Animated.timing(value, {
      toValue: {x: 0, y: -(height / 2)},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      navigation.navigate('ResultScreen');
    }, 1001);
  };

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <View
        style={{
          width: width,
          height: height,
          backgroundColor: 'white',
        }}>
        <Animated.View style={value.getLayout()}>
          <Image
            source={require('../../images/bg.jpg')}
            style={{
              width: '100%',
              height: height / 2,
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 30,
            }}
          />
          <Text
            style={{
              position: 'absolute',
              fontSize: 22,
              color: '#E6AFFF',
              fontWeight: '700',
              textAlign: 'justify',
              marginLeft: 10,
              marginTop: 10,
            }}>
            the{'\n'}truth{'\n'}finder
          </Text>
          <View style={styles.container}>
            <Animated.View
              style={[
                {
                  flexDirection: 'row-reverse',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  borderWidth: 0.5,
                  borderColor: '#000',
                  height: 50,
                  borderRadius: 30,
                  margin: 10,
                  opacity,
                },
              ]}>
              <TouchableOpacity
                onPress={() => {
                  moveImg();
                  fadeOut();
                }}>
                <Image
                  source={{
                    uri:
                      'https://cdn.iconscout.com/icon/premium/png-256-thumb/search-2115245-1780538.png',
                  }}
                  style={styles.Search}
                />
              </TouchableOpacity>
              <TextInput
                placeholder="Search here with link"
                placeholderTextColor="#707070"
                style={styles.TextInput}
                onChangeText={(val) => {
                  Store.input = val;
                }}
              />
            </Animated.View>
          </View>
        </Animated.View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop: '-15%',
  },
  Search: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    opacity: 0.5,
    marginRight: 15,
  },
  TextInput: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: '80%',
    padding: 5,
    paddingLeft: 20,
    flex: 1,
  },
  headingText: {
    position: 'absolute',
    fontSize: 22,
    color: '#E6AFFF',
    fontWeight: '700',
    textAlign: 'justify',
    marginLeft: 10,
    marginTop: 10,
  },
});

export default SearchScreen;
