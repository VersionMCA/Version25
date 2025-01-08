"use client";
import { Button } from "@/components/ui/Button";
import toastStyle from "@/utilities/toastStyle";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";
const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

const IndividualRegister = ({ event, setRegistered }) => {
  const session = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async () => {
    if (!session?.data?.user?.id) {
      toast.error("Login to register for the event", toastStyle);
      return;
    }
    if (event.type === "Team") {
      toast.error("This event is a team event. Please register as a team");
      return;
    }
    try {
      setIsSubmitting(true);
      const res = await axios.post(`${BACKEND_URL}/api/events/register`, {
        userId: session?.data?.user.id,
        eventId: event.id,
      });
      setRegistered(true);
      if (res.data?.message) {
        toast.success(res.data.message, toastStyle);
      }
    } catch (error) {
      toast.error(error.response.data.message, toastStyle);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Button isLoading={isSubmitting} onClick={handleRegister}>
      Register
    </Button>
  );
};

export default IndividualRegister;
