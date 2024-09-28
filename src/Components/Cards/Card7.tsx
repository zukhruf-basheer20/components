import React from "react";

export default function Card7() {
  return (
    <div className="flex flex-col items-center bg-white w-72 h-auto pt-5 pb-7 border border-gray-200 rounded-lg space-y-8">
      <section className="flex flex-col text-center space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Title of your Card
        </h2>
        <p className="text-slate-500 text-sm">Subtitle on your Card</p>
      </section>
      <section className="space-y-2">
        <div className="flex gap-2">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-5 h-5 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span className="text-slate-500 text-sm">Name Product</span>
        </div>
        <div className="flex gap-2">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-5 h-5 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span className="text-slate-500 text-sm">Name Product</span>
        </div>
        <div className="flex gap-2">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-5 h-5 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span className="text-slate-500 text-sm">Name Product</span>
        </div>
      </section>
      <section className="flex w-full flex-col space-y-2 px-9">
        <button className="py-3 font-medium tracking-wide capitalize transition-colors duration-300 transform bg-gray-100 rounded-md hover:bg-gray-200 text-sm text-gray-600">
          First Buttom
        </button>
        <button className="py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600">
          Accept
        </button>
      </section>
    </div>
  );
}
