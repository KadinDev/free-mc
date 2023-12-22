import React from 'react';
import {
  Container,
  TitlePage,
  TotalPalavras,
  Separator,
  ViewBeats,
  NameBeat,
  ItemSeparator,
} from './styles';

import { RFValue } from 'react-native-responsive-fontsize';
import { HeaderGoBackPages } from '@components/HeaderGoBackPages';
import { Beat } from '@components/Beat';
import { beats } from '@utils/beats/relax';
import {FlatList, View} from 'react-native';

export function ListBeats(){

  return (
    <Container >
      <HeaderGoBackPages title='Voltar'/>
      <TitlePage> Lista de Beats </TitlePage>
      <TotalPalavras> {beats.length} Beats para seu treino </TotalPalavras>
      <Separator/>

      <FlatList
          data={beats}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (

            <ViewBeats key={item.id}>
              <NameBeat numberOfLines={1}> {item.title} </NameBeat>
              <Beat audioSource={item.audioUrl} />
            </ViewBeats>
          ) }

          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: RFValue(20),
            paddingBottom: RFValue(60),
            paddingTop: RFValue(20),
          }}
          ItemSeparatorComponent={() => <ItemSeparator/> }
        />

    </Container>
  );
}


