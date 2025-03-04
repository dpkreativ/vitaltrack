"use client";

import SearchIcon from "../icons/SearchIcon";
import MenuIcon from "../icons/MenuIcon";

// import { patients } from "./utils/patientsMockData";
import { Patient } from "@/lib/services/PatientsTypes";
import { useRouter } from "next/navigation";

const PatientList = ({ patients }: { patients: Patient[] }) => {
  const router = useRouter();

  const handlePatientClick = (id: string) => {
    router.push(`/dashboard/patient/${id}`);
  };

  return (
    <ul role="list" className="rounded-3xl bg-white divide-y divide-gray-100">
      <li className="flex justify-between items-center gap-x-6 p-5">
        <h2 className="text-2xl font-medium">Patients</h2>
        <SearchIcon />
      </li>
      {patients?.map((patient, index) => {
        return (
          <li
            key={index}
            // className={
            //   patient.isActive
            //     ? "flex justify-between gap-x-6 p-5 items-center bg-gray-200"
            //     : "flex justify-between gap-x-6 p-5 items-center"
            // }
            className="flex justify-between gap-x-6 p-5 items-center hover:bg-gray-200 cursor-pointer"
            onClick={() =>
              handlePatientClick(patient.name.split(" ").join("-"))
            }
          >
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={patient.profile_picture}
                alt={patient.name}
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {patient.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-center">
              <MenuIcon />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default PatientList;
