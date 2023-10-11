import { StyleSheet, Text, View } from 'react-native';
import IconButton from './IconButton';

const Header = () =>{
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.title}>
                친구
            </Text>
            <View style={{flexDirection:"row"}}>
               <IconButton name="search-outline"/>
               <IconButton name="person-add-outline"/>
               <IconButton name="md-musical-notes-outline"/>
               <IconButton name="ios-settings-outline"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection:"row",
        paddingVertical:10,
        justifyContent:"space-between",
        paddingHorizontal:5
    },
    title: {
        fontSize:22, 
        fontWeight:"bold"
    }
})

export default Header;