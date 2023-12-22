import React from 'react';
import {
  Container,
  TitlePage,
  Info
} from './styles';

import {ScrollView, View} from 'react-native';
import { HeaderGoBackPages } from '@components/HeaderGoBackPages';
import { RFValue } from 'react-native-responsive-fontsize';

export function About(){

  return (
    <Container>
      <HeaderGoBackPages title='Voltar' />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: RFValue(20), paddingHorizontal: RFValue(20) }}
      >
        <TitlePage> Freestyle mc </TitlePage>

        <Info>
          Bem-vindo ao "Freestyle mc", o aplicativo perfeito para aprimorar suas habilidades de freestyle e se tornar um mestre da rima! {'\n\n'}
          Com uma ampla variedade de recursos incríveis, este aplicativo foi cuidadosamente projetado para ajudar você a aperfeiçoar sua arte de improvisar rimas. {'\n\n'}
          Explore mais de 50 beats exclusivos que oferecem a base perfeita para você praticar sua fluência e ritmo.{'\n'}
          Mas não para por aí! "Freestyle mc" vai além dos treinos básicos. {'\n\n'} 
          Desafie-se com nossos desafios especiais, projetados para estimular sua criatividade e ajudá-lo a desenvolver suas habilidades de improviso.{'\n\n'} 
          Responda perguntas, rime sobre temas específicos, enfrente ataques de rima e supere o desafio de combinar as palavras mostradas na tela.{'\n\n'} 
          Cada desafio proporciona uma oportunidade única de aprimorar suas habilidades e levar seu freestyle a um nível superior.{'\n\n'}
          {'\n\n'}
          playlist dos beats:{'\n\n'} 
          https://www.youtube.com/playlist?list=PLOCWh-zJvo62hSLZmTX9ii3cqi1wwaTOE
          

        </Info>
      
      </ScrollView>

    </Container>
  );
}


