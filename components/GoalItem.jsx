import { StyleSheet, Text, View } from "react-native";
function GoalItem (props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#5eaf32",
    borderRadius: 8,

    fontWeight: "600",
  },
  goalText: {
    color: "white",
  },
});
