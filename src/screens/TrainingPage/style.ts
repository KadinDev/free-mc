import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { ImageBackground } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Item = styled.View`
    width: 100%;
    margin-top: ${RFValue(10)}px;
    align-items: center;
`;

export const BackgroundButton = styled(ImageBackground).attrs({
    resizeMode: 'cover'
})`
`;

export const ButtonNavigation = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`
    height: ${RFValue(40)}px;
    width: ${RFValue(300)}px;
    align-items: center;
    justify-content: center;
`;

export const TitleButtonNavigation = styled.Text`
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(16)}px;
    color: ${({theme}) => theme.COLORS.TEXT};
    font-family: ${({theme}) => theme.FONTS.TEXT};
    text-transform: uppercase;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_HEADER};
    padding: ${RFValue(6)}px ${RFValue(20)}px;
    border-radius: ${RFValue(5)}px;
`;