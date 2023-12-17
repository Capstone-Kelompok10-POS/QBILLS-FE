import { DatePicker } from "@/components";
import { useState } from "react";

export const ComponentDate = () => {
  const [value, setValue] = useState();
  return (
    <>
      {/* 
          size={"sm" | "md"}
          name={""}
          value={""}
          onChange={() => {}}
          supText={true | false}
          supLabel={""}
          error={true | false}
          disabled={true | false}
          required={true | false}
      */}

      <section className="space-y-5">
        {/* --- SIZE SMALL --- */}
        <DatePicker
          size={"sm"}
          name={"DateSmall"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <DatePicker
          size={"sm"}
          name={"DisabledDateSmall"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={true}
        />

        <DatePicker
          size={"sm"}
          name={"ErrorDateSmall"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          supText={true}
          supLabel={"Support Text"}
          error={true}
        />

        {/* --- SIZE MEDIUM --- */}
        <DatePicker
          size={"md"}
          name={"DateMedium"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <DatePicker
          size={"md"}
          name={"DisabledDateMedium"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={true}
        />

        <DatePicker
          size={"md"}
          name={"ErrorDateMedium"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          supText={true}
          supLabel={"Support Text"}
          error={true}
        />
      </section>
    </>
  );
};
