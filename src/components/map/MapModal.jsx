import { MapPinned } from "lucide-react";

import NITTrichyMap from "./NITTMap";
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

export default function MapModal({ event, setRegistered }) {
  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <DialogTrigger
          asChild
          className="transition-transform transform hover:scale-110 group "
          // className="bg-black text-white flex justify-center group/modal-btn"
        >
          <span>
            <MapPinned className="h-6 w-6" />
            <span className="absolute right-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs px-3 py-1 rounded-md transition-opacity">
              NITT Map
            </span>
          </span>
        </DialogTrigger>
        <DialogContent>
          <NITTrichyMap />
          <DialogFooter className="sm:justify-start">
            <DialogHeader>
              <DialogTitle>NITT MAP</DialogTitle>
              <DialogDescription>
                You can find the location of various departments and buildings
                here.
              </DialogDescription>
            </DialogHeader>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
