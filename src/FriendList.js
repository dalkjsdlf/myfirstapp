import { ScrollView } from 'react-native'
import Profile from './Profile';

export default (props) => {
    
    if(!props.isOpened) return null;
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            {
                props.friendProfiles.map((item,index)=>{
                    return(
                        <Profile key={index}
                            uri={item.uri}
                            name={item.name}
                            introduction={item.introduction}
                        />
                    )
                })
            }
        </ScrollView>
    )
}