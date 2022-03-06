import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native'
import DismissKeyboard from './components/DismissKeyboard'
import InputBox from './components/InputBox'

export default function App() {
  const [steps, setSteps] = useState("")
  const [rest, setRest] = useState<string>("")
  const [type, setType] = useState<string>("")

  const barStyles = ['light-content', 'dark-content', 'default']

  const handleChange = (name: string, value: string) => {
    let processedData = value

    switch (name) {
      case 'How many steps did you traverse?':
        setSteps(processedData)
        break;
      case 'What type of exercise did you suffer?':
        setType(processedData)
        break;
      case 'Is it a rest day?':
        setRest(processedData)
        break;
      default:
        break;
    }
  }

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        {/* <Text style={styles.heading}>Exercise Tracker</Text> */}
        <Text style={styles.text}>Steps</Text>
        <InputBox 
          value={steps}
          name="How many steps did you traverse?"
          type="number"
          onChange={handleChange}
          />
        <Text style={styles.text}>Type of exercise</Text>
        <InputBox 
          value={type}
          name="What type of exercise did you suffer?"
          type="string"
          onChange={handleChange}
          />
        <Text style={styles.text}>Rest</Text>
        <InputBox 
          value={rest}
          name="Is it a rest day?"
          type="string"
          onChange={handleChange}
          />
        <Pressable style={styles.button} onPress={() => null}> 
          <Text style={styles.buttonText}>Ok</Text>
        </Pressable>
        {/* <Button color="#E5FFDE" title="OK" onPress={() => null} /> */}
        <StatusBar style="light" />
      </View>
    </DismissKeyboard>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18020C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#BBCBCB',
    padding: 15
  },
  buttonText: {
    color: '#BBCBCB',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#634B66',
    marginTop: 10
  }
})
