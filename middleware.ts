import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server";
const {verify} = jwt

export const validateToken = (req:NextRequest) => {
    //one of the way to pass token
    const accessToken = req.headers.get("accessToken");
  
    if (!accessToken) {
      return NextResponse.json({ errorMessage: "로그인하지 않은 사용자입니다" });
    }
  
    try {
      const validToken = verify(accessToken, process.env.JWT_SECRET);
      (req as any).user = validToken;
      if (validToken) {
        return NextResponse.next();
      }
    } catch (err) {
      return NextResponse.json({ errorMessage: err });
    }
  };