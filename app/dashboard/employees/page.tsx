import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { setTimeout } from "timers/promises";
import { columns, type Employee } from "./columns";

export default async function EmployeesPage() {
  await setTimeout(5000);

  const employees: Employee[] = [
    {
      id: 1,
      firstName: "Ganesh",
      lastName: "Gupta",
      teamName: "alpha",
      isTeamLeader: true,
      avatar: "/images/avatar.jpg",
    },
    {
      id: 2,
      firstName: "Rohan",
      lastName: "Sharma",
      teamName: "beta",
      isTeamLeader: false,
    },
    {
      id: 3,
      firstName: "Anjali",
      lastName: "Patel",
      teamName: "gamma",
      isTeamLeader: false,
    },
    {
      id: 4,
      firstName: "Sanjay",
      lastName: "Mehta",
      teamName: "alpha",
      isTeamLeader: false,
    },
    {
      id: 5,
      firstName: "Priya",
      lastName: "Rao",
      teamName: "beta",
      isTeamLeader: false,
    },
    {
      id: 6,
      firstName: "Kristen",
      lastName: "Stewart",
      teamName: "gamma",
      isTeamLeader: false,
      avatar: "/images/avatar-kristen.jpg",
    },
    {
      id: 7,
      firstName: "Neha",
      lastName: "Verma",
      teamName: "alpha",
      isTeamLeader: false,
    },
    {
      id: 8,
      firstName: "Amit",
      lastName: "Desai",
      teamName: "beta",
      isTeamLeader: false,
    },
    {
      id: 9,
      firstName: "David",
      lastName: "Fincher",
      teamName: "gamma",
      isTeamLeader: false,
      avatar: "/images/avatar-david.jpg",
    },
    {
      id: 10,
      firstName: "Rakesh",
      lastName: "Pandey",
      teamName: "alpha",
      isTeamLeader: false,
    },
    {
      id: 11,
      firstName: "Kavya",
      lastName: "Nair",
      teamName: "beta",
      isTeamLeader: false,
    },
    {
      id: 12,
      firstName: "Vikram",
      lastName: "Singh",
      teamName: "gamma",
      isTeamLeader: false,
    },
    {
      id: 13,
      firstName: "Pooja",
      lastName: "Malhotra",
      teamName: "alpha",
      isTeamLeader: false,
    },
    {
      id: 14,
      firstName: "Arjun",
      lastName: "Joshi",
      teamName: "beta",
      isTeamLeader: false,
    },
    {
      id: 15,
      firstName: "Meera",
      lastName: "Reddy",
      teamName: "gamma",
      isTeamLeader: false,
    },
    {
      id: 16,
      firstName: "Rajesh",
      lastName: "Kumar",
      teamName: "alpha",
      isTeamLeader: false,
    },
    {
      id: 17,
      firstName: "Tanya",
      lastName: "Bhatia",
      teamName: "beta",
      isTeamLeader: false,
    },
    {
      id: 18,
      firstName: "Kunal",
      lastName: "Chauhan",
      teamName: "gamma",
      isTeamLeader: false,
    },
    {
      id: 19,
      firstName: "Nisha",
      lastName: "Agarwal",
      teamName: "alpha",
      isTeamLeader: false,
    },
    {
      id: 20,
      firstName: "Siddharth",
      lastName: "Saxena",
      teamName: "beta",
      isTeamLeader: false,
    },
    {
      id: 21,
      firstName: "Ayesha",
      lastName: "Kapoor",
      teamName: "gamma",
      isTeamLeader: false,
    },
  ];

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Employees</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={employees} />
        </CardContent>
      </Card>
    </div>
  );
}
