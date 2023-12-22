import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

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
    z-index: 10;
`;