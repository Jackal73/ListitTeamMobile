import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import ToDoItem from "../components/ToDoItem";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({ navigation }: RootTabScreenProps<"TabOne">) {
  const [todos, setTodos] = useState([
    {
      id: "1",
      content: "Buy bicycle",
      isCompleted: true,
    },
    {
      id: "2",
      content: "Ride new bike",
      isCompleted: false,
    },
    {
      id: "3",
      content: "Go to ER",
      isCompleted: true,
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listit Teams</Text>

      <FlatList data={todos} renderItem={({ item }) => <ToDoItem todo={item} />} style={{ width: "100%" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
