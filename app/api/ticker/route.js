import { NextResponse } from "next/server";

export async function GET() {
  const url = "https://portal.tradebrains.in/api/assignment/index/NIFTY/movers/";

  try {
    const res = await fetch(url, { headers: { Accept: "application/json" } });
    const data = await res.json();

    const merged = [...(data.gainers || []), ...(data.losers || [])];

    // console.log("merged data looks like ->", merged)
    return NextResponse.json({ tickerData: merged }, { status: 200 });
  } catch (err) {
    // just in case somthing went wrong
    return NextResponse.json(
      { error: "Failed to fetch ticker data" },
      { status: 502 }
    );
  }
}

