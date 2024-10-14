import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const reqData = await request.json();

  let data;

  // 1. get the cookie from the browser
  const cookie = cookies().get("token")?.value;
  // console.log(cookie);
  // 2. request and get the data from the API
  await axios
    .post(`${process.env.BASE_URL}/doctors/profile`, reqData, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${cookie}` },
    })
    .then((response: any) => {
      data = response.data as any;
    })
    .catch((error) => {
      console.error("Error:", error.response);
      data = error.response.data as any;
    });

  return new NextResponse(JSON.stringify(data));
}
