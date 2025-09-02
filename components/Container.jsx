import React from "react";

export default function Container({ children }) {
  return (
    <main className="mx-auto max-w-[1200px] px-4 md:px-8 lg:px-16">
      {children}
    </main>
  );
}
