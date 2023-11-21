import { Checkbox } from "@/components";
import React from "react";

export const ComponentCheckbox = () => {
  return (
    <>
      {/* 
        onChange={()=>{}}
        checked={true | false}
        disabled={true | false}
      */}
      <section className=" flex justify-center gap-x-5">
        <Checkbox onChange={() => {}} />
        <Checkbox onChange={() => {}} checked={false} disabled={true} />
        <Checkbox onChange={() => {}} checked={true} disabled={true} />
      </section>
    </>
  );
};
