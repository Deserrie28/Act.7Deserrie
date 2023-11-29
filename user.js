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