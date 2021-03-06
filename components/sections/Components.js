import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  asset,
} from 'react-360';


class Components extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.paneContainer}>
          <Image style={styles.image} source={asset("view.png")} />
          <Text style={styles.text}>
            View
          </Text>
        </View>
        <View style={styles.paneContainer}>
          <Image style={styles.image} source={asset("react UI.png")} />
          <Text style={styles.text}>
            Image
          </Text>
        </View>
        <View style={styles.paneContainer}>
          <Image style={styles.image} source={asset("3d.png")} />
          <Text style={styles.text}>
            Entity
          </Text>
        </View>
        <View style={styles.paneContainer}>
          <Image style={styles.image} source={asset("button.png")} />
          <Text style={styles.text}>
            VR Button
          </Text>
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
  image: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default Components;
