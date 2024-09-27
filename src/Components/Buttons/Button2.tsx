import react from "react";

export default function Button2() {
  return (
    
    <button
      style= {{boxShadow: "inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)"}}
      className="inline-flex cursor-pointer items-center gap-4 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100  p-4"
    >
      Proceed
    </button>
  );
}
