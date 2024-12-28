import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import CyberButton from "../ui/CyberButton";

const defaultUser = {
  name: "Lma2023",
  email: "cyz@gmail.com",
  graduationYear: 2023,
  gender: "Male",
  collegeName: "iIIT",
  collegeCity: "Dispur",
  collegeState: "Arunachal Pradesh",
  collegePinCode: "30032",
  branch: "EEE",
  phone: "1234579870",
};
const RegisterModal = ({ children }) => {
  const [open, setOpen] = useState(false);
  // user state
  const [userInfo, setUserInfo] = useState(defaultUser);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated User Info:", userInfo);
  };

  console.log(userInfo);
  return (
    <div className=" rounded-lg">
      <CyberButton text="REGISTER" onClick={onOpenModal} />
      <Modal className="rounded-lg" open={open} onClose={onCloseModal} center>
        <h2 className="p-3 text-xl font-bold text-black text-center">
          Fill in your details
        </h2>
        <div>
          <form>
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-gray-900"
              >
                Name
              </label>
              <div className="mt-0 mb-3">
                <input
                  name="name"
                  id="name"
                  type="text"
                  value={userInfo.name}
                  onChange={handleChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-900"
              >
                Email
              </label>
              <div className="mt-0 mb-3">
                <input
                  name="email"
                  id="email"
                  type="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  autoComplete="given-email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="graduationYear"
                  className="block text-lg font-semibold text-gray-900"
                >
                  Graduation Year
                </label>
                <div className="mt-0 mb-3">
                  <select
                    name="graduationYear"
                    value={userInfo.graduationYear}
                    onChange={handleChange}
                    id="graduationYear"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value={0}>Select Graduation Year</option>
                    <option value={2023}>2023</option>
                    <option value={2024}>2024</option>
                    <option value={2025}>2025</option>
                    <option value={2026}>2026</option>
                    <option value={2027}>2027</option>
                    <option value={2028}>2028</option>
                    <option value={2029}>2029</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="gender"
                  className="block text-lg font-semibold text-gray-900"
                >
                  Gender
                </label>
                <div className="mt-0 mb-3">
                  <select
                    name="gender"
                    value={userInfo.gender}
                    onChange={handleChange}
                    id="gender"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value={0}>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="collegeName"
                className="block text-lg font-semibold text-gray-900"
              >
                College Name
              </label>
              <div className="mt-0 mb-3">
                <input
                  name="collegeName"
                  id="collegeName"
                  type="text"
                  value={userInfo.collegeName}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="collegeCity"
                className="block text-lg font-semibold text-gray-900"
              >
                College City
              </label>
              <div className="mt-0 mb-3">
                <input
                  name="collegeCity"
                  id="collegeCity"
                  type="text"
                  value={userInfo.collegeCity}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="collegeState"
                className="block text-lg font-semibold text-gray-900"
              >
                College State
              </label>
              <div className="mt-0 mb-3">
                <input
                  name="collegeState"
                  id="collegeState"
                  type="text"
                  value={userInfo.collegeState}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="collegePinCode"
                className="block text-lg font-semibold text-gray-900"
              >
                College Pin Code
              </label>
              <div className="mt-0 mb-3">
                <input
                  name="collegePinCode"
                  id="collegePinCode"
                  type="text"
                  value={userInfo.collegePinCode}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="branch"
                  className="block text-lg font-semibold text-gray-900"
                >
                  Branch
                </label>
                <div className="mt-0 mb-3">
                  <input
                    name="branch"
                    id="branch"
                    type="text"
                    value={userInfo.branch}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="block text-lg font-semibold text-gray-900"
                >
                  Phone
                </label>
                <div className="mt-0 mb-3">
                  <input
                    name="phone"
                    id="phone"
                    type="tel"
                    value={userInfo.phone}
                    onChange={handleChange}
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-3  w-full flex items-center justify-center">
              <CyberButton text="Create User" />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default RegisterModal;
