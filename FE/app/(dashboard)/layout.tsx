import { Fragment, ReactNode } from "react";

import { Navbar } from "@/components/navbar";

function DashboardLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
}

export default DashboardLayout;
