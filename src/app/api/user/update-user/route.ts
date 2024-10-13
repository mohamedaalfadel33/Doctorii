import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function PATCH(request: Request) {
  let data;
  const reqData = await request.json();

  // 1. get the cookie from the browser
  const cookie = cookies().get("token")?.value;
  console.log(cookie);
  // 2. request and get the data from the API
  await axios
    .patch(`${process.env.BASE_URL}/patients/update-profile`, reqData, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${cookie}` },
    })
    .then((response: any) => {
      // console.log(response.data);
      data = response.data as any;
    })
    .catch((error) => {
      console.error("Error:", error.response.data);
      data = error.response.data as any;
    });

  return new NextResponse(JSON.stringify(data));
}
