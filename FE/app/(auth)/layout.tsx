"use client";
import React, { Fragment } from "react";
import NextLink from "next/link";
import Link from "next/link";
import { Provider } from "react-redux";
import { useRouter } from "next/navigation";
import { Bounce, ToastContainer } from "react-toastify";
import { useTheme } from "next-themes";

import * as S from "./styles";

import { webStorageClient } from "@/types";
import AuthLayout from "@/layouts/AuthLayout";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import { GithubIcon, Logo } from "@/components/icons";
import { store } from "@/store";

export default function RootAuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const token = webStorageClient.getToken();
  const { push } = useRouter();
  const { theme } = useTheme();

  if (token) {
    push("/");

    return <Fragment />;
  }

  return (
    <AuthLayout>
      <ToastContainer
        closeOnClick
        draggable
        pauseOnFocusLoss
        pauseOnHover
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        position="top-right"
        rtl={false}
        theme={theme as string}
        transition={Bounce}
      />
      <S.FormWrapper>
        <S.Form className="w-[100vw] sm:border-0 sm:w-[50vw] lg:w-[500px] md:border rounded-[15px]">
          <Provider store={store}>{children}</Provider>
        </S.Form>
        <div className="flex w-full justify-center mt-5">
          <NextLink
            className="flex flex-col justify-start items-center gap-1"
            href="/"
          >
            <Logo size={50} />
            <p className="font-bold text-inherit text-2xl">PureEDU</p>
          </NextLink>
        </div>
        <div className="flex justify-center gap-2">
          <Link aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </div>
      </S.FormWrapper>
    </AuthLayout>
  );
}
