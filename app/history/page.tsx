"use client"

import { AppSidebar } from "@/components/layout/app-sidebar"
import { Header } from "@/components/layout/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileDown, Map } from 'lucide-react'

const rides = [
  { id: 1, date: "2023-10-25", duration: "45 min", distance: "12.5 km", maxSpeed: "45 km/h", status: "Normal" },
  { id: 2, date: "2023-10-24", duration: "32 min", distance: "8.2 km", maxSpeed: "38 km/h", status: "Normal" },
  { id: 3, date: "2023-10-23", duration: "15 min", distance: "3.1 km", maxSpeed: "25 km/h", status: "Impact Detected" },
  { id: 4, date: "2023-10-22", duration: "1h 10m", distance: "28.4 km", maxSpeed: "52 km/h", status: "Normal" },
  { id: 5, date: "2023-10-21", duration: "55 min", distance: "18.9 km", maxSpeed: "48 km/h", status: "Normal" },
]

export default function HistoryPage() {
  return (
    <div className="flex h-screen bg-background">
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Ride History" />
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Rides</CardTitle>
              <Button variant="outline" size="sm">
                <FileDown className="mr-2 h-4 w-4" />
                Export PDF
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Distance</TableHead>
                    <TableHead>Max Speed</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rides.map((ride) => (
                    <TableRow key={ride.id}>
                      <TableCell className="font-medium">{ride.date}</TableCell>
                      <TableCell>{ride.duration}</TableCell>
                      <TableCell>{ride.distance}</TableCell>
                      <TableCell>{ride.maxSpeed}</TableCell>
                      <TableCell>
                        <Badge variant={ride.status === "Normal" ? "secondary" : "destructive"}>
                          {ride.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <Map className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

        </main>
      </div>
    </div>
  )
}
