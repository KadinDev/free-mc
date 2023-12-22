import styled from "styled-components/native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const HeaderContainer = styled.View`
    width: 100%;
    height: ${RFValue(150)}px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${getStatusBarHeight() + RFValue(25)}px ${RFValue(24)}px ${RFValue(20)}px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_HEADER};
    border-bottom-width: 5px;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_TRANSPARENT};
`;

export const Greeting = styled.View`
    flex-direction: column;
    align-items: center;
    z-index: 10;
`;

export const GreetingVip = styled.Image`
    height: ${RFValue(50)}px;
    width: ${RFValue(50)}px;
`;

export const GreetingText = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.COLORS.TEXT};
    font-family: ${({theme}) => theme.FONTS.TEXT};
`;

export const DivImageUser = styled.View`
    height: ${RFValue(60)}px;
    width: ${RFValue(60)}px;
    border-radius: ${RFValue(30)}px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    align-items: center;
    justify-content: center;
    z-index: 10;
`;

export const ImageUser = styled.Image.attrs({
    resizeMode: 'cover'
})`
    height: ${RFValue(50)}px;
    width: ${RFValue(50)}px;
    border-radius: ${RFValue(25)}px;
`;

export const RaioHeader = styled.Image.attrs({
    resizeMode: 'cover'
})`
    left: ${RFValue(-40)}px;
    position: absolute;
    z-index: 0;
    opacity: 0.2;
    height: ${RFValue(50)}px;
`;