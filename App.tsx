import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import DismissKeyboard from './components/DismissKeyboard'
import InputBox from './components/InputBox'

export default function App() {
  const [steps, setSteps] = useState("")
  const [rest, setRest] = useState<string>("")
  const [type, setType] = useState<string>("")

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
        <Text>Steps</Text>
        <InputBox 
          value={steps}
          name="How many steps did you traverse?"
          type="number"
          onChange={handleChange}
          />
        <Text>Type of exercise</Text>
        <InputBox 
          value={type}
          name="What type of exercise did you suffer?"
          type="string"
          onChange={handleChange}
          />
        <Text>Rest</Text>
        <InputBox 
          value={rest}
          name="Is it a rest day?"
          type="string"
          onChange={handleChange}
          />
        <Button title="Ok" onPress={() => null} />
        <StatusBar style="auto" />
      </View>
    </DismissKeyboard>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
