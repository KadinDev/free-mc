import styled from "styled-components/native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';

export const HeaderContainer = styled.View`
    width: 100%;
    height: ${RFValue(100)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${getStatusBarHeight() + RFValue(25)}px ${RFValue(24)}px ${RFValue(20)}px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_HEADER};
    border-bottom-width: 5px;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_TRANSPARENT};
`;

export const BackButton = styled.TouchableOpacity``;

export const IconBackButton = styled(MaterialIcons)``;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT};
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.FONTS.TEXT};
    text-transform: uppercase;
`;