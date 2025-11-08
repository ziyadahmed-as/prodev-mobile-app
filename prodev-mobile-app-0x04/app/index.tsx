import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { styles } from '@/styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '@/constants';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={BACKGROUNDIMAGE} 
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome</Text>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit, sed do eiusmod tempor
            </Text>
          </View>
        </View>

        <View style={{ flex: 1 }} />

        <View style={styles.buttonGroup}>
          <TouchableOpacity 
            style={styles.buttonPrimary}
            onPress={() => router.push('/join')}
          >
            <Text style={styles.buttonPrimaryText}>Join Now</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.buttonSecondary}
            onPress={() => router.push('/signin')}
          >
            <Text style={styles.buttonSecondaryText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonGroupSubText}>
          <Text style={styles.titleSubText}>
            By continuing, you agree to our{'\n'}Terms of Service & Privacy Policy
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}