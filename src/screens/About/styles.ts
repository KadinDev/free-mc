import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const TitlePage = styled.Text`
    font-size: ${RFValue(18)}px;
    line-height: ${RFValue(20)}px;
    margin-bottom: ${RFValue(20)}px;
    text-align: center;
    color: ${({theme}) => theme.COLORS.TEXT};
    text-transform: uppercase;
`;

export const Info = styled.Text`
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(18)}px;
    margin-top: ${RFValue(10)}px;
    text-align: justify;
    color: ${({theme}) => theme.COLORS.PLACEHOLDER};
    padding-bottom: ${RFValue(80)}px;
`;

