import { Select } from "@/components";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export const ComponentSelect = () => {
  const [value, setValue] = useState("");
  return (
    <>
      {/* 
          size={"sm" | "md"}
          label={""}
          name={""}
          options={[""]}
          startIcon={</>}
          value={""}
          endIcon={</>}
          onChange={() => {}}
          supText={true | false}
          supLabel={""}
          error={true | false}
          disabled={true | false}
          required={true | false}
      */}

      <section className="space-y-5">
        {/* --- SIZE SMALL --- */}
        <Select
          size={"sm"}
          label={"Select"}
          name={"SelectSmall"}
          options={["A", "B"]}
          startIcon={<CloseIcon sx={{ fontSize: 30 }} />}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Select
          size={"sm"}
          label={"Select"}
          name={"DisabledSelectSmall"}
          options={["A", "B"]}
          startIcon={<CloseIcon sx={{ fontSize: 30 }} />}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={true}
        />

        <Select
          size={"sm"}
          label={"Select"}
          name={"ErrorSelectSmall"}
          options={["A", "B"]}
          startIcon={<CloseIcon sx={{ fontSize: 30 }} />}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          supText={true}
          supLabel={"Support Text"}
          error={true}
        />

        {/* --- SIZE MEDIUM --- */}
        <Select
          size={"md"}
          label={"Select"}
          name={"SelectMedium"}
          options={["A", "B"]}
          startIcon={<CloseIcon sx={{ fontSize: 30 }} />}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Select
          size={"md"}
          label={"Select"}
          name={"DisabledSelectMedium"}
          options={["A", "B"]}
          startIcon={<CloseIcon sx={{ fontSize: 30 }} />}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={true}
        />

        <Select
          size={"md"}
          label={"Select"}
          name={"ErrorSelectMedium"}
          options={["A", "B"]}
          startIcon={<CloseIcon sx={{ fontSize: 30 }} />}
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
