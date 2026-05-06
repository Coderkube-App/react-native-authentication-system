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
import { Mail, Lock, User } from 'lucide-react-native';
import { AuthService } from '../services/auth';
import { UserService } from '../services/user';
import { Colors, Typography, Spacing } from '../theme';
import Input from '../components/Input';
import Button from '../components/Button';

type NavigationProp = StackNavigationProp<any, 'Register'>;

const RegisterScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const userCredential = await AuthService.register(email.trim(), password);
      const { user } = userCredential;
      
      await UserService.createUserProfile(user.uid, {
        uid: user.uid,
        email: user.email!,
        firstName,
        lastName,
      });

      // Navigation is handled by the RootNavigator auth state listener
    } catch (error: any) {
      Alert.alert('Registration Failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.secondary]}
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
              <TouchableOpacity 
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.backText}>← Back</Text>
              </TouchableOpacity>
              <Text style={Typography.h1}>Create Account</Text>
              <Text style={Typography.subtitle}>Join us today!</Text>
            </Animated.View>

            <Animated.View 
              entering={FadeInDown.delay(400).duration(1000).springify()}
              style={styles.form}
            >
              <View style={styles.nameRow}>
                <View style={styles.flex}>
                  <Input
                    label="First Name"
                    placeholder="John"
                    value={firstName}
                    onChangeText={setFirstName}
                    icon={<User color={Colors.white70} size={20} />}
                  />
                </View>
                <View style={styles.spacer} />
                <View style={styles.flex}>
                  <Input
                    label="Last Name"
                    placeholder="Doe"
                    value={lastName}
                    onChangeText={setLastName}
                    icon={<User color={Colors.white70} size={20} />}
                  />
                </View>
              </View>

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
                title="REGISTER"
                onPress={handleRegister}
                loading={loading}
                style={styles.registerButton}
              />

              <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.footerLink}>Login</Text>
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
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.xxl,
  },
  header: {
    marginBottom: Spacing.xl,
  },
  backButton: {
    marginBottom: Spacing.lg,
  },
  backText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  form: {
    width: '100%',
  },
  nameRow: {
    flexDirection: 'row',
  },
  spacer: {
    width: Spacing.md,
  },
  registerButton: {
    marginTop: Spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.xl,
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

export default RegisterScreen;