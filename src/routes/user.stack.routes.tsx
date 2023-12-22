import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PalavrasScreen } from '@screens/PalavrasScreen';
import { QuestionsRes } from '@screens/QuestionsRes';
import { ThemesTraining } from '@screens/Themes';
import { AnswerAttacks } from '@screens/AnswerAttacks';
import { Challenges } from '@screens/Challenges';

import { Signin } from '@screens/Signin';
import { Home } from '@screens/Home';
import { Battle } from '@screens/Battle';
import { Training } from '@screens/Training';
import { TrainingPage } from '@screens/TrainingPage';
import { ListBeats } from '@screens/ListBeats';
import { About } from '@screens/About';

const { Navigator, Screen, Group } = createNativeStackNavigator();

export function UserStackRoutes(){
    return (
        <Navigator 
            screenOptions={{ headerShown: false }}
            initialRouteName="training"
        >
            <Group>
                <Screen name='home' component={Home} />
                
                <Screen name='training' component={Training} />
                <Screen name='pageTraining' component={TrainingPage} />

                <Screen name='palavrasScreen' component={PalavrasScreen} />
                <Screen name='questionsRes' component={QuestionsRes} />
                <Screen name='themes' component={ThemesTraining} />
                <Screen name='answerAttacks' component={AnswerAttacks} />
                <Screen name='challenges' component={Challenges} />
                <Screen name='listbeats' component={ListBeats} />
                <Screen name='about' component={About} />

                <Screen name='battle' component={Battle} />

            </Group>
        </Navigator>
    )
}