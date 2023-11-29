import { StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import { DataTable } from 'react-native-paper';
import Data from "./data2.json";

const windowWidthValue = Dimensions.get("window").width;
const windowHeightValue = Dimensions.get("window").height;

const accounts = () => {
    return (
        <DataTable style={styles.container}>

            <DataTable.Header style={[styles.border, styles.header]}>
                <DataTable.Title style={{ justifyContent: 'center' }}>
                    <Text style={styles.title}>Accounts</Text>
                </DataTable.Title>

            </DataTable.Header>

            <DataTable.Header style={[styles.border, styles.titleHeader]}>
                <DataTable.Title><Text style={styles.columnTitle}>ID</Text></DataTable.Title>
                <DataTable.Title><Text style={styles.columnTitle}>Username</Text></DataTable.Title>
                <DataTable.Title><Text style={styles.columnTitle}>Password</Text></DataTable.Title>
                <DataTable.Title><Text style={styles.columnTitle}>Usertype</Text></DataTable.Title>
            </DataTable.Header>
            <ScrollView>
                {Data.map((item) => (
                    <DataTable.Row style={styles.border} key={item.ID}>
                        <DataTable.Cell>{item.ID}</DataTable.Cell>
                        <DataTable.Cell>{item.Username}</DataTable.Cell>
                        <DataTable.Cell>{item.Password}</DataTable.Cell>
                        <DataTable.Cell>{item.Usertype}</DataTable.Cell>

                    </DataTable.Row>
                ))}
            </ScrollView>
        </DataTable>
    )
}
export default accounts;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        width: windowWidthValue,
        height: windowHeightValue * 0.90,
    },
    titleHeader: {
        backgroundColor: '#DCDCDC',
    },
    header: {
        backgroundColor: '#4e85bf',
    },
    title: {
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    border: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'gray'
    },
    columnTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
    }
});