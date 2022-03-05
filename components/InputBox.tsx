import { StyleSheet, Text, TextInput, View, Button, TouchableWithoutFeedback } from 'react-native'
import {Keyboard} from 'react-native'


interface InputBoxProps {
    value: string
    name: string
    type: string
    onChange: (name: string, text: string) => void
}

const InputBox: React.FC<InputBoxProps> = ({
    value, name, type, onChange
}) => {
    const keyboard = type==="number" ? 'number-pad' : 'default'

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        // <DismissKeyboard>
        <TextInput
            value={value}
            onChangeText={value => onChange(name, value)}
            style={inputStyle.input}
            keyboardType={keyboard}
            placeholder={name}
        />
        // </DismissKeyboard>
  )
}

export default InputBox

const inputStyle = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: 250
    },
  })