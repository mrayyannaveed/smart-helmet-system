"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface SensorChartProps {
  title: string
  type: "accel" | "gyro"
  color: string
}

export function SensorChart({ title, type, color }: SensorChartProps) {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    // Initialize with some data
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      time: i,
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: Math.random() * 2 - 1,
    }))
    setData(initialData)

    // Simulate real-time updates
    const interval = setInterval(() => {
      setData(prev => {
        const newTime = prev[prev.length - 1].time + 1
        const newData = {
          time: newTime,
          x: Math.random() * 2 - 1,
          y: Math.random() * 2 - 1,
          z: Math.random() * 2 - 1,
        }
        return [...prev.slice(1), newData]
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="time" hide />
            <YAxis domain={[-2, 2]} className="text-xs" />
            <Tooltip 
              contentStyle={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
              itemStyle={{ color: 'var(--foreground)' }}
            />
            <Line type="monotone" dataKey="x" stroke={color} strokeWidth={2} dot={false} name="X-Axis" />
            <Line type="monotone" dataKey="y" stroke="#10b981" strokeWidth={2} dot={false} name="Y-Axis" />
            <Line type="monotone" dataKey="z" stroke="#f59e0b" strokeWidth={2} dot={false} name="Z-Axis" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
