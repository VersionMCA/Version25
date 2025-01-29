"use client";
import React, { useEffect, useState } from "react";
import UserImage from "../../components/UserImage";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import toastStyle from "@/utilities/toastStyle";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

export default function UserDetailForm({ user }) {
  const { data: session } = useSession();
  const [currUser, setCurrUser] = useState(user);
  const router = useRouter();

  const handleProfileChange = async (e) => {
    e.preventDefault();

    if (
      !currUser.collegeName ||
      !currUser.phoneNumber ||
      !currUser.collegeRollNumber
    ) {
      toast.warn("Please fill all details");
      return;
    }
    if (!/^[0-9]+$/.test(currUser.collegeRollNumber)) {
      toast.error("College Roll Number must be numeric.", toastStyle);
      return;
    }

    if (
      !/^[0-9]+$/.test(currUser.phoneNumber) ||
      currUser.phoneNumber.length != 10
    ) {
      toast.error("Invalid Phone Number", toastStyle);
      return;
    }

    try {
      const response = await axios.patch(`${BACKEND_URL}/api/user`, {
        collegeName: currUser.collegeName,
        collegeRollNumber: currUser.collegeRollNumber,
        phoneNumber: currUser.phoneNumber,
      });

      toast.success("Profile updated successfully", toastStyle);
      router.push("/");
    } catch (error) {
      console.log("Profile Update Error", error);
      toast.error("Error while updating profile", toastStyle);
    }
  };

  useEffect(() => {
    const fetchMyDetails = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/user`);
        setCurrUser((prev) => res.data);
      } catch (error) {
        toast.error("Unable to fetch your details", toastStyle);
        console.log("fetch me error", error);
      }
    };
    fetchMyDetails();
  }, []);

  return (
    <form className="flex flex-col gap-4">
      <div>
        <Label className="">Name</Label>
        <Input
          disabled
          placeholder="Enter your name"
          value={currUser.name}
          className="p-2 mt-2"
        />
      </div>
      <div>
        <Label className="">Email</Label>
        <Input
          disabled
          placeholder="Enter your email"
          value={currUser.email}
          className="p-2 mt-2"
        />
      </div>
      <div>
        <Label className="">College Name*</Label>
        <Input
          placeholder="Enter your college name"
          value={currUser.collegeName}
          className="p-2 mt-2"
          onChange={(e) =>
            setCurrUser((prev) => ({ ...prev, collegeName: e.target.value }))
          }
        />
      </div>
      <div>
        <Label className="">College Roll Number*</Label>
        <Input
          placeholder="Enter your college roll number"
          value={currUser.collegeRollNumber}
          className="p-2 mt-2"
          onChange={(e) =>
            setCurrUser((prev) => ({
              ...prev,
              collegeRollNumber: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <Label className="">Phone Number*</Label>
        <Input
          type="tel"
          placeholder="Enter your contact number"
          value={currUser.phoneNumber}
          className="p-2 mt-2"
          onChange={(e) =>
            setCurrUser((prev) => ({ ...prev, phoneNumber: e.target.value }))
          }
        />
      </div>
      <div className="flex items-center justify-center">
        <Button onClick={handleProfileChange} className="w-40">
          Save Details
        </Button>
      </div>
    </form>
  );
}
