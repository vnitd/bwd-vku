"use client";
import { Skeleton } from "@nextui-org/skeleton";
import { useState } from "react";

import GeminiLoading from "./loading_gemini";

import { siteConfig } from "@/config/site";
import { usePostGeminiMutation } from "@/store/queries/gemini";

const SubQuestion = ({ item, index }: Readonly<{ item: any; index: any }>) => {
  const [postGeminiMutation, { isLoading, isSuccess }] =
    usePostGeminiMutation();

  const [content, setContent] = useState<string>("");

  const handleRequest = async () => {
    const response = await postGeminiMutation({ prompt: item.value }).unwrap();

    setContent(response?.result);
  };

  return (
    <div className="p-3 transition-all transform shadow-md rounded-md m-2 border border-gray-400 w-full">
      <h3 className="text-lg text-gray m-2 text-left">
        Q{index + 1}: {item.value}
      </h3>
      <div className="flex justify-start">
        <GeminiLoading
          height={50}
          isLoading={isLoading}
          width={50}
          onClick={handleRequest}
        />
        {isLoading && (
          <div
            className={`w-full flex flex-col gap-2 p-2 rounded-md bg-gray-500`}
          >
            <Skeleton className="h-3 w-3/5 rounded-lg" />
            <Skeleton className="h-3 w-4/5 rounded-lg" />
            <Skeleton className="h-3 w-2/5 rounded-lg" />
          </div>
        )}
        {isSuccess && (
          <div
            className={`w-full flex flex-col gap-2 p-2 rounded-md bg-gray-500`}
          >
            <p className="text-medium text-left text-white">{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const Question = () => {
  return (
    <div className="w-[80%]">
      {siteConfig.question.map((item, index) => (
        <SubQuestion key={index} index={index} item={item} />
      ))}
    </div>
  );
};
