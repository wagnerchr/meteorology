import ChartComponent from "@/components/ChartComponent";
import ChartComponent2 from "@/components/ChartComponent2";
import RegisterCard from "@/components/RegisterCard";
import RegisterTable from "@/components/RegisterTable";

export default function Home() {
  return (
    <div className="m-8">
    <h1 className="text-[30px] font-sans">Perobeli</h1>
    <RegisterCard />
    <div className="flex">
    <ChartComponent />
    <ChartComponent2 />
    </div>
    <RegisterTable />
</div>
  );
}
