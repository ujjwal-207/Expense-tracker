// app/expences/page.js

import { dbConnect } from "@/app/lib/dbConnect";
import Expences from "@/app/models/expences";
import Incomes from "@/app/models/calculation";

export default async function Page() {
  await dbConnect();
  const expences = await Expences.find({}).lean();
  const expencesData = JSON.parse(JSON.stringify(expences));
  const incomes = await Incomes.find({}).lean();
  const incomeData = JSON.parse(JSON.stringify(incomes));
  const totalIncome = incomes.reduce((total, item) => total + item.income, 0);
  const totalExpences = expences.reduce(
    (total, item) => total + item.expences,
    0
  );
  const saving = totalIncome - totalExpences;

  return (
    <div>
      <h1>Expenses</h1>
      <ul>
        {expencesData.map((expence) => (
          <li key={expence._id}>
            {expence.description}: ${expence.expences}
          </li>
        ))}
      </ul>
      <h2>Income</h2>
      <ul>
        {incomeData.map((income) => (
          <li key={income._id}>
            {income.description}:${income.income}
          </li>
        ))}
      </ul>
      <h3>{saving}</h3>
    </div>
  );
}
