"use client";

import React, { useEffect, useState } from "react";

export default function BMICalculator() {
  const [kg, setKg] = useState<number | null>(null);
  const [cm, setCm] = useState<number | null>(null);

  const [bmi, setBmi] = useState<number | null>(null);

  function handleKg(e) {
    setKg(e.target.value);
    handleMetricBmi();
  }

  function handleCm(e) {
    setCm(e.target.value);
    handleMetricBmi();
  }

  function handleMetricBmi() {
    if (kg && cm) {
      setBmi(kg / (cm / 100) ** 2);
    }
  }

  useEffect(() => handleMetricBmi(), [kg, cm]);

  return (
    <div className="card-shadow flex flex-col gap-300 rounded-2xl bg-white p-300 md:gap-400 md:p-400 xl:max-w-[35.25rem]">
      <div className="text-preset-3 text-blue-900">
        Enter your details below
      </div>

      <div>
        <label>
          <input type="number" name="cm" id="cm" onChange={handleCm} />
          <span>CM</span>
        </label>

        <label>
          <input type="number" name="kg" id="kg" onChange={handleKg} />
          <span>KG</span>
        </label>
      </div>

      {!bmi && (
        <div className="rounded-[1rem] bg-blue-500 p-400 text-white md:rounded-r-[5rem]">
          <div className="flex flex-col gap-300 md:gap-200">
            <div className="text-preset-3">Welcome!</div>
            <p>
              Enter your height and weight and you’ll see your BMI result here
            </p>
          </div>
        </div>
      )}

      {bmi && (
        <div className="rounded-[1rem] bg-blue-500 p-400 text-white md:rounded-r-[5rem] xl:rounded-r-[5.5rem]">
          <div className="flex flex-col gap-300 md:flex-row md:items-center">
            <div className="flex flex-col gap-100 md:flex-1">
              <div>Your BMI is...</div>
              <div className="text-preset-1"> {bmi?.toFixed(1)}</div>
            </div>

            <p className="md:flex-1">
              Your BMI suggests you are SOMETHING. Your ideal weight is between
              ONE and TWO.
              <strong></strong>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
