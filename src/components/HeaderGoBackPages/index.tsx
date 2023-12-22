import React from "react";
import { 
    HeaderContainer,
    BackButton,
    IconBackButton,
    Title
} from './styles';

import theme from "../../../src/theme";
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string
}

export function HeaderGoBackPages({title} : HeaderProps){
    const navigation = useNavigation();

    return (
        <HeaderContainer>
            <BackButton onPress={() => navigation.goBack()}>
                <IconBackButton name='arrow-back' size={25} color={theme.COLORS.TEXT} />
            </BackButton>

            <Title> {title} </Title>
        </HeaderContainer>
    )
}