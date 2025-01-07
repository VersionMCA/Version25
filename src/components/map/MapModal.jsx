import { Map } from "lucide-react";

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
    <div className="py-40  flex items-center justify-center">
      <Dialog>
        <DialogTrigger
          asChild
          className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn"
        >
          <span className="">
            <Map />
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
