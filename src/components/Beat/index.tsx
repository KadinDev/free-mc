import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import {
    PreviewMusic
} from './styles';

import { Audio } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

interface AudioPlayerProps {
    audioSource: string;
}

export function Beat({audioSource} : AudioPlayerProps){
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        return () => {
        if (sound) {
            sound.unloadAsync();
        }
        };
    }, [sound]);

    
    async function handlePlayPause(){
        try {
            if(sound){
                if (isPlaying){
                    await sound.pauseAsync();
                    await sound.setPositionAsync(0);
                } else {
                    await sound.playAsync();
                }
                setIsPlaying(!isPlaying);
            } else {
                setIsLoading(true); // quando der play o ActivityIndicator começa
                const { sound: audioSound } = await Audio.Sound.createAsync({ uri: audioSource });
                setSound(audioSound);
                await audioSound.playAsync();
                setIsPlaying(true);
                setIsLoading(false); // quando a música carregar o ActivityIndicator para
            }
        } catch (error) {
            console.log('Error playing audio:', error);
            setIsLoading(false)
        }
    }
    

    return (
        <PreviewMusic
            onPress={handlePlayPause}
        >
            {isLoading ? (
                <ActivityIndicator
                    size={RFValue(30)}
                    color={theme.COLORS.LIME_DARK}
                />
            ) : (
                <MaterialIcons 
                    name={isPlaying ? 'stop' : 'play-arrow'} 
                    color={isPlaying ? theme.COLORS.RED1 : theme.COLORS.LIME_DARK}
                    size={RFValue(30)} 
                />
            )}
            
        
        </PreviewMusic>
    );
};

