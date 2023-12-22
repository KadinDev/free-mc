import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal } from 'react-native';
import { Audio } from 'expo-av';

import { beats } from '../../utils/beats/relax';

export function Teste(){
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [selectedSound, setSelectedSound] = useState('');
  const [nameSelected, setNameSelected] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Carrega a música quando o componente for montado
    const loadSound = async () => {
      if (selectedSound) {
        const { sound } = await Audio.Sound.createAsync({ uri: selectedSound });
        setSound(sound);
      }
    };

    loadSound();

    // Limpa a música quando o componente for desmontado
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [selectedSound]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const playSound = async () => {
    if (sound) {
      await sound.playAsync();
    }
  };


  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
    }
  };


  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={openModal} style={styles.button}>
        <Text style={styles.buttonText}>Modal</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={playSound} style={styles.button}>
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={stopSound} style={styles.buttonStop}>
        <Text style={styles.buttonText}>Stop</Text>
      </TouchableOpacity>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          {beats.map((sound, index) => (
            <TouchableOpacity
              key={index}
              style={styles.soundButton}
              onPress={() => {
                setSelectedSound(sound.audioUrl);
                closeModal();
              }}
            >
              <Text style={styles.soundButtonText}>{sound.title}</Text>
              
            </TouchableOpacity>
          ))}
        </View>
      </Modal>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#e91e63',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonStop: {
    marginTop: 10,
    backgroundColor: '#e91e63',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  soundButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
  },
  soundButtonText: {
    color: '#000',
    fontSize: 16,
  },
  
});

