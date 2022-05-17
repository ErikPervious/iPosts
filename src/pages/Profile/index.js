import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { 
  LogOut as LogOutIcon,
  MessageSquare as MessageSquareIcon,
  Heart as HeartIcon
} from 'react-native-feather';

import firestore from '@react-native-firebase/firestore';

import { FirebaseContext } from '../../contexts/useFirebase';

import { HeaderCustom } from '../../components/HeaderCustom';
import { TabBarCustom } from '../../components/TabBarCustom';
import { ShowQuantity } from '../../components/ShowQuantity';
import { Post } from '../../components/Post';

import { configIcon } from '../../utils/configIcon';

import { SafeArea } from '../Home/styled';
import { 
  Container, 
  ContainerProfileBox, 
  ContainerProfileInformation,
  Division,
  ProfileAvatar,
  ProfileName
} from './styled';
import { colors } from '../../styles';

export function Profile() {
  const [totalLikesCount, setTotalLikesCount] = useState(0);
  const [totalPostsCount, setTotalPostsCount] = useState(0);
  const [totalUserPosts, setTotalUserPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  const { user, LogOutOfFirebase } = useContext(FirebaseContext);

  useEffect(() => {
    setLoadingPosts(true);
    function getTotalLikesAndPosts() {
      firestore().collection('Posts')
      .where('author', '==', user.uid)
      .get()
      .then(snapshot => {
        let likesCount = 0;
        let userPosts = [];
        snapshot.docs.map((item) => {
          likesCount += item.data().likes.length;
          const date = item.data().createdIn.toDate();
          let post = {
            name: item.data().name,
            content: item.data().content,
            author: item.data().author,
            createdIn: `${date.getUTCHours()}:${date.getUTCMinutes()}`,
            likes: item.data().likes,
            postId: item.data().postId
          };
          userPosts.push(post);
        });
        setTotalUserPosts(userPosts);
        setTotalLikesCount(likesCount);
        setTotalPostsCount(snapshot.docs.length);
        setLoadingPosts(false);
      })
      .catch(error => {
        console.log(error);
        setLoadingPosts(false);
      });
    };
    getTotalLikesAndPosts();
  }, []);

  return (
    <Container>
      <HeaderCustom
        title={user.name}
        iconRight={<LogOutIcon {...configIcon} onPress={LogOutOfFirebase} />}
      />
      <ScrollView
        style={{width: '100%'}}
        showsVerticalScrollIndicator={false}
      >
      <ContainerProfileInformation>
        <ProfileAvatar
          source={require('../../assets/images/avatar.png')}
        />
        <ProfileName>{user.name}</ProfileName>
        <ContainerProfileBox>
          <ShowQuantity
            icon={<MessageSquareIcon width={30} height={30} fill={colors.BLUE_PRIMARY} />}
            quantity={totalPostsCount}
          />
          <ShowQuantity
            icon={<HeartIcon width={30} height={30} fill="#961818" />}
            quantity={totalLikesCount}
          />
        </ContainerProfileBox>
      </ContainerProfileInformation>
      <Division />
      {loadingPosts 
      ? <ActivityIndicator color={colors.WHITE_SECONDARY} size={30} />
      : 
          <SafeArea>
            {totalUserPosts.map((value, index) => (
              <Post
                author={value.author}
                name={value.name}
                content={value.content}
                createdIn={`${value.createdIn}`}
                likes={value.likes}
                key={value.postId}
                position={index}
                postId={value.postId}
              />
            ))}
          </SafeArea>
      }
      </ScrollView>
      <TabBarCustom />
    </Container>
  );
}
