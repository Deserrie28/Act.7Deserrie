import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const LoginForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [message, setMessage] = useState('');
  const navigation = useNavigation(); // Initialize navigation

  const handleAdd = () => {
    // Logic to handle adding the user
    // You can use the entered values (firstName, lastName, username, password, selectedCourse)
    setMessage('User added!'); // Display a message indicating the user was added
  };

  const handleViewStudents = () => {
    // Navigate to the student list screen when the button is pressed
    navigation.navigate('StudentList');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <Picker
        selectedValue={selectedCourse}
        style={{ height: 40, width: 180, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10}}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
      >
        <Picker.Item label="Select Course" value="" />
        <Picker.Item label="Course BSIT" value="courseBSIT" />
        <Picker.Item label="Course BSIS" value="courseBSIS" />
        <Picker.Item label="Course BsCRIM" value="courseBCRIM" />
      </Picker>
       {/* Adding space */}
       <View style={{ marginBottom: 20 }} />

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {/* Adding space */}
      <View style={{ marginBottom: 20 }} />
      <Button title="Add Student" onPress={handleAdd} />
      {/* Adding space */}
      <View style={{ marginBottom: 10 }} />
      <Button title="View Students List" onPress={handleViewStudents} /> {/* New button */}
      <Text style={{ marginTop: 20 }}>{message}</Text>
    </View>
  );
};
const StudentListScreen = () => {
  // Logic to fetch and display the list of students will go here
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List of Students</Text>
      {/* Display the list of students here */}
    </View>
  );
};

// Modify the App component to include the new screen:
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="StudentList" component={StudentListScreen} />
        {/* Define other screens here if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App:

import { StyleSheet,Text,StatusBar, ScrollView} from "react-native";
import {DataTable} from 'react-native-paper';
import Data from "./data2.json";
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get("window").width;
const screenHigth = Dimensions.get("window").height;
const users = ()=>{
    return(
        
            <DataTable style = {styles.container}> 
          
        <DataTable.Header style ={[styles.tableBorder, styles.tableHeader]}>     
      <DataTable.Title style = {{justifyContent: 'center'}}>
         <Text style = {styles.tableTitle}>Users</Text>
          </DataTable.Title>
       </DataTable.Header> 
      
    <DataTable.Header style ={[styles.tableBorder, styles.tableTitleHeader]}>
     <DataTable.Title><Text style = {styles.tableColumnTitle}>ID</Text></DataTable.Title>
     <DataTable.Title><Text style = {styles.tableColumnTitle}>Firstname</Text></DataTable.Title>
     <DataTable.Title><Text style = {styles.tableColumnTitle}>Lastname</Text></DataTable.Title>
     <DataTable.Title><Text style = {styles.tableColumnTitle}>Course</Text></DataTable.Title>
     <DataTable.Title><Text style = {styles.tableColumnTitle}>Year</Text></DataTable.Title>
     <DataTable.Title><Text style = {styles.tableColumnTitle}>Section</Text></DataTable.Title>
     </DataTable.Header>
      
     <ScrollView >    

         {Data.map((list)=>(
         <DataTable.Row  style ={styles.tableBorder} key={list.ID}>
             <DataTable.Cell>{list.ID}</DataTable.Cell>
             <DataTable.Cell>{list.Firstname}</DataTable.Cell>
             <DataTable.Cell>{list.Lastname}</DataTable.Cell>
             <DataTable.Cell>{list.Course}</DataTable.Cell>
             <DataTable.Cell>{list.Year}</DataTable.Cell>
             <DataTable.Cell>{list.Section}</DataTable.Cell>
              
         </DataTable.Row>
          ))}
      </ScrollView>
      
    </DataTable>
      
    )
}
export default users;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        width: screenWidth,
        height: screenHigth * 0.90,
    },
    tableTitleHeader: {
        backgroundColor: '#DCDCDC',
    },
    tableHeader: {
        backgroundColor: '#4e85bf',
    },
    tableTitle: {
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
     },
     tableColumnTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
     },
     tableBorder: {
        borderWidth: 1,
        borderStyle: 'solid', 
        borderColor: 'gray'
    },
});