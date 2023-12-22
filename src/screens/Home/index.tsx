
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {
  Container
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { Header } from '@components/Header';

import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';
import { MaterialIcons } from '@expo/vector-icons';

export function Home(){
  const navigation = useNavigation();

  return (
    <Container>
      <Header/>
      
      <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      >

        <Text
        style={{color: theme.COLORS.PLACEHOLDER, fontSize: RFValue(20), fontFamily: theme.FONTS.TEXT, 
          marginBottom: RFValue(50), textAlign: 'center', textTransform: 'uppercase' }}
        > página HOME {'\n'}em contrução, {'\n'} AGUARDEM! </Text>

        <TouchableOpacity 
          onPress={() => navigation.navigate('training')}
          activeOpacity={0.8}
          style={{backgroundColor: theme.COLORS.LIME_DARK, height: RFValue(40), alignItems: 'center',
          justifyContent: 'center', width: '50%', borderRadius: RFValue(5) }}
        >
          <Text
            style={{color: theme.COLORS.TEXT, fontSize: RFValue(16), textTransform: 'uppercase',
          fontFamily: theme.FONTS.TEXT}}
          > Ir para treino </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('battle')}
          activeOpacity={0.8}
          style={{backgroundColor: theme.COLORS.BACKGROUND_HEADER, height: RFValue(60), alignItems: 'center',
          justifyContent: 'center', width: RFValue(60), borderRadius: RFValue(30), position: 'absolute',
          bottom: RFValue(40)
          }}
        >
          <MaterialIcons
            name='public'
            size={RFValue(30)}
            color={theme.COLORS.TEXT}
          />
        </TouchableOpacity>


      </View>
    
    </Container>
  );
}


