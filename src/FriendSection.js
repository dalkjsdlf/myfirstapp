import {View, Text, TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default (props)=>{
    
    return(
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text>친구 {props.friendListCount}</Text>
            <TouchableOpacity>
                <MaterialIcons name={props.isOpened?"keyboard-arrow-up":"keyboard-arrow-down"} size={24} color="black" onPress={props.onPressButton}/>
            </TouchableOpacity>
        </View>
    )
}