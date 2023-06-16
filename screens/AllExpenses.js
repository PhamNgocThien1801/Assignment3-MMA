import { Text, View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { GlobalStyles } from "../constants/style";
function AllExpensesScreen() {
  return (
    <View style={styles.container}>
      <ExpensesOutput expensesPeriod="All Expenses" />
    </View>
  );
}

export default AllExpensesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
