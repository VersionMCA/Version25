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

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

export default function TeamRegisterModal({ event, setRegistered }) {
  const session = useSession();
  const [teamName, setTeamName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [emailList, setEmailList] = useState([]);
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [teamNameError, setTeamNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async () => {
    setTeamName(teamName.toUpperCase());
    if (!teamName) {
      setTeamNameError("Team Name is required");
      return;
    }

    if (
      !(
        event.minTeamSize <= emailList.length + 1 &&
        emailList.length + 1 <= event.maxTeamSize
      )
    ) {
      if (event.type === "INDIVIDUAL")
        toast.error("This event needs exactly 1 member", toastStyle);
      else
        toast.error(
          `This event needs ${event.minTeamSize} to ${event.maxTeamSize} members. `,
          toastStyle,
        );
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await axios.post(
        `${BACKEND_URL}/api/events/teamNameAvailabilityCheck`,
        {
          eventId: event.id,
          teamName: teamName.toUpperCase(),
        },
      );
      if (res.status === 500) {
        toast.error(res.data.message, toastStyle);
        return;
      }
      if (!res.data.available) {
        setTeamNameError("Team name not available !");
        return;
      }
      const response = await axios.post(`${BACKEND_URL}/api/events/register`, {
        userId: session.data.user.id,
        eventId: event.id,
        teamName: teamName.toUpperCase(),
        teamMembers: emailList,
      });
      if (response.data?.message) {
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
      setEmailError("Invalid email");
      return;
    }
    if (email === session.data.user.email) {
      setEmailError("You are already in team");
      return;
    }
    if (emailList.includes(email)) {
      setEmailError("User already in team");
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
        setEmailError(
          "User already registered for the event with another team",
        );
        return;
      }
      if (res.data.message === "NO") {
        setEmailList(() => [...emailList, email]);
        setEmail("");
        setEmailError("");
      }
    } catch (error) {
      setEmailError(error.response.data.message);
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
        <Button className="font-thin font-iceland text-sm  md:text-xl">
          Register
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Team</DialogTitle>
          <DialogDescription>
            Add your team members and register for the event
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="teamName" className="mb-2 font-normal">
              Team Name
            </label>
            <Input
              type="text"
              className="uppercase"
              onChange={(e) => {
                setTeamName(e.target.value);
                setTeamNameError("");
              }}
              value={teamName}
            />
            {teamNameError && (
              <p className="text-red-500 text-sm mt-1">{teamNameError}</p>
            )}
          </div>
          <div className="flex flex-col mb-7">
            <label htmlFor="email" className=" mb-2 font-normal">
              Add Members (Email)
            </label>
            <div className="flex flex-row gap-x-1 sm:gap-x-2  justify-between">
              <Input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                className="w-[90%]"
              />
              <Button
                type="button"
                className="font-iceland"
                onClick={handleAddUser}
                isLoading={isAddingUser}
              >
                Add
              </Button>
            </div>
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <div>
            <label className=" mb-2 font-normal">
              Members{" "}
              <span className="text-xs ">{`This event needs ${event.minTeamSize} to ${event.maxTeamSize} members`}</span>
            </label>
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
            <Button
              type="button"
              variant="secondary"
              className="font-thin font-iceland text-sm  md:text-xl"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            onClick={handleSubmit}
            isLoading={isSubmitting}
            className="font-thin font-iceland text-sm  md:text-xl"
          >
            Register
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
