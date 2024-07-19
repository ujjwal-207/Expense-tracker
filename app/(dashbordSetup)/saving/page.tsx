// app/expences/page.js

import { dbConnect } from "@/app/lib/dbConnect";
import Expences from "@/app/models/expences";
import Incomes from "@/app/models/calculation";

export default async function Page() {
  await dbConnect();
  const expences = await Expences.find({}).lean();
  const incomes = await Incomes.find({}).lean();
  const totalIncome = incomes.reduce((total, item) => total + item.income, 0);
  const totalExpences = expences.reduce(
    (total, item) => total + item.expences,
    0
  );

  const saving = totalIncome - totalExpences;

  return (
    <div>
      <div className="justify-center ml-11 align-middle">
        <h1>Your saving</h1>
      </div>
      <p>{saving}</p>
    </div>
  );
}
