import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Store from '../Store';
import Axios from 'axios';
import style from './ResultStyles';
import LoadingScreen from '../Loader/LoadingScreen';

export default ResultScreen = (props) => {
  console.log(Store.val);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Axios({
      method: 'post',
      url: 'https://try-001-with-gitub.herokuapp.com/predict',
      data: {
        link: Store.input,
      },
    })
      .then((res) => {
        Store.setResult(res.data.results);
        Store.setHeading(res.data.heading)
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;

  if (isLoading) {
    return(
      <LoadingScreen/>
    )
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
              placeholder={Store.Heading.trimLeft()}
              editable={false}
            />
          </View>
        </View>
        <View style={{flex: 10}}>
          <Text style={style.mainhead}>{`${Store.Heading.trimLeft()}`}</Text>
          <Text
            style={{
              color: '#DA88FF',
              fontSize: 30,
              fontWeight: '700',
              margin: 10,
              textAlign:"center",
              paddingTop:10
            }}>
            The news entered is {`${Store.Result}`}% authenthic
          </Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              // ! needed to be checked by hari
              // props.navigation.navigate('InfoScreen');
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
