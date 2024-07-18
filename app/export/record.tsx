import { useEffect, useState } from "react";
import { dbConnect } from "../lib/dbConnect";
import Expences from "@/app/models/expences";
import Incomes from "../models/calculation";

async function fetchRecord() {
  await dbConnect();

  const expences = await Expences.find({}).lean();
  const incomes = await Incomes.find({}).lean();

  const totalIncome = incomes.reduce((total, item) => total + item.income, 0);
  const totalExpences = expences.reduce(
    (total, item) => total + item.expences,
    0
  );
  const saving = totalIncome - totalExpences;

  return { expences, totalExpences, totalIncome, saving };
}

export default function Record() {
  const [data, setData] = useState({
    expences: [],
    totalExpences: 0,
    totalIncome: 0,
    saving: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecord().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return data;
}
