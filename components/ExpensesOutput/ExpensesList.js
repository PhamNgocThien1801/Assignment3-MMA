import { FlatList, View, Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesItem from "./ExpensesItem";

function renderExpenseItem(itemData) {
  return <ExpensesItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
