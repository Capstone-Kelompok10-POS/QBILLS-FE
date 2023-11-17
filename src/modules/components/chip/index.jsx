import { Chip } from "@/components";
import CloseIcon from "@mui/icons-material/Close";

export const ComponentChip = () => {
  return (
    <>
      {/* 
          size={"sm" | "md" | "lg" | "xl" | "2xl" | "3xl"}
          startIcon={</>}
          label={""}
          endIcon={</>}
          onClick={() => {}}
          selected={true | false}
          disabled={true | false}
      */}

      <section className="flex flex-col items-center justify-center gap-5">
        {/* --- SIZE SMALL --- */}
        <div className="flex items-center justify-center gap-5">
          <div className="flex gap-5">
            <Chip size={"sm"} label={"Label"} onClick={() => {}} />

            <Chip size={"sm"} label={"Label"} selected={true} />

            <Chip size={"sm"} label={"Label"} onClick={() => {}} disabled={true} />

            <Chip size={"sm"} label={"Label"} onClick={() => {}} disabled={true} />

            <Chip size={"sm"} label={"Label"} onClick={() => {}} variant={"success"} />

            <Chip size={"sm"} label={"Label"} onClick={() => {}} variant={"canceled"} />

            <Chip size={"sm"} label={"Label"} onClick={() => {}} variant={"pending"} />
          </div>

          <div className="flex gap-5">
            <Chip
              size={"sm"}
              startIcon={<CloseIcon fontSize="small" />}
              label={"Label"}
              endIcon={<CloseIcon fontSize="small" />}
              onClick={() => {}}
            />

            <Chip
              size={"sm"}
              startIcon={<CloseIcon fontSize="small" />}
              label={"Label"}
              endIcon={<CloseIcon fontSize="small" />}
              selected={true}
            />

            <Chip
              size={"sm"}
              startIcon={<CloseIcon fontSize="small" />}
              label={"Label"}
              endIcon={<CloseIcon fontSize="small" />}
              onClick={() => {}}
              disabled={true}
            />
          </div>
        </div>

        {/* --- SIZE MEDIUM --- */}
        <div className="flex items-center justify-center gap-5">
          <div className="flex gap-5">
            <Chip size={"md"} label={"Label"} onClick={() => {}} />

            <Chip size={"md"} label={"Label"} selected={true} />

            <Chip size={"md"} label={"Label"} onClick={() => {}} disabled={true} />

            <Chip size={"md"} label={"Label"} onClick={() => {}} variant={"success"} />

            <Chip size={"md"} label={"Label"} onClick={() => {}} variant={"canceled"} />

            <Chip size={"md"} label={"Label"} onClick={() => {}} variant={"pending"} />
          </div>

          <div className="flex gap-5">
            <Chip
              size={"md"}
              startIcon={<CloseIcon fontSize="small" />}
              label={"Label"}
              endIcon={<CloseIcon fontSize="small" />}
              onClick={() => {}}
            />

            <Chip
              size={"md"}
              startIcon={<CloseIcon fontSize="small" />}
              label={"Label"}
              endIcon={<CloseIcon fontSize="small" />}
              selected={true}
            />

            <Chip
              size={"md"}
              startIcon={<CloseIcon fontSize="small" />}
              label={"Label"}
              endIcon={<CloseIcon fontSize="small" />}
              onClick={() => {}}
              disabled={true}
            />
          </div>
        </div>

        {/* --- SIZE LARGE --- */}
        <div className="flex items-center justify-center gap-5">
          <div className="flex gap-5">
            <Chip size={"lg"} label={"Label"} onClick={() => {}} />

            <Chip size={"lg"} label={"Label"} selected={true} />

            <Chip size={"lg"} label={"Label"} onClick={() => {}} disabled={true} />
          </div>

          <div className="flex gap-5">
            <Chip
              size={"lg"}
              startIcon={<CloseIcon fontSize="medium" />}
              label={"Label"}
              endIcon={<CloseIcon fontSize="medium" />}
              onClick={() => {}}
            />

            <Chip
              size={"lg"}
              startIcon={<CloseIcon fontSize="medium" />}
              label={"Label"}
              endIcon={<CloseIcon fontSize="medium" />}
              selected={true}
            />

            <Chip
              size={"lg"}
              startIcon={<CloseIcon fontSize="medium" />}
              label={"Label"}
              endIcon={<CloseIcon fontSize="medium" />}
              onClick={() => {}}
              disabled={true}
            />
          </div>
        </div>

        {/* --- SIZE EXTRA LARGE --- */}
        <div className="flex items-center justify-center gap-5">
          <div className="flex gap-5">
            <Chip size={"xl"} label={"Label"} onClick={() => {}} />

            <Chip size={"xl"} label={"Label"} selected={true} />

            <Chip size={"xl"} label={"Label"} onClick={() => {}} disabled={true} />
          </div>

          <div className="flex gap-5">
            <Chip
              size={"xl"}
              startIcon={<CloseIcon fontSize="medium" />}
              label={"Label"}
              endIcon={<CloseIcon fontSize="medium" />}
              onClick={() => {}}
            />

            <Chip
              size={"xl"}
              startIcon={<CloseIcon fontSize="medium" />}
              label={"Label"}
              endIcon={<CloseIcon fontSize="medium" />}
              selected={true}
            />

            <Chip
              size={"xl"}
              startIcon={<CloseIcon fontSize="medium" />}
              label={"Label"}
              endIcon={<CloseIcon fontSize="medium" />}
              onClick={() => {}}
              disabled={true}
            />
          </div>
        </div>

        {/* --- SIZE 2 EXTRA LARGE --- */}
        <div className="flex items-center justify-center gap-5">
          <div className="flex gap-5">
            <Chip size={"2xl"} label={"Label"} onClick={() => {}} />

            <Chip size={"2xl"} label={"Label"} selected={true} />

            <Chip size={"2xl"} label={"Label"} onClick={() => {}} disabled={true} />
          </div>

          <div className="flex gap-5">
            <Chip
              size={"2xl"}
              startIcon={<CloseIcon fontSize="large" />}
              label={"Label"}
              endIcon={<CloseIcon fontSize="large" />}
              onClick={() => {}}
            />

            <Chip
              size={"2xl"}
              startIcon={<CloseIcon fontSize="large" />}
              label={"Label"}
              endIcon={<CloseIcon fontSize="large" />}
              selected={true}
            />

            <Chip
              size={"2xl"}
              startIcon={<CloseIcon fontSize="large" />}
              label={"Label"}
              endIcon={<CloseIcon fontSize="large" />}
              onClick={() => {}}
              disabled={true}
            />
          </div>
        </div>

        {/* --- SIZE 3 EXTRA LARGE --- */}
        <div className="flex items-center justify-center gap-5">
          <div className="flex gap-5">
            <Chip size={"3xl"} label={"Label"} onClick={() => {}} />

            <Chip size={"3xl"} label={"Label"} selected={true} />

            <Chip size={"3xl"} label={"Label"} onClick={() => {}} disabled={true} />
          </div>

          {/* WITH ICON */}
          <div className="flex gap-5">
            <Chip
              size={"3xl"}
              startIcon={<CloseIcon fontSize="large" />}
              label={"Label"}
              endIcon={<CloseIcon fontSize="large" />}
              onClick={() => {}}
            />

            <Chip
              size={"3xl"}
              startIcon={<CloseIcon fontSize="large" />}
              label={"Label"}
              endIcon={<CloseIcon fontSize="large" />}
              selected={true}
            />

            <Chip
              size={"3xl"}
              startIcon={<CloseIcon fontSize="large" />}
              label={"Label"}
              endIcon={<CloseIcon fontSize="large" />}
              onClick={() => {}}
              disabled={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};
