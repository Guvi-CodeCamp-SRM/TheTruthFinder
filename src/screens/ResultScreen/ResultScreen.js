import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Store from '../Store';
import Axios from 'axios';
import style from './ResultStyles';
import LoadingScreen from '../Loader/LoadingScreen';
import Config from 'react-native-config';

export default ResultScreen = (props) => {
  console.log(Store.val);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log(Config.RESULT_API, Store.input);
    Axios({
      method: 'post',
      url: Config.RESULT_API,
      data: {
        link: Store.input,
      },
    })
      .then((res) => {
        Store.setResult(res.data.results);
        Store.setHeading(res.data.heading);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, []);

  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <View style={style.background}>
        <View style={{flex: 4}}>
          <Image
            source={require('../../images/bg.jpg')}
            style={{
              width: width,
              height: height / 5 + 20,
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 30,
            }}
          />
          <Text style={style.heading}>
            the{'\n'}truth{'\n'}finder
          </Text>
          <View style={style.displaytext}>
            <TextInput
              style={{
                paddingLeft: 15,
                fontSize: 20,
              }}
              placeholder={
                Store.Heading
                  ? `${Store.Heading.trimLeft()}`
                  : `Heading not found`
              }
              editable={false}
            />
          </View>
        </View>
        <View style={{flex: 10}}>
          {Store.Heading ? (
            <Text style={style.mainhead}>{`${Store.Heading.trimLeft()}`}</Text>
          ) : (
            <Text>Heading not found</Text>
          )}
          <Text
            style={{
              color: '#DA88FF',
              fontSize: 30,
              fontWeight: '700',
              margin: 10,
              textAlign: 'center',
              paddingTop: 10,
            }}>
            The news entered is {`${Store.Result}`}% authenthic
          </Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              // ! needed to be checked by hari
              // props.navigation.navigate('InfoScreen');
              Linking.openURL(Store.input);
            }}>
            <Text
              style={{
                color: '#707070',
                marginLeft: width / 2 - 90,
              }}>
              Click For More Information
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};
