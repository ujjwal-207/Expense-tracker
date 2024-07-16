// app/expences/page.js

import { dbConnect } from "@/app/lib/dbConnect";
import Expences from "@/app/models/expences";

export default function Page() {
  const record = async () => {
    await dbConnect();
    const expences = await Expences.find({}).lean();
    const expencesData = JSON.parse(JSON.stringify(expences));
    return expencesData;
  };

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
    </div>
  );
}
