import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardPage() {
  return (
    <Tabs defaultValue="employees">
      <TabsList>
        <TabsTrigger value="employees">Employees Stats</TabsTrigger>
        <TabsTrigger value="teams">Teams Stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">Employees Stats View</TabsContent>
      <TabsContent value="teams">Teams Stats View</TabsContent>
    </Tabs>
  );
}
