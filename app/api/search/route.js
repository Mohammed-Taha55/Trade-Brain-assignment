import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const keyword = searchParams.get("keyword") || "no-stock";

    const url = `https://portal.tradebrains.in/api/assignment/search?keyword=${keyword}&length=5`;

    const res = await fetch(url, { method: "GET" });
    const data = await res.json();

    // console.log("data fetched for search", data); 
    return NextResponse.json(
      { message: "Search value fetched succesfully", searchValue: data },
      { status: 200 }
    );
  } catch (err) {
    // console.log("oops error while fetching", err); 
    return NextResponse.json(
      { error: "Error while fetching Search value" },
      { status: 500 }
    );
  }
}
