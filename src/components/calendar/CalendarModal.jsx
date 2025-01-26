import { Calendar } from "lucide-react";
import CalendarContent from "./CalendarContent";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CalendarModal() {
  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <DialogTrigger
          asChild
          className="transition-transform transform hover:scale-110 group"
        >
          <span>
            <Calendar className="h-6 w-6" />
            <span className="absolute right-10  opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs px-3 py-1 rounded-md transition-opacity">
              Events Calendar
            </span>
          </span>
        </DialogTrigger>
        <DialogContent>
          <CalendarContent />
          <DialogFooter className="sm:justify-start">
            <DialogHeader>
              <DialogTitle>Version Events Calendar</DialogTitle>
            </DialogHeader>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
