import { NextResponse, NextRequest } from "next/server";
import { userState } from "../atoms/userAtom";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  if(pathname === "/menu") {
    if (typeof window === "object") {
      console.log("selam")
    const user = window.localStorage("user");

    if (user === null) {
       return NextResponse.redirect("/");
     
    } else {
     
    }
  } 
  
  }
 
}
