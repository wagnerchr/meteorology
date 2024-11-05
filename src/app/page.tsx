import ChartComponent from "@/components/ChartComponent";
import RegisterCard from "@/components/RegisterCard";
import RegisterTable from "@/components/RegisterTable";

export default function Home() {
  return (
    <div className="m-8">
    <h1 className="text-[30px] font-sans">Perobeli</h1>
    <RegisterCard />
    <ChartComponent />
    <RegisterTable />
</div>
  );
}
