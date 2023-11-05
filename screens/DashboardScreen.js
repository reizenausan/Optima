import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';

const DashboardContent = () => {
  return (
    <View style={styles.rightContainer}>
      {/* Content for Dashboard */}
      {/* You can add your main content here */}
    </View>
  );
};

const CreatePatientContent = () => {
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const navigation = useNavigation();

  const handleCreatePatient = () => {
    // Here, you can implement the logic to create a patient with the provided data
    // For simplicity, we'll just display an alert with the patient details
    alert(`Patient Name: ${patientName}\nPatient Age: ${patientAge}`);
    
    // You can replace the alert with your actual API call or data storage logic.
  };

  return (
    <View style={styles.rightContainer}>
      <Text style={styles.label}>Patient Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter patient name"
        value={patientName}
        onChangeText={(text) => setPatientName(text)}
      />

      <Text style={styles.label}>Patient Age</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter patient age"
        value={patientAge}
        onChangeText={(text) => setPatientAge(text)}
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={handleCreatePatient}>
        <Text style={styles.createButton}>Create Patient</Text>
      </TouchableOpacity>
    </View>
  );
};

const UpdatePatientContent = () => {
  const [updatedPatientName, setUpdatedPatientName] = useState('');
  const [updatedPatientAge, setUpdatedPatientAge] = useState('');
  const navigation = useNavigation();

  const handleUpdatePatient = () => {
    // Here, you can implement the logic to update a patient with the provided data
    // For simplicity, we'll just display an alert with the updated patient details
    alert(`Updated Patient Name: ${updatedPatientName}\nUpdated Patient Age: ${updatedPatientAge}`);
    
    // You can replace the alert with your actual API call or data storage logic.
  };

  return (
    <View style={styles.rightContainer}>
      <Text style={styles.label}>Updated Patient Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter updated patient name"
        value={updatedPatientName}
        onChangeText={(text) => setUpdatedPatientName(text)}
      />

      <Text style={styles.label}>Updated Patient Age</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter updated patient age"
        value={updatedPatientAge}
        onChangeText={(text) => setUpdatedPatientAge(text)}
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={handleUpdatePatient}>
        <Text style={styles.updateButton}>Update Patient</Text>
      </TouchableOpacity>
    </View>
  );
};

const DeletePatientContent = () => {
  const [patientId, setPatientId] = useState('');
  const navigation = useNavigation();

  const handleDeletePatient = () => {
    // Here, you can implement the logic to delete a patient with the provided patientId
    // For simplicity, we'll just display an alert that the patient has been deleted
    alert(`Patient with ID ${patientId} has been deleted`);
    
    // You can replace the alert with your actual delete logic.
  };

  return (
    <View style={styles.rightContainer}>
      <Text style={styles.label}>Patient ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter patient ID"
        value={patientId}
        onChangeText={(text) => setPatientId(text)}
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={handleDeletePatient}>
        <Text style={styles.deleteButton}>Delete Patient</Text>
      </TouchableOpacity>
    </View>
  );
};

const TabSettings = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Here, you can implement the logic to log out the user
    // For simplicity, we'll just navigate to the login screen
    navigation.navigate('Login');
    
    // You can replace this with your actual logout logic.
  };

  return (
    <View style={styles.tabSettings}>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logoutButton}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};




const Tab = createMaterialTopTabNavigator();

const DashboardScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Dashboard"
        tabBarOptions={{
          style: { backgroundColor: '#D1EAF0' },
          labelStyle: { fontWeight: 'bold' },
        }}
      >
        <Tab.Screen name="Dashboard" component={DashboardContent} />
        <Tab.Screen name="Create Patient" component={CreatePatientContent} />
        <Tab.Screen name="Update Patient" component={UpdatePatientContent} />
        <Tab.Screen name="Delete Patient" component={DeletePatientContent} />
        <Tab.Screen
          name="TabSettings"
          component={TabSettings}
          options={{ tabBarLabel: 'Settings' }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({


  createButton: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    marginTop: 10,
  },

  updateButton: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    marginTop: 10,
  },

  deleteButton: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  leftContainer: {
    flex: 1,
    backgroundColor: '#D1EAF0',
    borderRightWidth: 1,
    borderRightColor: 'gray',
    padding: 16,
  },
  rightContainer: {
    flex: 1,
    padding: 16,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  activeMenuItem: {
    backgroundColor: 'white',
    marginLeft: 0,
    marginBottom: 0,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
 container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  label: {
    fontSize: 16,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 16,
    padding: 8,
    marginBottom: 16,
  },
  patientCard: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginBottom: 16,
  },
});

export default DashboardScreen;
