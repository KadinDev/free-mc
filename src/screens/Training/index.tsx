import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';

import { 
    Container,
    ScrollItems,
    Item,
    BackgroundButton,
    ButtonNavigation,
    TitleButtonNavigation
} from './styles';

import { useNavigation } from '@react-navigation/native'
import { trainingNavigation } from '@utils/navigationTraining';
import { HeaderGoBackPages } from '@components/HeaderGoBackPages';
import { Header } from '@components/Header';

import people from '@assets/festa.png';
import { RFValue } from "react-native-responsive-fontsize";
import theme from '../../theme';
import { MaterialIcons } from '@expo/vector-icons';
 
export function Training(){
    const navigation = useNavigation();
    
    function handleNavigation(screenName: string) {
        navigation.navigate('pageTraining', { screenName });
    }
    
    return (
        <>
        {/* 
        <HeaderGoBackPages title="Escolha seu treino" />
        */}
        
        <Header />

        <ScrollItems>
            <Container>
                {trainingNavigation.map(item => (
                    <Item key={item.id}>
                        <BackgroundButton source={people}>
                            <ButtonNavigation
                                onPress={() => handleNavigation(
                                    item.navigation as keyof ReactNavigation.RootParamList
                                )
                            }>
                                <TitleButtonNavigation> {item.name} </TitleButtonNavigation>
                            </ButtonNavigation>
                        </BackgroundButton>
                    </Item>
                ))}
            </Container>
        </ScrollItems>
        
        <View
        style={{height: RFValue(40), backgroundColor: theme.COLORS.BACKGROUND_HEADER, width: '100%',
        alignItems: 'center', justifyContent: 'space-between', position: 'relative', flexDirection: 'row',
        paddingHorizontal: RFValue(20) }}
        >
            <TouchableOpacity
            style={{position: 'absolute', top: RFValue(-35), backgroundColor: theme.COLORS.BLUE,
            height: RFValue(40), width: RFValue(40), borderRadius: RFValue(20), alignItems: 'center',
            justifyContent: 'center', left: '50%' }}
            activeOpacity={0.8}

            onPress={() => navigation.navigate('listbeats')}
            >
                <MaterialIcons name='music-note' size={RFValue(20)} color={theme.COLORS.TEXT} />
            </TouchableOpacity>
            
            <Text style={{color: theme.COLORS.PLACEHOLDER,
            fontFamily: theme.FONTS.TEXT, fontSize: RFValue(14)}}> em breve mais desafios e mais beats </Text>

            <TouchableOpacity
            style={{
            height: RFValue(20), width: RFValue(20), borderRadius: RFValue(20), alignItems: 'center',
            justifyContent: 'center' }}
            activeOpacity={0.8}

            onPress={() => navigation.navigate('about')}
            >
                <MaterialIcons name='info' size={RFValue(20)} color={theme.COLORS.TEXT} />
            </TouchableOpacity>

        </View>
        </>
    )
}