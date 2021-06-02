import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';
import Store from './Store';
import Config from 'react-native-config'

export default InfoScreen = (props) => {
  useEffect(() => {
    Axios({
      method: 'post',
      url: Config.PREDICT_API,
      data: {
        link: Store.input,
      },
    })
      .then((res) => {
        console.log('dcv', res);
      })
      .catch((err) => {
        console.log('awee', err);
      });
  }, []);
  return (
    <View>
      <Text>Error 404</Text>
    </View>
  );
};
