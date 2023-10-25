import { Pressable, StyleSheet, Text, View } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#42b997" }}
        onPress={props.onDelete.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 5,
    backgroundColor: "#5eaf32",
    borderRadius: 8,

    fontWeight: "600",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 10,
  },
});
