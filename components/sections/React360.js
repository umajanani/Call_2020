import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  asset,
} from 'react-360';


class React360 extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.paneContainer}>
          <Image style={styles.xplat} source={asset("react360.png")} />
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 480,
  },
  paneContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  xplat: {
    width: 600,
    height: 450,
    margin: 25,
  },
  d3: {
    width: 254,
    height: 156,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default React360;
