import { Date } from "@/components";
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
        <Date
          size={"sm"}
          name={"DateSmall"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Date
          size={"sm"}
          name={"DisabledDateSmall"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={true}
        />

        <Date
          size={"sm"}
          name={"ErrorDateSmall"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          supText={true}
          supLabel={"Support Text"}
          error={true}
        />

        {/* --- SIZE MEDIUM --- */}
        <Date
          size={"md"}
          name={"DateMedium"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Date
          size={"md"}
          name={"DisabledDateMedium"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={true}
        />

        <Date
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
