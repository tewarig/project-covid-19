import * as React from 'react';
import { StyleSheet, Text, View ,CheckBox,Alert,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LinksScreen() {
  const showAlert = () =>{
      Alert.alert(
         'Our team will contract you with in 12 hours!'
      )
   }
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
   <OptionButton
        icon="md-school"
        label="Read more about covid19"
        onPress={() => WebBrowser.openBrowserAsync('https://www.who.int/')}
      />

      <OptionButton
        icon="md-compass"
        label="Find nearest test centere"
        onPress={() => WebBrowser.openBrowserAsync('https://google.com')}
      />

      <OptionButton
        icon="ios-chatboxes"
        label="Ask a question on to doctor"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.projectcovid.io')}
        isLastOption
      /><OptionButton
        icon="md-body"
        label="Submit you location"
        onPress={() => WebBrowser.openBrowserAsync('https://maps.google.com')}
        isLastOption
      /><OptionButton
        icon="md-body"
        label="Submit your selfie"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.projectcovid.io')}
        isLastOption
      />
      <OptionButton
           icon="md-school"
           label="Submit you medical profile"
           onPress={() => WebBrowser.openBrowserAsync('mailto:uhigdy@gmail.com')}
         />

      <View style={styles.contentContainer}>
      <Text>DO you have following symptoms?</Text>
      <View>
      <Text><CheckBox/>Cough</Text>
      <Text><CheckBox/>Fever</Text>
      <Text><CheckBox/>Tiredness</Text>
      <Text><CheckBox/>Difficulty breathing </Text>
      <TouchableOpacity onPress = {showAlert} style = {styles.button}>
         <Text>Submit</Text>
      </TouchableOpacity>
      </View>
      </View>
    </ScrollView>

  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  button: {
      backgroundColor: '#4ba37b',
      width: 100,
      borderRadius: 50,
      alignItems: 'center',
      marginTop: 100,
      left: 140,
   }
});
