import React from "react";
import UserImage from "../../components/UserImage";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/Button";

export default function UserDetailForm({ user }) {
  return (
    <form className="flex flex-col gap-4">
      <Label className="mb-2">Profile Picture</Label>
      <div className="flex items-center justify-center">
        <div className="!w-[6rem] !h-[6rem] flex items-center hover:bg-[#030712] p-[0.2rem] justify-center ">
          <UserImage image={user?.image} key={user?.image} />
        </div>
      </div>

      <div>
        <Label className="">Name</Label>
        <Input
          disabled
          placeholder="Enter your name"
          value={user?.name ? user?.name : ""}
          className="p-2 mt-2"
        />
      </div>
      <div>
        <Label className="">Email</Label>
        <Input
          disabled
          placeholder="Enter your email"
          value={user?.email ? user?.email : ""}
          className="p-2 mt-2"
        />
      </div>
      <div>
        <Label className="">College Name</Label>
        <Input
          disabled
          placeholder="Enter your college name"
          value={user?.name ? user?.name : ""}
          className="p-2 mt-2"
        />
      </div>
      <div>
        <Label className="">College RollNumber</Label>
        <Input
          disabled
          placeholder="Enter your college roll number"
          value={user?.name ? user?.name : ""}
          className="p-2 mt-2"
        />
      </div>
      <div>
        <Label className="">Phone Number</Label>
        <Input
          disabled
          placeholder="Enter your contact number"
          value={user?.name ? user?.name : ""}
          className="p-2 mt-2"
        />
      </div>
      <div className="flex items-center justify-center">
        <Button className="w-40">Save Details</Button>
      </div>
    </form>
  );
}
