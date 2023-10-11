import { View, Text, Image } from 'react-native'
import Margin from './Margin'
export default (props) => {
    const size = props.isMe?50:40;
    return(
        <View style={{flexDirection:"row", paddingVertical:5}}>
            <Image
                source={{
                    uri:props.uri
                }}
                style={{width:size, height:size, borderRadius:20}}
            />
            <View style={{paddingHorizontal:10, justifyContent:"center"}}>
                <Text style={{fontSize:props.isMe?20:12, fontWeight:"bold"}}>{props.name}</Text>
                {
                    !!props.introduction && 
                    (
                        <View>
                            <Margin height={props.isMe?6:2}/>
                            <Text style={{fontSize:props.isMe?12:11, color:"grey"}}>{props.introduction}</Text>
                        </View>
                    )
                }
                
            </View>
        </View>
    )
}