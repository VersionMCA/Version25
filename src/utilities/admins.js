import { redirect } from "next/navigation";

const admins = ["vivekyadavnitt@gmail.com"];
export default admins;

export const adminCheck = (email) => {
  if (!admins.includes(email)) redirect("/");
};
