import { View, Text, Image } from "react-native";
import Margin from './Margin.js'

const MyProfile = (props) =>{
    return (
        <View style={{flexDirection:"row"}}>
            <Image
                source = {{
                    uri:props.uri
                }}
                style={{backgroundColor:"lightgreen",width:50,height:50, borderRadius:20}}
            />    

            <View style={{marginLeft:10,justifyContent:"center"}}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>{props.name}</Text>
                <Margin height={6}/>
                <Text style={{fontSize:12, color:"grey"}}>{props.introduction}</Text>
            </View>
        </View>
    )
}

export default MyProfile;