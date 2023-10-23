import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/goalItem";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalTextHandler = (enteredText) => {
    setGoalText(enteredText);
  };
  const addGoalHandler = () => {
    if (goalText !== "") {
      setCourseGoals((prevGoals) => [
        ...prevGoals,
        { text: goalText, id: Math.random().toString() },
      ]);
    } else {
      alert("빈 값이 있습니다.");
      return;
    }
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalTextHandler}
          style={styles.inputText}
          placeholder="Write down your course's goal"
        ></TextInput>
        <Button onPress={addGoalHandler} title="Tap ME!"></Button>
      </View>
      <View style={styles.goalsContainter}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem />;
          }}
          alwaysBounceHorizontal={false}
          keyExtractor={(item, key) => {
            return item.id;
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 10,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  inputText: {
    width: "70%",
    padding: 8,
  },
  goalsContainter: {
    flex: 5,
  },
});
