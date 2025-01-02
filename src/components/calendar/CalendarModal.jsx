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
    <div className="py-40 flex items-center justify-center">
      <Dialog>
        <DialogTrigger
          asChild
          className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn"
        >
          <span className="">
            <Calendar />
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
