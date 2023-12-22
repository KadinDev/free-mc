import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {
  Container
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { Header } from '@components/Header';

import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';

export function Battle(){
  const navigation = useNavigation();

  return (
    <Container>
      <Header/>
      <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: RFValue(100)}}
      >

        <Text
        style={{color: theme.COLORS.PLACEHOLDER, fontSize: RFValue(20), fontFamily: theme.FONTS.TEXT, 
          marginBottom: RFValue(50), textAlign: 'center', textTransform: 'uppercase' }}
        > página Batalha de MCs {'\n'}em contrução, {'\n'} AGUARDEM! </Text>

        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          style={{backgroundColor: theme.COLORS.LIME_DARK, height: RFValue(40), alignItems: 'center',
          justifyContent: 'center', width: '50%', borderRadius: RFValue(5) }}
        >
          <Text
            style={{color: theme.COLORS.TEXT, fontSize: RFValue(16), textTransform: 'uppercase',
          fontFamily: theme.FONTS.TEXT}}
          > Voltar </Text>
        </TouchableOpacity>   
      </View>
    </Container>
  );
}


