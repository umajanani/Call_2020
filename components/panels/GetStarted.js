import React from 'react';
import {
  asset,
  Image,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';
import Title from '../Common/Title';
import PanelButton from '../Common/PanelButton';

class GetStarted extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.panelContainer}>
         
        <VrButton style={styles.titleContainer} onClick={() => this.props.easterEgg("EASTER_EGG")}>
          <Title>
            Select Learning          
          </Title>
        </VrButton>
        <View style={styles.contentContainer}>
          <PanelButton
            text="React VR"
            height={125}
            imgUrl="reactvr.png"
            //imgUrl="https://www.google.com"
            big
            onClick={this.props.selectSection}
          />
          <PanelButton
            text="React 360"
            height={125}
            imgUrl="react360.png"
            big
            onClick={this.props.selectSection}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  panelContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    height: 40,
  },
  contentContainer: {
    width: '100%',
    height: 300,
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default GetStarted;