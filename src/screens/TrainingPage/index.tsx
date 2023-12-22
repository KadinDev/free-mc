import React from "react";
import { View, Text } from 'react-native';

import { PalavrasScreen } from '@screens/PalavrasScreen';
import { QuestionsRes } from '@screens/QuestionsRes';
import { ThemesTraining } from '@screens/Themes';
import { AnswerAttacks } from '@screens/AnswerAttacks';
import { Challenges } from '@screens/Challenges';

import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
    TrainingPage: { screenName: string };
}

type TrainingPageRouteProp = RouteProp<RootStackParamList, 'TrainingPage'>;

type Props = {
  route: TrainingPageRouteProp;
};

export function TrainingPage({ route } : Props) {

    const { screenName } = route.params;

    // Função para carregar o conteúdo com base no screenName
    function loadContent() {
        switch (screenName) {
            case 'palavrasScreen': return <PalavrasScreen/>;
            case 'questionsRes': return <QuestionsRes/>;
            case 'themes': return <ThemesTraining/>;
            case 'answerAttacks': return <AnswerAttacks/>;
            case 'challenges': return <Challenges/>;
            
            default: return <Text>Conteúdo não encontrado</Text>;
        }
    }

    return (
        <>
            {loadContent()}
        </>
    );
}
