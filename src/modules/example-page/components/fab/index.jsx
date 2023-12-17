import { FAB } from "@/components";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

export const ComponentFAB = () => {
  return (
    <>
      {/* 
          variant={"outline"}
          size={"sm" | "md" | "lg" | "xl" | "2xl" | "3xl"}
          icon={</>}
          label={""}
          onClick={() => {}}
          disabled={true | false}
      */}

      <section className="flex items-center justify-center gap-5">
        {/* --- SIZE SMALL --- */}
        <div className="space-y-5">
          <div className="flex items-center justify-center gap-5">
            <FAB size={"sm"} icon={<CreateOutlinedIcon fontSize="small" />} onClick={() => {}} />

            <FAB
              variant={"outline"}
              size={"sm"}
              icon={<CreateOutlinedIcon fontSize="small" />}
              onClick={() => {}}
            />

            <FAB
              size={"sm"}
              icon={<CreateOutlinedIcon fontSize="small" />}
              onClick={() => {}}
              disabled={true}
            />

            <FAB
              variant={"outline"}
              size={"sm"}
              icon={<CreateOutlinedIcon fontSize="small" />}
              onClick={() => {}}
              disabled={true}
            />

            <FAB
              size={"sm"}
              icon={<CreateOutlinedIcon fontSize="small" />}
              label={"Label"}
              onClick={() => {}}
            />

            <FAB
              variant={"outline"}
              size={"sm"}
              icon={<CreateOutlinedIcon fontSize="small" />}
              label={"Label"}
              onClick={() => {}}
            />

            <FAB
              size={"sm"}
              icon={<CreateOutlinedIcon fontSize="small" />}
              label={"Label"}
              onClick={() => {}}
              disabled={true}
            />

            <FAB
              variant={"outline"}
              size={"sm"}
              icon={<CreateOutlinedIcon fontSize="small" />}
              label={"Label"}
              onClick={() => {}}
              disabled={true}
            />
          </div>

          {/* --- SIZE MEDIUM --- */}
          <div className="flex items-center justify-center gap-5">
            <FAB size={"md"} icon={<CreateOutlinedIcon fontSize="small" />} onClick={() => {}} />

            <FAB
              variant={"outline"}
              size={"md"}
              icon={<CreateOutlinedIcon fontSize="small" />}
              onClick={() => {}}
            />

            <FAB
              size={"md"}
              icon={<CreateOutlinedIcon fontSize="small" />}
              onClick={() => {}}
              disabled={true}
            />

            <FAB
              variant={"outline"}
              size={"md"}
              icon={<CreateOutlinedIcon fontSize="small" />}
              onClick={() => {}}
              disabled={true}
            />

            <FAB
              size={"md"}
              icon={<CreateOutlinedIcon fontSize="small" />}
              label={"Label"}
              onClick={() => {}}
            />

            <FAB
              variant={"outline"}
              size={"md"}
              icon={<CreateOutlinedIcon fontSize="small" />}
              label={"Label"}
              onClick={() => {}}
            />

            <FAB
              size={"md"}
              icon={<CreateOutlinedIcon fontSize="small" />}
              label={"Label"}
              onClick={() => {}}
              disabled={true}
            />

            <FAB
              variant={"outline"}
              size={"md"}
              icon={<CreateOutlinedIcon fontSize="small" />}
              label={"Label"}
              onClick={() => {}}
              disabled={true}
            />
          </div>

          {/* --- SIZE LARGE --- */}
          <div className="flex items-center justify-center gap-5">
            <FAB size={"lg"} icon={<CreateOutlinedIcon fontSize="medium" />} onClick={() => {}} />

            <FAB
              variant={"outline"}
              size={"lg"}
              icon={<CreateOutlinedIcon fontSize="medium" />}
              onClick={() => {}}
            />

            <FAB
              size={"lg"}
              icon={<CreateOutlinedIcon fontSize="medium" />}
              onClick={() => {}}
              disabled={true}
            />

            <FAB
              variant={"outline"}
              size={"lg"}
              icon={<CreateOutlinedIcon fontSize="medium" />}
              onClick={() => {}}
              disabled={true}
            />

            <FAB
              size={"lg"}
              icon={<CreateOutlinedIcon fontSize="medium" />}
              label={"Label"}
              onClick={() => {}}
            />

            <FAB
              variant={"outline"}
              size={"lg"}
              icon={<CreateOutlinedIcon fontSize="medium" />}
              label={"Label"}
              onClick={() => {}}
            />

            <FAB
              size={"lg"}
              icon={<CreateOutlinedIcon fontSize="medium" />}
              label={"Label"}
              onClick={() => {}}
              disabled={true}
            />

            <FAB
              variant={"outline"}
              size={"lg"}
              icon={<CreateOutlinedIcon fontSize="medium" />}
              label={"Label"}
              onClick={() => {}}
              disabled={true}
            />
          </div>

          {/* --- SIZE EXTRA LARGE --- */}
          <div className="flex items-center justify-center gap-5">
            <FAB size={"xl"} icon={<CreateOutlinedIcon fontSize="medium" />} onClick={() => {}} />

            <FAB
              variant={"outline"}
              size={"xl"}
              icon={<CreateOutlinedIcon fontSize="medium" />}
              onClick={() => {}}
            />

            <FAB
              size={"xl"}
              icon={<CreateOutlinedIcon fontSize="medium" />}
              onClick={() => {}}
              disabled={true}
            />

            <FAB
              variant={"outline"}
              size={"xl"}
              icon={<CreateOutlinedIcon fontSize="medium" />}
              onClick={() => {}}
              disabled={true}
            />

            <FAB
              size={"xl"}
              icon={<CreateOutlinedIcon fontSize="medium" />}
              label={"Label"}
              onClick={() => {}}
            />

            <FAB
              variant={"outline"}
              size={"xl"}
              icon={<CreateOutlinedIcon fontSize="medium" />}
              label={"Label"}
              onClick={() => {}}
            />

            <FAB
              size={"xl"}
              icon={<CreateOutlinedIcon fontSize="medium" />}
              label={"Label"}
              onClick={() => {}}
              disabled={true}
            />

            <FAB
              variant={"outline"}
              size={"xl"}
              icon={<CreateOutlinedIcon fontSize="medium" />}
              label={"Label"}
              onClick={() => {}}
              disabled={true}
            />
          </div>

          {/* --- SIZE 2 EXTRA LARGE --- */}
          <div className="flex items-center justify-center gap-5">
            <FAB size={"2xl"} icon={<CreateOutlinedIcon fontSize="large" />} onClick={() => {}} />

            <FAB
              variant={"outline"}
              size={"2xl"}
              icon={<CreateOutlinedIcon fontSize="large" />}
              onClick={() => {}}
            />

            <FAB
              size={"2xl"}
              icon={<CreateOutlinedIcon fontSize="large" />}
              onClick={() => {}}
              disabled={true}
            />

            <FAB
              variant={"outline"}
              size={"2xl"}
              icon={<CreateOutlinedIcon fontSize="large" />}
              onClick={() => {}}
              disabled={true}
            />

            <FAB
              size={"2xl"}
              icon={<CreateOutlinedIcon fontSize="large" />}
              label={"Label"}
              onClick={() => {}}
            />

            <FAB
              variant={"outline"}
              size={"2xl"}
              icon={<CreateOutlinedIcon fontSize="large" />}
              label={"Label"}
              onClick={() => {}}
            />

            <FAB
              size={"2xl"}
              icon={<CreateOutlinedIcon fontSize="large" />}
              label={"Label"}
              onClick={() => {}}
              disabled={true}
            />

            <FAB
              variant={"outline"}
              size={"2xl"}
              icon={<CreateOutlinedIcon fontSize="large" />}
              label={"Label"}
              onClick={() => {}}
              disabled={true}
            />
          </div>

          {/* --- SIZE 3 EXTRA LARGE --- */}
          <div className="flex items-center justify-center gap-5">
            <FAB size={"3xl"} icon={<CreateOutlinedIcon fontSize="large" />} onClick={() => {}} />

            <FAB
              variant={"outline"}
              size={"3xl"}
              icon={<CreateOutlinedIcon fontSize="large" />}
              onClick={() => {}}
            />

            <FAB
              size={"3xl"}
              icon={<CreateOutlinedIcon fontSize="large" />}
              onClick={() => {}}
              disabled={true}
            />

            <FAB
              variant={"outline"}
              size={"3xl"}
              icon={<CreateOutlinedIcon fontSize="large" />}
              onClick={() => {}}
              disabled={true}
            />

            <FAB
              size={"3xl"}
              icon={<CreateOutlinedIcon fontSize="large" />}
              label={"Label"}
              onClick={() => {}}
            />

            <FAB
              variant={"outline"}
              size={"3xl"}
              icon={<CreateOutlinedIcon fontSize="large" />}
              label={"Label"}
              onClick={() => {}}
            />

            <FAB
              size={"3xl"}
              icon={<CreateOutlinedIcon fontSize="large" />}
              label={"Label"}
              onClick={() => {}}
              disabled={true}
            />

            <FAB
              variant={"outline"}
              size={"3xl"}
              icon={<CreateOutlinedIcon fontSize="large" />}
              label={"Label"}
              onClick={() => {}}
              disabled={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};
