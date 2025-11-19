"use client"

import { useState, useEffect } from "react"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { Header } from "@/components/layout/header"
import { StatusCard } from "@/components/dashboard/status-card"
import { SensorChart } from "@/components/dashboard/sensor-chart"
import { AccidentAlertModal } from "@/components/dashboard/accident-alert-modal"
import { Battery, Wifi, Activity, AlertTriangle, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  const [isAccident, setIsAccident] = useState(false)
  const [batteryLevel, setBatteryLevel] = useState(85)
  const [isConnected, setIsConnected] = useState(true)

  // Simulate battery drain
  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryLevel((prev) => (prev > 0 ? prev - 1 : 0))
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex h-screen bg-background">
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Live Dashboard" />
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Status Overview */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatusCard
              title="Connection Status"
              value={isConnected ? "Connected" : "Disconnected"}
              icon={Wifi}
              status={isConnected ? "success" : "danger"}
              description="ESP32 Module"
            />
            <StatusCard
              title="Battery Level"
              value={`${batteryLevel}%`}
              icon={Battery}
              status={batteryLevel > 20 ? "success" : "warning"}
              description="Last sync: Just now"
            />
            <StatusCard
              title="Current State"
              value={isAccident ? "CRITICAL" : "Normal"}
              icon={Activity}
              status={isAccident ? "danger" : "success"}
              description="Prediction Model"
            />
            <StatusCard
              title="GPS Signal"
              value="Strong"
              icon={MapPin}
              status="success"
              description="Lat: 40.7128, Long: -74.0060"
            />
          </div>

          {/* Live Sensor Data */}
          <div className="grid gap-6 md:grid-cols-2">
            <SensorChart 
              title="Accelerometer (G-Force)" 
              type="accel" 
              color="#3b82f6" 
            />
            <SensorChart 
              title="Gyroscope (deg/s)" 
              type="gyro" 
              color="#8b5cf6" 
            />
          </div>

          {/* Map Placeholder */}
          <Card className="w-full h-[300px] overflow-hidden relative">
            <CardHeader>
              <CardTitle>Live Location Tracking</CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-full relative bg-muted/20">
              <div className="absolute inset-0 flex items-center justify-center bg-muted/10">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-2 animate-bounce" />
                  <p className="text-muted-foreground">Map Visualization Placeholder</p>
                  <p className="text-xs text-muted-foreground">Google Maps API integration required</p>
                </div>
              </div>
              {/* Simulated Map Background Pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(#444 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </CardContent>
          </Card>

          {/* Simulation Controls */}
          <div className="flex justify-end gap-4">
            <Button 
              variant="destructive" 
              onClick={() => setIsAccident(true)}
            >
              <AlertTriangle className="mr-2 h-4 w-4" />
              Simulate Accident
            </Button>
          </div>

        </main>
      </div>

      <AccidentAlertModal 
        open={isAccident} 
        onOpenChange={setIsAccident} 
      />
    </div>
  )
}
