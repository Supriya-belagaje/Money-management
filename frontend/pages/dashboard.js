import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <Card className="p-4 bg-green-500 text-white">
              <h4>Income: ₹50,000</h4>
            </Card>
            <Card className="p-4 bg-red-500 text-white">
              <h4>Expenses: ₹30,000</h4>
            </Card>
            <Card className="p-4 bg-blue-500 text-white">
              <h4>Balance: ₹20,000</h4>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}
