import { ReactChild, ReactChildren } from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableWithoutFeedback } from 'react-native'
import {Keyboard} from 'react-native'

interface DismissKeyboardProps {
    children: React.ReactNode
}

const DismissKeyboard: React.FC<DismissKeyboardProps> = ({ 
    children 
}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
        {children}
    </TouchableWithoutFeedback>
)

export default DismissKeyboard