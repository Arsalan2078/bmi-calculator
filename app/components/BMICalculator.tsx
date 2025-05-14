"use client";

import React from "react";

export default function BMICalculator() {
  return (
    <div className="flex flex-col gap-300 rounded-2xl bg-white p-300 md:gap-400 md:p-400 xl:max-w-[35.25rem]">
      <div className="text-preset-3 text-blue-900">
        Enter your details below
      </div>

      <div>Radio Buttons</div>

      <div>Height & Weight</div>

      <div>Information Bar</div>
    </div>
  );
}
