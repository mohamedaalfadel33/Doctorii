import DoctorAvailableTime from "../ui/doctorAvailableTime";

function BookingInformation({ data, doctorId }: any) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl bg-[#DADADB] p-12">
      <h1 className="mb-auto text-xl font-bold">Booking Information</h1>
      <div className="flex flex-wrap items-center justify-between gap-2">
        {data?.availability.map((data: any, i: number) => {
          return (
            <DoctorAvailableTime doctorId={doctorId} key={i} data={data} />
          );
        })}
      </div>
    </div>
  );
}

export default BookingInformation;
