"use client";
import { Button } from "@/components/ui/Button";
import toastStyle from "@/utilities/toastStyle";
import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

const page = () => {
  const [exporting, setExporing] = React.useState(false);
  const router = useRouter();

  const handleExportUser = async () => {
    setExporing(true);
    try {
      const res = await axios.post(`${BACKEND_URL}/api/admin/export/student`);
      toast.success("Exported Users successfully!", toastStyle);
    } catch (error) {
      toast.error("Error exporting user data.", toastStyle);
    } finally {
      setExporing(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen flex-col gap-20">
      <Button onClick={() => handleExportUser()} disabled={exporting}>
        {exporting ? "Exporting..." : "Export"}
      </Button>
      <Button
        onClick={() => {
          router.push("/admin/events/create");
        }}
      >
        {" "}
        Create Event
      </Button>
    </div>
  );
};

export default page;
