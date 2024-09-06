"use client";
import { Provider } from "react-redux";

import { store } from "@/store";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="text-center justify-center">
        <Provider store={store}>{children}</Provider>
      </div>
    </section>
  );
}
