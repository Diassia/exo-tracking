import { View, StyleSheet, Text } from "react-native"
import tw from 'tailwind-react-native-classnames'


interface PageHeaderProps {
    leftNode?: JSX.Element
    rightNode?: JSX.Element
    headerText: string
}

const PageHeader: React.FC<PageHeaderProps> = ({
    leftNode = null,
    rightNode = null,
    headerText = ""
}) => {

    return (
        <View style={styles.pageHeaderContainer}>
            <View style={styles.leftItem}>{leftNode}</View>
            <View style={styles.headerItem}>
                <Text style={styles.textStyle}>{headerText}</Text>
            </View>
            <View style={styles.rightItem}>{rightNode}</View>
        </View>
    )
  }

const styles = StyleSheet.create({
    pageHeaderContainer: tw`flex flex-row items-center justify-between border-b border-gray-500`,
    leftItem: tw`flex-1 pl-4 py-4`,
    rightItem: tw`flex-1 pr-4 items-end py-4`,
    headerItem: tw`flex-1 pl-4 py-4`,
    textStyle: {
        color: '#E5FFDE',
        // fontSize: 50
    }
  })

export default PageHeader