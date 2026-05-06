import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Mail, Lock } from 'lucide-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthService } from '../services/auth';
import { Colors, Typography, Spacing } from '../theme';
import Input from '../components/Input';
import Button from '../components/Button';

type NavigationProp = StackNavigationProp<any, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      await AuthService.login(email.trim(), password);
    } catch (error: any) {
      Alert.alert('Login Failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={['#6A11CB', '#2575FC']}
      style={styles.container}
    >
      <SafeAreaView style={styles.flex}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.flex}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <Animated.View 
              entering={FadeInDown.delay(200).duration(1000).springify()}
              style={styles.header}
            >
              <Text style={Typography.h1}>Welcome Back</Text>
              <Text style={Typography.subtitle}>Sign in to continue</Text>
            </Animated.View>

            <Animated.View 
              entering={FadeInDown.delay(400).duration(1000).springify()}
              style={styles.form}
            >
              <Input
                label="Email Address"
                placeholder="name@example.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                icon={<Mail color={Colors.white70} size={20} />}
              />

              <Input
                label="Password"
                placeholder="••••••••"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                icon={<Lock color={Colors.white70} size={20} />}
              />

              <Button
                title="LOGIN"
                onPress={handleLogin}
                loading={loading}
              />

              <View style={styles.dividerContainer}>
                <View style={styles.line} />
                <Text style={styles.dividerText}>Or connect with</Text>
                <View style={styles.line} />
              </View>

              <View style={styles.socialContainer}>
                <TouchableOpacity 
                  style={styles.socialButton}
                  onPress={() => AuthService.signInWithGoogle()}
                >
                  <Icon name="google" color={Colors.text} size={24} />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.socialButton}
                  onPress={() => Alert.alert('Info', 'GitHub Sign-In placeholder')}
                >
                  <Icon name="github" color={Colors.text} size={24} />
                </TouchableOpacity>
              </View>

              <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                  <Text style={styles.footerLink}>Register</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.lg,
    justifyContent: 'center',
  },
  header: {
    marginBottom: Spacing.xxl,
  },
  form: {
    width: '100%',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.lg,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.white70,
  },
  dividerText: {
    color: Colors.white70,
    paddingHorizontal: Spacing.md,
    fontSize: 14,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: Spacing.xl,
  },
  socialButton: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Spacing.md,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.md,
  },
  footerText: {
    color: Colors.white70,
    fontSize: 16,
  },
  footerLink: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;