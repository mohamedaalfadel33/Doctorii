import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  let data;
  const reqData = await request.json();
  console.log(reqData);

  // 1. get the cookie from the browser
  const cookie = cookies().get("token")?.value;

  // 2. request and get the data from the API
  await axios
    .get(`${process.env.BASE_URL}/patients/appointments/cancel/${reqData.id}`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${cookie}` },
    })
    .then((response: any) => {
      // console.log(response.data);
      data = response.data as any;
    })
    .catch((error) => {
      console.error("Error:", error.response);
      data = error.response.data as any;
    });

  return new NextResponse(JSON.stringify(data));
}
