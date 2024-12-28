import { Calendar } from "lucide-react";
import CalendarContent from "./CalendarContent";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";

export default function CalendarModal() {
  return (
    <div className="py-40  flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="">
            <Calendar />
          </span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <CalendarContent />
          </ModalContent>
          <ModalFooter className="gap-4">Version Events Calendar</ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
