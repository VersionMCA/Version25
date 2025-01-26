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
<<<<<<< HEAD
} from "@/components/ui/dialog";
=======
} from "@/components/ui/dialogMessage";
>>>>>>> 8440ab4da83a57ae50899b9a2afa6350920b13f0
import { MessageSquareQuote } from "lucide-react";

const FaculyMessage = ({ designation, message }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <MessageSquareQuote />
      </DialogTrigger>
      <DialogContent className="border w-[95%]">
        {message}
        <DialogFooter className="sm:justify-start">
          <DialogHeader>
            <DialogTitle>{`Message From ${designation}`}</DialogTitle>
          </DialogHeader>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FaculyMessage;
