import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
  Linking,
  Button,
} from 'react-native';
import Axios from 'axios';
import Store from './Store'

export default InfoScreen = (props) => {
  const [News, setNews] = useState([]);
  useEffect(() => {
    Axios({
      method: 'post',
      url: 'https://try-001-with-gitub.herokuapp.com/related',
      data: {
        link: Store.input,
      },
    })
      .then((res) => {
        console.log('dcv',res);
      })
      .catch((err) => {
        console.log('awee',err);
      });
  }, []);
  return (
    <View>
      <Text>Error 404</Text>
    </View>
  );
};
