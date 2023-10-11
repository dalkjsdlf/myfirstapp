import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default (props)=>{
    return(
        <View style={{paddingHorizontal:6}}>
            <Ionicons name={props.name} size={24} color="black" />
        </View>
    )
}