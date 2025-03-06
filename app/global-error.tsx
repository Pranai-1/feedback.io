"use client";

import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";
import React from "react";

interface ErrorPageProps {
  statusCode?: number;
  title?: string;
  message?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  statusCode = 500,
  title = "An error occurred",
  message = "We're sorry, but something went wrong. Please try again later.",
}) => {
  return (
    <div>
      <div className="grid min-h-[80vh] place-content-center px-4">
        <h1 className="text-4xl font-bold text-slate-300 mb-4">
          {statusCode} | {title}
        </h1>
        <p className="text-slate-200 text-center mb-6">{message}</p>
        <RainbowButton  className="mt-3 text-slate-200" >
          <Link href="/">Go Back Home 🏡</Link>
        </RainbowButton>
        <p className="text-slate-200 font-thin text-center mt-6">
          - Feedback.io -
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
