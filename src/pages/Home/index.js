import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, ScrollView, StatusBar } from 'react-native';
import { Search as SearchIcon } from 'react-native-feather';

import { FirebaseContext } from '../../contexts/useFirebase';

import { TabBarCustom } from '../../components/TabBarCustom';
import { HeaderCustom } from '../../components/HeaderCustom';
import { Post } from '../../components/Post';

import { configIcon } from '../../utils/configIcon';

import { Container, ContainerLoading, SafeArea } from './styled';
import { colors } from '../../styles';

export function Home() {

  const {
    posts,
    loadingPosts,
    getPosts,
    getUserData
  } = useContext(FirebaseContext);

  useEffect(() => getUserData(), []);
  useEffect(() => getPosts(), []);

  return (
    <Container>
      <StatusBar backgroundColor={colors.BLACK_SECONDARY} />
      <HeaderCustom
        title="iPosts"
        iconRight={<SearchIcon {...configIcon} />}
        iconRightAction={() => {}}
      />
      { loadingPosts ? (
        <ContainerLoading>
          <ActivityIndicator size={50} color={colors.BLUE_PRIMARY} />
        </ContainerLoading>
      ) : (
        <ScrollView 
          style={{width: '100%'}}
          showsVerticalScrollIndicator={false}
          endFillColor='#00ff00'
        >
          <SafeArea>
            {posts.map((value, index) => (
              <Post
                author={value.author}
                name={value.name}
                content={value.content}
                createdIn={`${value.createdIn}`}
                likes={value.likes}
                key={value.postId}
                position={index}
              />
            ))}
          </SafeArea>
        </ScrollView>
      )}
      <TabBarCustom />
    </Container>
  );
}
