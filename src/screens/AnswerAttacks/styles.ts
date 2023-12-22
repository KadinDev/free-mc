import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    position: relative;
`;

export const TitlePage = styled.Text`
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(18)}px;
    margin-top: 5px;
    text-align: center;
    color: ${({theme}) => theme.COLORS.TEXT};
    text-transform: lowercase;
`;

export const TotalPalavras = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.COLORS.PLACEHOLDER};
    text-transform: lowercase;
    text-align: center;
    margin-bottom: 5px;
`;

export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_HEADER};
`;

export const DiVButtons = styled.View`
    position: absolute;
    right: ${RFValue(20)}px;
    bottom: ${getBottomSpace() + RFValue(30)}px;
`;

export const ButtonControlPalavra = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    border-radius: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_HEADER};
    margin-top: ${RFValue(20)}px;
`;

export const DivCountdown = styled.View`
    flex-direction: column;
    align-items: center;
    margin: ${RFValue(10)}px 0;
`;

export const TitleCountdown = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.COLORS.PLACEHOLDER};
    text-transform: uppercase;
`;

export const Countdown = styled.Text`
    font-size: ${RFValue(50)}px;
    color: ${({theme}) => theme.COLORS.TEXT};
`;

export const DivPalavraAleatoria = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
`;

export const PalavraAleatoria = styled.Text`
    font-size: ${RFValue(18)}px;
    line-height: ${RFValue(22)}px;
    text-align: center;
    color: ${({theme}) => theme.COLORS.TEXT};
    text-transform: uppercase;
    padding: 0 ${RFValue(20)}px;
`;

export const DiVSound = styled.View`
    position: absolute;
    left: ${RFValue(20)}px;
    bottom: ${getBottomSpace() + RFValue(30)}px;
`;

export const ButtonChangeSound = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    border-radius: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_HEADER};
`;


export const ModalMusics = styled.Modal.attrs({
    transparent: true,
    animationType: 'slide',
})`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_TRANSPARENT};
`;

export const ViewBeats = styled.View`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_HEADER};
    height: ${RFValue(40)}px;
    padding: 0 ${RFValue(5)}px;
    width: 100%;
    position: relative;
    justify-content: center;
`;

export const ButtonItemBeat = styled.TouchableOpacity.attrs({
    activeOpacity: 0.5,
})``;

export const NameBeat = styled.Text`
    color: ${({theme}) => theme.COLORS.LIME_DARK};
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.FONTS.TEXT};
    z-index: 1;
    opacity: 0.8;
    text-transform: lowercase;
    width: 85%;
`;

export const ItemSeparator = styled.View`
    width: 100%;
    height: 5px;
`;

export const PreviewMusic = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`
    position: absolute;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    height: ${RFValue(38)}px;
    width: ${RFValue(38)}px;
    align-items: center;
    justify-content: center;
    right: ${RFValue(1)}px;
    border-radius: ${RFValue(4)}px;

`;

export const ShowTitleBeat = styled.View`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_HEADER};
    position: absolute;
    left: ${RFValue(75)}px;
    right: ${RFValue(75)}px;
    bottom: ${getBottomSpace() + RFValue(30)}px;
    height: ${RFValue(40)}px;
    align-items: flex-start;
    justify-content: center;
    padding-left: ${RFValue(10)}px;
    border-radius: ${RFValue(5)}px;
`;