import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal, Image } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText == "") {
      alert("빈 값이 있습니다");
      return;
    }
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.inputText}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Canel" onPress={props.onCancel}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#bce432'
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10
  },
  inputText: {
    width: "70%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    marginTop: 10,
    marginHorizontal: 15
  },
});
