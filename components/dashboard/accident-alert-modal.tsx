import { AlertTriangle, Phone, XCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface AccidentAlertModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AccidentAlertModal({ open, onOpenChange }: AccidentAlertModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-red-500 border-2 bg-background">
        <DialogHeader>
          <div className="mx-auto bg-red-100 p-3 rounded-full mb-4">
            <AlertTriangle className="h-10 w-10 text-red-600 animate-pulse" />
          </div>
          <DialogTitle className="text-center text-2xl text-red-600 font-bold">ACCIDENT DETECTED!</DialogTitle>
          <DialogDescription className="text-center text-lg">
            Impact detected at 12:45 PM.
            <br />
            Notifying emergency contacts in <span className="font-bold text-red-500">15 seconds</span>...
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-muted p-4 rounded-lg my-4 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-1">Location</p>
          <p className="font-mono">Lat: 40.7128, Long: -74.0060</p>
          <p className="text-xs text-muted-foreground mt-1">Near Broadway & 7th Ave</p>
        </div>

        <DialogFooter className="flex-col sm:flex-col gap-3">
          <Button 
            className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-lg"
            onClick={() => alert("Contacts Notified!")}
          >
            <Phone className="mr-2 h-5 w-5" />
            Notify Contacts Now
          </Button>
          <Button 
            variant="outline" 
            className="w-full h-12 text-lg"
            onClick={() => onOpenChange(false)}
          >
            <XCircle className="mr-2 h-5 w-5" />
            I'm Safe (Cancel Alarm)
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
