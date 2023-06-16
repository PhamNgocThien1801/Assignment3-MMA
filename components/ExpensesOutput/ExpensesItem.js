import { View, Text, StyleSheet, Pressable } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/style";
import { useNavigation } from "@react-navigation/native";

function FormatDate(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
function ExpensesItem({ id, amount, description, date }) {
  const navigation = useNavigation();
  function ExpensesPressHandler() {
    navigation.navigate("ManageExpense", { expenseId: id });
  }

  return (
    <Pressable
      onPress={ExpensesPressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{description}</Text>
          <Text style={styles.textDate}>{FormatDate(date)}</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.textAmount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpensesItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 12,
    padding: 8,
    marginVertical: 8,
    borderRadius: 6,
    justifyContent: "space-between",
    backgroundColor: GlobalStyles.colors.primary500,
  },
  text: {
    color: GlobalStyles.colors.primary50,
    fontSize: 20,
    fontWeight: "bold",
  },
  textAmount: {
    color: GlobalStyles.colors.primary700,
    fontSize: 16,
    fontWeight: "bold",
  },
  innerContainer: {
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 90,
  },
  textDate: {
    paddingTop: 8,
    color: GlobalStyles.colors.primary50,
    fontSize: 16,
  },
  pressed: {
    opacity: 0.75,
  },
});
