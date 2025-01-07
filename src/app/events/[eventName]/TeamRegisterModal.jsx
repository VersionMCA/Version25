"use client";
import { Input } from "@/components/ui/input";
import toastStyle from "@/utilities/toastStyle";
import { useSession } from "next-auth/react";
import { useState } from "react";
import UserAddedItem from "./UserAddedItem";
import { toast } from "react-toastify";
import axios from "axios";
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
import { Button } from "@/components/ui/Button";
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3000";

export default function TeamRegisterModal({ event, setRegistered }) {
  const session = useSession();
  const [teamName, setTeamName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [emailList, setEmailList] = useState([]);
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    if (!teamName) {
      toast.error("Please fill the Team Name", toastStyle);
      return;
    }
    const teamSize = event.teamSize;
    if (!teamSize.includes(emailList.length + 1)) {
      toast.error(
        `${
          teamSize.length === 1
            ? `This event needs exactly ${teamSize[0]} members.`
            : `This event needs ${teamSize[0]} to ${teamSize[teamSize.length - 1]} members.`
        }`,
        toastStyle,
      );
      return;
    }
    try {
      setIsSubmitting(true);
      const res = await axios.post(`${BACKEND_URL}/api/events/register`, {
        userId: session.data.user.id,
        eventId: event.id,
        teamName,
        teamMembers: emailList,
      });
      if (res.data?.message) {
        toast.success(
          res.data.message || "Registered Successfully",
          toastStyle,
        );
      }
      setRegistered(true);
      setOpen(false);
    } catch (error) {
      const msg = error.response.data.message || error.response.data.error;
      toast.error(msg, toastStyle);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddUser = async () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      toast.error("Please enter a valid email", toastStyle);
      return;
    }
    if (email === session.data.user.email) {
      toast.error("You are already in team", toastStyle);
      return;
    }
    if (emailList.includes(email)) {
      toast.error("User already in team", toastStyle);
      return;
    }
    const teamSize = event.teamSize;
    if (emailList.length >= teamSize) {
      toast.error(
        `This Event can have atmost ${teamSize[teamSize.length - 1]} members.`,
        toastStyle,
      );
      return;
    }
    try {
      setIsAddingUser(true);
      const res = await axios.post(
        `${BACKEND_URL}/api/events/eventRegisterCheckEmail`,
        {
          email: email,
          eventId: event.id,
        },
      );
      if (res.data.message === "YES") {
        toast.error(
          "User already registered for the event with another team",
          toastStyle,
        );
        return;
      }
      if (res.data.message === "NO") {
        setEmailList(() => [...emailList, email]);
        setEmail("");
      }
    } catch (error) {
      toast.error(error.response.data.message, toastStyle);
    } finally {
      setIsAddingUser(false);
    }
  };

  const handleDeleteUser = (em) => {
    if (em === session.data.user.email) {
      toast.error("You cannot remove yourself", toastStyle);
      return;
    }
    setEmailList(() => emailList.filter((el) => el !== em));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Register</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Team</DialogTitle>
          <DialogDescription>
            Add your team members and register for the event
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="teamName" className="uppercase mb-2 font-normal">
            Team Name
          </label>
          <Input
            type="text"
            onChange={(e) => setTeamName(e.target.value)}
            value={teamName}
          />
          <div className="flex flex-col mb-7">
            <label htmlFor="email" className="uppercase mb-2 font-normal">
              Add Members (Email)*
            </label>
            <div className="flex flex-row justify-between">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[90%]"
              />
              <Button
                type="button"
                onClick={handleAddUser}
                isLoading={isAddingUser}
              >
                Add
              </Button>
            </div>
          </div>
          <div>
            <ul className="flex flex-row mb-7 w-80 text-[.75rem] flex-wrap gap-2">
              <UserAddedItem
                email={session.data.user.email}
                handleDeleteUser={handleDeleteUser}
              />
              {emailList.map((emailItem, index) => {
                return (
                  <UserAddedItem
                    email={emailItem}
                    key={index}
                    handleDeleteUser={handleDeleteUser}
                  />
                );
              })}
            </ul>
          </div>

          <div className="flex mt-3 justify-center"></div>
        </form>
        <DialogFooter className="">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" onClick={handleSubmit} isLoading={isSubmitting}>
            Register
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
