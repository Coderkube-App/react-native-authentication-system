import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { LogOut, User } from 'lucide-react-native';
import { useAuth } from '../hooks/useAuth';
import { AuthService } from '../services/auth';
import { UserService, UserProfile } from '../services/user';
import { Colors, Typography, Spacing } from '../theme';

const HomeScreen = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      UserService.getUserProfile(user.uid)
        .then((doc) => {
          if (doc.exists) {
            setProfile(doc.data() as UserProfile);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await AuthService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <TouchableOpacity onPress={handleLogout}>
          <LogOut color={Colors.primary} size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <User color={Colors.white} size={40} />
          </View>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.nameText}>
            {profile ? `${profile.firstName} ${profile.lastName}` : 'User'}
          </Text>
          <Text style={styles.emailText}>{user?.email}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>Verified</Text>
            <Text style={styles.statLabel}>Status</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>Premium</Text>
            <Text style={styles.statLabel}>Account</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.lg,
    backgroundColor: Colors.white,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
  },
  content: {
    flex: 1,
    padding: Spacing.lg,
  },
  profileCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: Spacing.xl,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    marginBottom: Spacing.lg,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  welcomeText: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginVertical: 4,
  },
  emailText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: Spacing.md,
    alignItems: 'center',
    marginHorizontal: Spacing.xs,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
});

export default HomeScreen;