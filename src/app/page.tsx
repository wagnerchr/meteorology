import ChartComponent from "@/components/ChartComponent";
import ChartComponent2 from "@/components/ChartComponent2";
import Header from "@/components/Header";
import RegisterCard from "@/components/RegisterCard";
import RegisterTable from "@/components/RegisterTable";

export default function Home() {
  return (
    <>
      <Header />
      <div className="p-8 bg-slate-300">
        <RegisterCard />
        <div className="flex">
        <ChartComponent />
        <ChartComponent2 />
        </div>
        <RegisterTable />
      </div>
    </>
  );
}
