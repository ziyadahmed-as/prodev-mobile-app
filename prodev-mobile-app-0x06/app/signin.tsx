import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { styles } from '@/styles/_joinstyle';
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '@/constants';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView style={styles.container}> 
      {/* Header with back button and logo */}
      <View style={styles.iconsection}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text>←</Text>
        </TouchableOpacity>
        <Image source={HEROLOGOGREEN} />
        <View style={{ width: 24 }} />
      </View>

      {/* Title Section */}
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Sign In</Text>
        <Text style={styles.subText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </Text>
      </View>

      {/* Form Section */}
      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.formControl}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              style={styles.passwordControl}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text style={{ color: '#34967C' }}>{showPassword ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Login Buttons */}
      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#4285F4' }]}>
          <Image source={GOOGLELOGO} />
          <Text style={[styles.secondaryButtonText, { color: '#4285F4' }]}>
            Continue with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#3B5998' }]}>
          <Image source={FACEBOOKLOGO} />
          <Text style={[styles.secondaryButtonText, { color: '#3B5998' }]}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>
      </View>

      {/* Join Now Link */}
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}> Dont have account ? </Text>
        <TouchableOpacity onPress={() => router.push('/join')}>
          <Text style={styles.signupSubTitleText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}