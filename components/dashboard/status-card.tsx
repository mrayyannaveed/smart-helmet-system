import { type LucideIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatusCardProps {
  title: string
  value: string
  icon: LucideIcon
  status: "success" | "warning" | "danger"
  description: string
}

export function StatusCard({ title, value, icon: Icon, status, description }: StatusCardProps) {
  const statusColors = {
    success: "text-green-500",
    warning: "text-yellow-500",
    danger: "text-red-500",
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={cn("h-4 w-4 text-muted-foreground", statusColors[status])} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
