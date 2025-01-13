import React from "react";
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

const FaculyMessage = ({ designation, message }) => {
  return (
    <div className="py-40  flex items-center justify-center">
      <Dialog>
        <DialogTrigger>{`Message From ${designation}`}</DialogTrigger>
        <DialogContent className="border border-red-100">
          {message}
          <DialogFooter className="sm:justify-start">
            <DialogHeader>
              <DialogTitle>{`Message From ${designation}`}</DialogTitle>
            </DialogHeader>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FaculyMessage;
