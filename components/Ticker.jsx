"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Ticker() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getTickerValue() {
      try {
        const res = await fetch("/api/ticker");
        if (!res.ok) throw new Error("failed to fetch ticker data");

        const data = await res.json();
        setItems(data.tickerData || []);
      } catch (err) {
        console.log("ticker fetch err ->", err); 
      }
    }

    getTickerValue();
  }, []);

  const duplicatedItems = [...items, ...items]; 

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex">
        <motion.div
          className="flex flex-none gap-24 pr-24"
          animate={{ translateX: "-50%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {duplicatedItems.map((item, idx) => (
            <span key={idx} className="mx-6 flex-shrink-0">
              <strong>{item.symbol}</strong> ₹{item.close}{" "}
              <span
                className={(item.percent || 0) >= 0 ? "text-green-600" : "text-red-600"}
              >
                {(item.percent || 0) >= 0 ? "+" : "-"}{" "}
                {Math.abs(item.percent || 0).toFixed(2)}%
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
