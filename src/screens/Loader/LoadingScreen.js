import React from 'react';
import {View, Text,Image,useWindowDimensions} from 'react-native';

export default LoadingScreen = (props) => {
  // setTimeout(() => {
  //   props.navigation.replace('SearchScreen');
  // }, 1500);
  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;
  return (
    // <View>
    //   <View
    //     style={{
    //       backgroundColor: '#BE2CFF',
    //       borderRadius: 30,
    //       marginLeft: 94,
    //       marginRight: 94,
    //       height: 166,
    //       width: 187,
    //       marginTop: '60%',
    //     }}>
    //     <Text
    //       style={{
    //         color: '#E6AFFF',
    //         fontSize: 45,
    //         textAlign: 'center',
    //         fontWeight: '700',
    //       }}>
    //       The{'\n'}Truth{'\n'}Finder
    //     </Text>
    //   </View>
    // </View>
    <View>
      <Image
        source={require('../../images/Loader.jpg')}
        style={{
          resizeMode: 'cover',
          width: width,
          height: height,
        }}
      />
    </View>
  );
};
