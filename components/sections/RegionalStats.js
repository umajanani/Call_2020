import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  asset,
} from 'react-360';


class RegionalStats extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.paneContainer}>
          <Image style={styles.image} source={asset("rs.png")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 480,
  },
  paneContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 600,
    height: 400,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default RegionalStats;
