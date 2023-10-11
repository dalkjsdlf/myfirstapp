import { StyleSheet, View, TurboModuleRegistry, FlatList } from 'react-native';
import Header from './src/Header';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { myProfile,friendProfiles } from './src/data';
import Margin from './src/Margin';
import Division from './src/Division';
import FriendSection from './src/FriendSection';
import {useState} from 'react'
import TabBar from './src/TabBar'
import Profile from './src/Profile'
import Styled from 'styled-components/native';

const statusBarHeight = getStatusBarHeight(TurboModuleRegistry);

const Container = Styled.View`
  flex: 1;
  backgound-color: #fff;
  padding-top : ${(props)=>props.paddingTop};
  justify-content: center;
  
`;

export default function App() {

  let [isOpened, setIsOpened] = useState(true)
  let [selectedTabIdx, setSelectedTabInx] = useState(0);


  const onPressOpen = ()=>{
    setIsOpened(!isOpened);
  }
  
  const ItemSeparatorComponent = () => <Margin height={13}/>
  const renderItem = ({item, index}) =>(
    
    <View key={index}>
      <Profile 
        key={index}
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      /> 
    </View>
  )
  const ListHeaderComponent = () => (
    <View style={{flex:1, backgroundColor:"white"}}>
      <Profile
        name={myProfile.name}
        uri={myProfile.uri}
        introduction={myProfile.introduction}
        isMe={true}
      />
      <Margin height={20}/>
      <Division/>
      <Margin height={10}/>
      <FriendSection
        friendListCount={friendProfiles.length}
        onPressButton={onPressOpen}
        isOpened={isOpened}
      />
      <Margin height={10}/>
    </View>
  )

  return(
    
    <Container
      paddingTop={statusBarHeight + 20}
    >
      <Header/>
      <Margin height={10}/>

      <FlatList
        data={isOpened?friendProfiles:0}
        contentContainerStyle={{paddingHorizontal:15}}
        keyExtractor={(_, index) => index}
        stickyHeaderIndices={[0]}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
      />

      <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabInx={setSelectedTabInx}
      /> 
    </Container>
  )
        // <FriendList
        //   friendProfiles={friendProfiles}
        //   isOpened={isOpened}
        // />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:statusBarHeight + 20,
  },
});
