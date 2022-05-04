import React, { useContext, useState } from 'react';
import { 
  TouchableWithoutFeedback, 
  Keyboard,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Send as SendIcon } from 'react-native-feather';

import firestore from '@react-native-firebase/firestore';

import { HeaderCustom } from '../../components/HeaderCustom';

import { FirebaseContext } from '../../contexts/useFirebase';

import { configIcon } from '../../utils/configIcon';
import { randomKey } from '../../utils/randomKey';

import { 
  CharactersText, 
  Container, 
  ContainerCharacters, 
  ContainerInput, 
  Input 
} from './styled';
import { colors } from '../../styles';

export function NewPost() {
  const [content, setContent] = useState('');
  const [loadingAddPost, setLoadingAddPost] = useState(false);

  const { user } = useContext(FirebaseContext);
  const navigation = useNavigation();

  function addPost() {
    Keyboard.dismiss();
    if(content === '') {
      alert('Digite algo antes de postar.');
      return;
    };
    setLoadingAddPost(true);

    const postId = randomKey();
    const post = {
      author: user.uid,
      content: content,
      createdIn: new Date(),
      likes: 0,
      name: user.name,
      postId: postId
    };

    firestore().collection('Posts').doc(postId).set(post)
    .then(() => {
      setLoadingAddPost(false);
      setContent('');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    })
    .catch(error => {
      setLoadingAddPost(false);
      setContent('');
      console.log(error);
    });

  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <HeaderCustom
          buttonLeftIsVisible={true}
          title="Novo Post"
          iconRight={
            loadingAddPost 
              ? <ActivityIndicator color={colors.WHITE_SECONDARY} size={30} /> 
              : <SendIcon {...configIcon} />
          }
          iconRightAction={addPost}
          iconRightIsLoading={loadingAddPost}
        />
        <ContainerInput>
          <Input
            value={content}
            onChangeText={value => setContent(value)}
            placeholder="Digite seu post aqui..."
            placeholderTextColor={`${colors.WHITE_SECONDARY}50`}
            multiline={true}
            maxLength={300}
            selectionColor={colors.BLUE_PRIMARY}
            autoCorrect={true}
          />
        </ContainerInput>
        <ContainerCharacters>
          <CharactersText>
            {content.length}/300
          </CharactersText>
        </ContainerCharacters>
      </Container>
    </TouchableWithoutFeedback>
  );
}
