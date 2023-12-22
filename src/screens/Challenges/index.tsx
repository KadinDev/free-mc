import React, { useEffect, useState } from 'react';
import {
  Container,
  TitlePage,
  TotalPalavras,
  Separator,
  ButtonControlPalavra,
  DivCountdown,
  TitleCountdown,
  Countdown,
  DiVButtons,
  DivPalavraAleatoria,
  PalavraAleatoria,
  DiVSound,
  ButtonChangeSound,
  ModalMusics,
  ViewBeats,
  ButtonItemBeat,
  NameBeat,
  ItemSeparator,
  ShowTitleBeat
} from './styles';

import theme from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

import { challenges } from '../../utils/Challenge';
import { HeaderGoBackPages } from '@components/HeaderGoBackPages';
import { MaterialIcons } from '@expo/vector-icons';
import { Beat } from '@components/Beat';

import { beats } from '@utils/beats/relax';
import {FlatList, View} from 'react-native';
import * as Notix from 'notix-rn';

type SoundProps = {
  id?: string;
  title?: string;
  audioUrl: string;
}

export function Challenges(){

  const [challengeAtual, setChallengeAtual] = useState('');
  const [isAutomatic, setIsAutomatic] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SoundProps | null>(null);

  let interstitialLoader: Notix.InterstitialLoader;

    useEffect(() => {
        loadInterstitial();

        //initializePushNotifications();
    }, []);

    const loadInterstitial = async () => {
        interstitialLoader = await Notix.Interstitial.createLoader(6641847);
        interstitialLoader.startLoading();

        try {
            var interstitialData = await interstitialLoader.next(5000);
        } 
        catch (Exception) {
            return;
        }

        Notix.Interstitial.show(interstitialData);
    };
 
  useEffect(() => {
    if(isAutomatic){
      const interval = setInterval(() => {
        const indiceAleatorio = Math.floor(Math.random() * challenges.length);
        const palavraAleatoria = challenges[indiceAleatorio];
        setChallengeAtual(palavraAleatoria);
      }, 30000);
      
      const countdownInterval = handleCountdown();

      return () => {
        clearInterval(interval);
        clearInterval(countdownInterval);
      } 
    }
  },[isAutomatic, challengeAtual]);

  function handleNextPalavra(){
    const indiceAleatorio = Math.floor(Math.random() * challenges.length);
    const palavraAleatoria = challenges[indiceAleatorio];
    setChallengeAtual(palavraAleatoria);
  }

  function handleCountdown() {
    let seconds = 30;
    
    setCountdown(seconds);

    const interval = setInterval(() => {
      seconds--;

      if (seconds > 0) {
        setCountdown(seconds);
      } else {
        clearInterval(interval);
        setCountdown(30);
      }
    }, 1000);

    return interval;
  }
  
  function handleItemClick(item : SoundProps){
    setSelectedItem(item);
    setModal(false);
  };

  return (
    <Container >
      <HeaderGoBackPages title='Página de treinamento'/>
      <TitlePage> crie uma rima que comece com a palavra 1,
        e termine com a palvra 2 </TitlePage>
      <TotalPalavras> {challenges.length} desafios </TotalPalavras>
      <Separator/>
  
      {isAutomatic && 
        <DivCountdown>
          <TitleCountdown> proxima desafio em </TitleCountdown>
          <Countdown> {countdown} </Countdown> 
        </DivCountdown>
      }

      <DivPalavraAleatoria>
        <PalavraAleatoria> {challengeAtual} </PalavraAleatoria>
      </DivPalavraAleatoria>

      <DiVSound>
        <ButtonChangeSound onPress={() => setModal(true)}>
          <MaterialIcons 
              name='music-note' 
              color={theme.COLORS.TEXT}
              size={30} 
            />
        </ButtonChangeSound>
      </DiVSound>

      <DiVButtons>
        {!isAutomatic ? 
          <ButtonControlPalavra onPress={() => setIsAutomatic(true)}>
            <MaterialIcons 
              name='play-arrow' 
              color={theme.COLORS.TEXT}
              size={30} 
            />
          </ButtonControlPalavra>
        :
          <ButtonControlPalavra onPress={() => setIsAutomatic(false)}>
            <MaterialIcons 
              name='stop' 
              color={theme.COLORS.TEXT}
              size={30} 
            />
          </ButtonControlPalavra>
        }

        {!isAutomatic && 
          <ButtonControlPalavra onPress={handleNextPalavra}>
            <MaterialIcons 
              name='skip-next' 
              color={theme.COLORS.TEXT}
              size={30} 
            />
          </ButtonControlPalavra> 
        }
      </DiVButtons>

      {selectedItem && (
        <ShowTitleBeat>
          <NameBeat numberOfLines={1}>{selectedItem.title}</NameBeat>
          {/* key={selectedItem.id} para garantir que o componente
          Beat seja atualizado corretamente */}
          <Beat key={selectedItem.id} audioSource={selectedItem.audioUrl} />
        </ShowTitleBeat>
      )}

      <ModalMusics 
        visible={modal} 
      >
        <View style={{height: RFValue(150)}}/>
        
        <FlatList
          data={beats}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (

            <ViewBeats key={item.id}>
              <ButtonItemBeat
                onPress={() => handleItemClick(item)}
              >
                <NameBeat numberOfLines={1}> {item.title} </NameBeat>
              </ButtonItemBeat>
              
              <Beat audioSource={item.audioUrl} />

            </ViewBeats>
          ) }

          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: RFValue(20),
            paddingBottom: RFValue(40),
          }}
          ItemSeparatorComponent={() => <ItemSeparator/> }
        />
          
      </ModalMusics>

    </Container>
  );
}


