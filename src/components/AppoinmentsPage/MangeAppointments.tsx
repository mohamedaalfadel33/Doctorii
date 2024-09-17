import React from "react";
import { Separator } from "@/components/ui/separator";
import Appointment from "./Appointment";

const MangeAppointments = () => {
  return (
    <div className="mt-8 min-h-[50rem] rounded-3xl bg-zinc-300 p-4">
      <h2 className="mb-8 text-center tracking-[0.2rem]">Mange Appointments</h2>
      <div>
        <div className="mb-8 grid grid-cols-5 p-4">
          <h3>Doctor Name</h3>
          <h3>Location</h3>
          <h3>Reservation Date</h3>
          <h3>Status</h3>
        </div>
      </div>

      <Separator className="mb-4 bg-zinc-600" />

      <div className="flex flex-col gap-8">
        <Appointment
          name="Dr. Ammatar abdo halfawe"
          location="Khartoum,AL-Amarat ibn Sina Hospital"
          date="12-12-2022"
          time="7:00 PM - 11:00 PM"
          status="Confirmed"
          cancel={false}
        />
        <Appointment
          name="Dr. Ammatar abdo halfawe"
          location="Khartoum,AL-Amarat ibn Sina Hospital"
          date="12-12-2022"
          time="7:00 PM - 11:00 PM"
          status="Completed"
          cancel={true}
        />
        <Appointment
          name="Dr. Ammatar abdo halfawe"
          location="Khartoum,AL-Amarat ibn Sina Hospital"
          date="12-12-2022"
          time="7:00 PM - 11:00 PM"
          status="Cancelled"
          cancel={true}
        />
      </div>
    </div>
  );
};

export default MangeAppointments;
