import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl font-bold">Money Manager</h1>
      <p>Track your expenses and manage your finances efficiently.</p>
      <Button onClick={() => router.push("/dashboard")}>Go to Dashboard</Button>
    </div>
  );
}
