import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ImageBackground,
  Dimensions,
  Button,
  Alert,
  Picker,
  Switch,
  ActivityIndicator,
} from 'react-native';

import img from './assets/images/joshua-hoehne-mK8CR5ZphMg-unsplash.jpg';
import styles from './Styles';
const {height, width} = Dimensions.get('window');

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <ImageBackground source={img} style={styles.image}>
            <Text style={styles.textHeader}>I N I T E X T</Text>
          </ImageBackground>
        </View>
        <Text style={styles.pleaseFulfill}>Please Fulfill</Text>
        <View style={styles.TextInput}>
          <TextInput />
        </View>
        <View>
          <Text style={styles.Button}>Ini Text Juga</Text>
          <Button
            title="Pencet Ini"
            onPress={() => Alert.alert('Ini Text Lagi')}
          />
        </View>
        <Picker style={styles.Picker}>
          <Picker.Item label="Ini Picker" value="Picker" />
          <Picker.Item label=":V" value="tolong" />
        </Picker>
        <Switch trackColor={{false: '#767577', true: '#81b0ff'}} />

        <ActivityIndicator size="small" color="#0000ff" />
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
}

export default App;
