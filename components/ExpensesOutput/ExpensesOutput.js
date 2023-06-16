import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/style";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    description: "A pair of shose",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of Book",
    amount: 14.99,
    date: new Date("2021-02-14"),
  },
  {
    id: "e3",
    description: "A pair of Table",
    amount: 59.99,
    date: new Date("2023-12-20"),
  },
  {
    id: "e4",
    description: "A pair of PC",
    amount: 799.99,
    date: new Date("2022-08-12"),
  },
  {
    id: "e5",
    description: "A pair of Ipad",
    amount: 599.99,
    date: new Date("2022-01-05"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSE} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSE} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({});
