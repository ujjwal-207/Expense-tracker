import { dbConnect } from "@/app/lib/dbConnect";
import Expences from "@/app/models/expences";
import Incomes from "@/app/models/calculation";
import Expencescard from "@/app/export/cards.expences";

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
      <Expencescard ExpencesData={expencesData} IncomeData={incomeData} />
    </div>
  );
}
