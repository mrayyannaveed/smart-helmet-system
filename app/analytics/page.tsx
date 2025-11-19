"use client"

import { AppSidebar } from "@/components/layout/app-sidebar"
import { Header } from "@/components/layout/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

const weeklyData = [
  { name: 'Mon', accidents: 0, distance: 12 },
  { name: 'Tue', accidents: 0, distance: 15 },
  { name: 'Wed', accidents: 1, distance: 8 },
  { name: 'Thu', accidents: 0, distance: 22 },
  { name: 'Fri', accidents: 0, distance: 18 },
  { name: 'Sat', accidents: 2, distance: 45 },
  { name: 'Sun', accidents: 0, distance: 30 },
]

const hourlyData = [
  { time: '6am', risk: 2 },
  { time: '9am', risk: 5 },
  { time: '12pm', risk: 3 },
  { time: '3pm', risk: 4 },
  { time: '6pm', risk: 8 },
  { time: '9pm', risk: 6 },
]

export default function AnalyticsPage() {
  return (
    <div className="flex h-screen bg-background">
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Analytics Dashboard" />
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Ride Distance (km)</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="name" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
                      itemStyle={{ color: 'var(--foreground)' }}
                    />
                    <Bar dataKey="distance" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk Analysis by Hour</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="time" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
                      itemStyle={{ color: 'var(--foreground)' }}
                    />
                    <Line type="monotone" dataKey="risk" stroke="hsl(var(--destructive))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Accident Heatmap Areas</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px] bg-muted/20 relative flex items-center justify-center">
               <div className="text-center">
                  <p className="text-muted-foreground font-medium">Heatmap Visualization</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    High risk areas: Downtown Intersection, Highway 101 Exit 4
                  </p>
               </div>
               {/* Simulated Heatmap Overlay */}
               <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/20 rounded-full blur-3xl"></div>
               <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>
            </CardContent>
          </Card>

        </main>
      </div>
    </div>
  )
}
