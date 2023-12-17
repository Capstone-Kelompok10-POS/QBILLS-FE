import { Input } from "@/components";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export const ComponentInput = () => {
  const [value, setValue] = useState("");
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      {/* 
          type={""}
          size={"sm" | "md"}
          label={""}
          name={""}
          startIcon={</>}
          value={""}
          endIcon={</>}
          endIconOnClick={() => {}}
          onChange={() => {}}
          supText={true | false}
          supLabel={""}
          error={true | false}
          disabled={true | false}
          required={true | false}
      */}

      <section className="space-y-5">
        {/* --- SIZE SMALL --- */}
        <Input
          type={"text"}
          size={"sm"}
          label={"Text"}
          name={"TextSmall"}
          startIcon={<CloseIcon sx={{ fontSize: 30 }} />}
          value={value}
          endIcon={<CloseIcon sx={{ fontSize: 30 }} />}
          onChange={(e) => setValue(e.target.value)}
        />

        <Input
          type={"text"}
          size={"sm"}
          label={"Disabled"}
          name={"DisabledSmall"}
          startIcon={<CloseIcon sx={{ fontSize: 30 }} />}
          value={value}
          endIcon={<CloseIcon sx={{ fontSize: 30 }} />}
          onChange={(e) => setValue(e.target.value)}
          disabled={true}
        />

        <Input
          type={visibility ? "text" : "password"}
          size={"sm"}
          label={"Password"}
          name={"PasswordSmall"}
          startIcon={<CloseIcon sx={{ fontSize: 30 }} />}
          value={value}
          endIcon={
            visibility ? (
              <VisibilityIcon sx={{ fontSize: 25 }} className="cursor-pointer" />
            ) : (
              <VisibilityOffIcon sx={{ fontSize: 25 }} className="cursor-pointer" />
            )
          }
          endIconOnClick={() => setVisibility(!visibility)}
          onChange={(e) => setValue(e.target.value)}
          supText={true}
          supLabel={"Support Text"}
          error={true}
        />

        {/* --- SIZE MEDIUM --- */}
        <Input
          type={"text"}
          size={"md"}
          label={"Text"}
          name={"UsernameMedium"}
          startIcon={<CloseIcon sx={{ fontSize: 30 }} />}
          value={value}
          endIcon={<CloseIcon sx={{ fontSize: 30 }} />}
          onChange={(e) => setValue(e.target.value)}
        />

        <Input
          type={"text"}
          size={"md"}
          label={"Disabled"}
          name={"DisabledMedium"}
          startIcon={<CloseIcon sx={{ fontSize: 30 }} />}
          value={value}
          endIcon={<CloseIcon sx={{ fontSize: 30 }} />}
          onChange={(e) => setValue(e.target.value)}
          disabled={true}
        />

        <Input
          type={visibility ? "text" : "password"}
          size={"md"}
          label={"Password"}
          name={"PasswordMedium"}
          startIcon={<CloseIcon sx={{ fontSize: 30 }} />}
          value={value}
          endIcon={
            visibility ? (
              <VisibilityIcon sx={{ fontSize: 25 }} className="cursor-pointer" />
            ) : (
              <VisibilityOffIcon sx={{ fontSize: 25 }} className="cursor-pointer" />
            )
          }
          endIconOnClick={() => setVisibility(!visibility)}
          onChange={(e) => setValue(e.target.value)}
          supText={true}
          supLabel={"Support Text"}
          error={true}
        />
      </section>
    </>
  );
};
