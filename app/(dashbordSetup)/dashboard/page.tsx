import { dbConnect } from "@/app/lib/dbConnect";
import Expences from "@/app/models/expences";
import Incomes from "@/app/models/calculation";
import Expencescard from "@/app/export/cards.expences";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");
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
