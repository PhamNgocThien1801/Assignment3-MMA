import { Text, View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { GlobalStyles } from "../constants/style";
function RecentExpensesScreen() {
  return (
    <View style={styles.container}>
      <ExpensesOutput expensesPeriod="Last 7day" />
    </View>
  );
}

export default RecentExpensesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
});
