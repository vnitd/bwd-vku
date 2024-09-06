import { MouseEventHandler } from "react";

function GeminiLoading({
  width,
  height,
  isLoading,
  onClick,
}: Readonly<{
  width: number;
  height: number;
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}>) {
  return (
    <div
      className={`w-[${width}px] h-[${height}] ${isLoading ? "animate-pulse" : ""} cursor-pointer`}
      onClick={onClick}
    >
      <img
        alt="/gemini.png"
        className="object-contain"
        height={height}
        src="/gemini.png"
        width={width}
      />
    </div>
  );
}

export default GeminiLoading;
