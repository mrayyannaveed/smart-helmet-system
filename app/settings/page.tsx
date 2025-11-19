"use client"

import { AppSidebar } from "@/components/layout/app-sidebar"
import { Header } from "@/components/layout/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { useTheme } from "next-themes"

export default function SettingsPage() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="flex h-screen bg-background">
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Settings" />
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          
          <Card>
            <CardHeader>
              <CardTitle>Emergency Contacts</CardTitle>
              <CardDescription>Manage contacts that will be notified in case of an accident.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Contact 1 Name</Label>
                  <Input placeholder="e.g. Mom" />
                </div>
                <div className="space-y-2">
                  <Label>Contact 1 Phone</Label>
                  <Input placeholder="+1 234 567 8900" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Contact 2 Name</Label>
                  <Input placeholder="e.g. Spouse" />
                </div>
                <div className="space-y-2">
                  <Label>Contact 2 Phone</Label>
                  <Input placeholder="+1 234 567 8900" />
                </div>
              </div>
              <Button>Save Contacts</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Device Sensitivity</CardTitle>
              <CardDescription>Adjust the impact detection threshold.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>G-Force Threshold</Label>
                  <span className="text-sm text-muted-foreground">2.5G</span>
                </div>
                <Slider defaultValue={[25]} max={100} step={1} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>App Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Enable dark theme for the dashboard</p>
                </div>
                <Switch 
                  checked={theme === 'dark'}
                  onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-Export Data</Label>
                  <p className="text-sm text-muted-foreground">Automatically export ride logs to email</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

        </main>
      </div>
    </div>
  )
}
