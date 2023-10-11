
import { TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const TabButton = ({isSelected,
                    onPress, 
                    activeName, 
                    inactiveName}) => {
    return(
            <TouchableOpacity
            activeOpacity={1} 
            onPress={onPress}
            style={{flex: 1,
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Ionicons name={isSelected?activeName:inactiveName} size={24} color="black" />
            </TouchableOpacity>
    )
}
export default ({selectedTabIdx, setSelectedTabInx}) => {
    return(
        <View style={{width:"100%", 
        height:50, 
        flexDirection:"row", 
        marginBottom:34,
        borderTopWidth:0.5,
        borderTopColor:"grey"}}>
            <TabButton
                isSelected={selectedTabIdx==0}
                onPress={()=>setSelectedTabInx(0)}
                activeName="person"
                inactiveName="person-outline"
            />
            <TabButton
                isSelected={selectedTabIdx==1}
                onPress={()=>setSelectedTabInx(1)}
                activeName="chatbubble"
                inactiveName="chatbubble-outline"
              
            />
            <TabButton
                isSelected={selectedTabIdx==2}
                onPress={()=>setSelectedTabInx(2)}
                activeName="pricetag"
                inactiveName="pricetag-outline"
                
            />
            <TabButton
                isSelected={selectedTabIdx==3}
                onPress={()=>setSelectedTabInx(3)}
                activeName="add-circle"
                inactiveName="add-circle-outline"
                
            />
        </View>
    )
}