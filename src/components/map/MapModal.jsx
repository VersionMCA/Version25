import { Map } from "lucide-react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import NITTrichyMap from "./NITTMap";

export default function MapModal() {
  return (
    <div className="py-40  flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="">
            <Map />
          </span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <NITTrichyMap />
          </ModalContent>
          <ModalFooter className="gap-4">NITT MAP</ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
