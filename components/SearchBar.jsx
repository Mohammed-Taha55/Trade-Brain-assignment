"use client";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { motion } from "motion/react";
import Link from "next/link";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState(null);
  const [searchInput, setSearchInput] = useState(null);

  useEffect(() => {
    async function getSearchValue() {
      try {
        const res = await fetch(`/api/search?keyword=${searchInput}`);
        const data = await res.json();
        setSearchValue(data.searchValue);
      } catch (e) {
        console.log("err fetching search value", e); // casual log
      }
    }

    getSearchValue();

    if (!searchInput) {
      setSearchValue(null);
    }
  }, [searchInput]);

  return (
    <section className="py-8 md:py-20">
      <div className="flex flex-col mx-auto w-full max-w-xl">
        <h1 className="pb-4 md:py-4 text-2xl font-semibold tracking-tight text-neutral-700">
          Enter the stock name
        </h1>

        <Input
          type="text"
          placeholder="eg: reliance"
          onChange={(e) => {
            setSearchInput(e.target.value);
            if (!searchInput) setSearchValue(null);
          }}
          className="w-full bg-white border shadow-xl"
        />

        {searchValue && (
          <motion.div
            className="bg-white mt-6 rounded-xl divide-y shadow-xl"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
          >
            {searchValue.slice(0, 5).map((stock, idx) => (
              <Link href={`/stock/${stock.symbol}`} key={idx}>
                <motion.div
                  className="p-4 w-full flex justify-between bg-white rounded-xl px-6"
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="flex flex-col gap-2">
                    <h2 className="tracking-tight">{stock.company}</h2>
                    <h3 className="text-xs text-purple-500 tracking-tighter">
                      {stock.symbol}
                    </h3>
                  </div>
                  <h2 className="text-sm text-muted-foreground">
                    {stock.type}
                  </h2>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
