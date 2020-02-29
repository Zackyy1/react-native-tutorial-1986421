import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Morty", id: "1" },
    { name: "Bonny", id: "2" },
    { name: "Larry", id: "3" },
    { name: "Terry", id: "4" },
    { name: "Lenny", id: "5" },
    { name: "Barry", id: "6" },
    { name: "Garry", id: "7" }
  ]);
  return (
    <View style={styles.container}>

      <FlatList 
        numColumns={2}
        data={people}
        keyExtractor={(item) => (item.id)}
        renderItem={( { item } ) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
        
      


      {/* <ScrollView>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    paddingHorizontal: 20
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "green",
    fontSize: 24,
    width: 'auto',
    marginHorizontal: 10,
    marginTop: 24,

  }
});
