import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';

import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  });

  if(!fontsLoaded){
    return <ActivityIndicator size={30} color={theme.COLORS.TEXT} />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent backgroundColor='transparent' />
      
      <Routes/>

    </ThemeProvider>
  );
}


