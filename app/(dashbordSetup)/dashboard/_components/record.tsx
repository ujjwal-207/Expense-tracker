import { dbConnect } from "@/app/lib/dbConnect";
import Expences from "@/app/models/expences";
import Incomes from "@/app/models/calculation";

async function Record() {
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
  return { expencesData, incomeData, totalIncome, totalExpences, saving };
}
export default Record;
