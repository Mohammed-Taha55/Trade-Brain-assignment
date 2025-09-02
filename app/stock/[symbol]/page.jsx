import StockChart from "@/components/StockChart";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

// page for showing single stock detail
export async function generateMetadata({ params }) {
  const { symbol } = params;

  return {
    title: `${symbol} Stock Price | TradeBrains Clone`,
    description: `Live stock price and intraday chart for ${symbol}. View detailed performance, market trends, and company info.`,
    keywords: `${symbol}, stock price, NSE, BSE, intraday chart, share market`,
  };
}

export default async function Stock({ params }) {
  const { symbol } = params;

  const res = await fetch(
    `https://portal.tradebrains.in/api/assignment/stock/${symbol}/prices?days=1&type=INTRADAY&limit=10000`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();
  console.log("the data to display is ->", data); // casual log

  return (
    <main className="mx-auto max-w-[1200px] relative px-4 md:px-8 lg:px-16">
      <div className="py-8">
        <div className="flex justify-between">
          <h1 className="text-2xl hidden md:flex tracking-tight font-semibold">
            {symbol}
          </h1>
          <Link href="/">
            <Button className="w-full md:w-auto md:px-10 bg-purple-400">
              Home
            </Button>
          </Link>
        </div>

        <h1 className="text-2xl md:hidden text-center py-8 tracking-tight font-semibold">
          {symbol}
        </h1>

        <div className="py-16 md:py-24">
          <StockChart data={data} />
        </div>
      </div>
    </main>
  );
}
