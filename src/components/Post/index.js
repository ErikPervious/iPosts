import React, { useContext, useState, useEffect } from "react";
import { 
  MoreVertical as MoreVerticalIcon,
  Heart as HeartIcon,
  Send as SendIcon
} from 'react-native-feather';

import firestore from '@react-native-firebase/firestore';

import { FirebaseContext } from "../../contexts/useFirebase";

import { 
  Button,
  Container, 
  ContainerFooter, 
  ContainerFooterLeft, 
  ContainerHeader, 
  ContainerHeaderLeft,
  ContainerMain,
  FooterAmountOfLikes,
  FooterPublicationTime,
  HeaderAvatar,
  HeaderTitle,
  MainText
} from "./styled";
import { colors } from "../../styles";

export function Post({author, name, content, likes, createdIn, postId}) {
  const [likesPost, setLikesPost] = useState(likes);
  const [isLikedForMe, setIsLikedForMe] = useState(false);

  const { user } = useContext(FirebaseContext);

  function likePost() {
    likesPost.findIndex((element) => element === user.uid)
    ? (
      firestore().collection('Posts').doc(postId)
      .update({ likes: [user.uid, ...likesPost] })
      .then(() => {
        setLikesPost(oldValue => [user.uid, ...oldValue]);
      })
    ) : (
      firestore().collection('Posts').doc(postId)
      .update({ likes: likesPost.filter(e => e !== user.uid) })
      .then(() => {
        setLikesPost(likesPost.filter(e => e !== user.uid));
      })
    );
  };

  function navigationToUserPost() {
  };

  useEffect(() => {
    function isLiked() {
      const liked = likesPost.findIndex((element) => element === user.uid);
      if(liked !== -1) {
        return setIsLikedForMe(true);
      }
      setIsLikedForMe(false);
    };
    isLiked();
  }, [likesPost]);

  return (
    <Container>
      <ContainerHeader>
        <ContainerHeaderLeft>
          <HeaderAvatar
            source={require('../../assets/images/avatar.png')}
          />
          <Button onPress={navigationToUserPost}>
            <HeaderTitle>{name}</HeaderTitle>
          </Button>
        </ContainerHeaderLeft>
        <Button>
          <MoreVerticalIcon 
            width={27}
            height={27}
            color={colors.WHITE_SECONDARY}
          />
        </Button>
      </ContainerHeader>
      <ContainerMain>
        <MainText>{content}</MainText>
      </ContainerMain>
      <ContainerFooter>
        <ContainerFooterLeft>
          <Button onPress={likePost}>
            <HeartIcon 
              width={27} 
              height={27} 
              fill={isLikedForMe ? "#961818" : "#96181850"}
            />
          </Button>
          <FooterAmountOfLikes>{likesPost.length}</FooterAmountOfLikes>
          <Button onPress={() => alert('teste')}>
            <SendIcon 
              width={24}
              height={24}
              color={colors.WHITE_SECONDARY}
            />
          </Button>
        </ContainerFooterLeft>
        <FooterPublicationTime>{createdIn}</FooterPublicationTime>
      </ContainerFooter>
    </Container>
  )
}