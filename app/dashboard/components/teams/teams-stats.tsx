import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ListChecksIcon,
  PieChartIcon,
  StarIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import avatarD from "@/public/images/avatar-david.jpg";
import avatarH from "@/public/images/avatar-hrithik.jpg";
import avatarK from "@/public/images/avatar-kristen.jpg";
import Image from "next/image";
import TeamDistributionChart from "./team-distribution-chart";

const teamLeaders = [
  {
    firstName: "Hrithik",
    lastName: "Roshan",
    avatar: avatarH,
  },
  {
    firstName: "Rahul",
    lastName: "Verma",
  },
  {
    firstName: "David",
    lastName: "Fincher",
    avatar: avatarD,
  },
  {
    firstName: "Priya",
    lastName: "Mehta",
  },
  {
    firstName: "Anjali",
    lastName: "Reddy",
  },
  {
    firstName: "Neha",
    lastName: "Desai",
  },
  {
    firstName: "Aishwarya",
    lastName: "Rai",
  },
  {
    firstName: "Kristen",
    lastName: "Stewart",
    avatar: avatarK,
  },
  {
    firstName: "Sonia",
    lastName: "Kapoor",
  },
];

export default function TeamsStats() {
  const totalTeams = 8;

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total teams</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UsersIcon />
              <div className="text-5xl font-bold">{totalTeams}</div>
            </div>
            <div>
              <Button asChild size="xs">
                <Link href="/dashboard/teams">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center">
              <span>Team leaders</span>
              <StarIcon className="text-yellow-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {teamLeaders.map((teamLeader, index) => {
              return (
                <TooltipProvider
                  key={`${teamLeader.firstName}${teamLeader.lastName}${index}`}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Avatar>
                        {!!teamLeader?.avatar && (
                          <Image
                            src={teamLeader.avatar}
                            alt={`${teamLeader?.firstName} ${teamLeader?.lastName}`}
                          />
                        )}
                        <AvatarFallback>
                          {teamLeader?.firstName[0]}
                          {teamLeader?.lastName[0]}
                        </AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      {teamLeader.firstName} {teamLeader.lastName}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center">
              <span>Team Distribution</span>
              <PieChartIcon />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>

      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <ListChecksIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">{/* Line Graph */}</CardContent>
      </Card>
    </>
  );
}
