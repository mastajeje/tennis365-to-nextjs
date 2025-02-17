// import {  NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { validateToken } from "../../../middleware";

interface SearchResponse {
    url?: URL;
  }

export async function GET(req:NextRequest, res:NextResponse) {
    // apply the middleware
        const authResponse = await validateToken(req);
        if(authResponse.status !== 200){
            return authResponse;
        }

        // main handler logic
    try{
        // res.json((req as any).user);
        return NextResponse.json((req as any).user);

    } catch(error:any) {
        console.error('Error running query', error);
        return new Response(JSON.stringify({error: error.message}), {status: 500})    }
}
