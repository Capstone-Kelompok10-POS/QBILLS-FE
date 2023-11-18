import { Button } from "@/components";
import CloseIcon from "@mui/icons-material/Close";

export const ComponentButton = () => {
  return (
    <>
      {/* 
          type={""}
          variant={"outline"}
          color={"success" | "info" | "warning" | "error"}
          size={"sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "sm-full" | "md-full" | "lg-full" | "xl-full" | "2xl-full" | "3xl-full"}
          startIcon={</>}
          label={""}
          endIcon={</>}
          onClick={() => {}}
          disabled={true | false}
      */}

      <section className="flex flex-col items-center justify-center gap-5">
        {/* --- SIZE SMALL --- */}
        <div className="flex gap-5">
          <Button type={"button"} size={"sm"} label={"Button"} onClick={() => {}} />

          <Button
            type={"button"}
            size={"sm"}
            startIcon={<CloseIcon fontSize="small" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="small" />}
            onClick={() => {}}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"sm"}
            label={"Button"}
            onClick={() => {}}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"sm"}
            startIcon={<CloseIcon fontSize="small" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="small" />}
            onClick={() => {}}
          />

          <Button type={"button"} size={"sm"} label={"Button"} onClick={() => {}} disabled={true} />

          <Button
            type={"button"}
            size={"sm"}
            startIcon={<CloseIcon fontSize="small" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="small" />}
            onClick={() => {}}
            disabled={true}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"sm"}
            label={"Button"}
            onClick={() => {}}
            disabled={true}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"sm"}
            startIcon={<CloseIcon fontSize="small" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="small" />}
            onClick={() => {}}
            disabled={true}
          />
        </div>

        {/* --- SIZE MEDIUM --- */}
        <div className="flex gap-5">
          <Button type={"button"} size={"md"} label={"Button"} onClick={() => {}} />

          <Button
            type={"button"}
            size={"md"}
            startIcon={<CloseIcon fontSize="small" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="small" />}
            onClick={() => {}}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"md"}
            label={"Button"}
            onClick={() => {}}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"md"}
            startIcon={<CloseIcon fontSize="small" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="small" />}
            onClick={() => {}}
          />

          <Button type={"button"} size={"md"} label={"Button"} onClick={() => {}} disabled={true} />

          <Button
            type={"button"}
            size={"md"}
            startIcon={<CloseIcon fontSize="small" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="small" />}
            onClick={() => {}}
            disabled={true}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"md"}
            label={"Button"}
            onClick={() => {}}
            disabled={true}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"md"}
            startIcon={<CloseIcon fontSize="small" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="small" />}
            onClick={() => {}}
            disabled={true}
          />
        </div>

        {/* --- SIZE LARGE --- */}
        <div className="flex gap-5">
          <Button type={"button"} size={"lg"} label={"Button"} onClick={() => {}} />

          <Button
            type={"button"}
            size={"lg"}
            startIcon={<CloseIcon fontSize="medium" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="medium" />}
            onClick={() => {}}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"lg"}
            label={"Button"}
            onClick={() => {}}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"lg"}
            startIcon={<CloseIcon fontSize="medium" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="medium" />}
            onClick={() => {}}
          />

          <Button type={"button"} size={"lg"} label={"Button"} onClick={() => {}} disabled={true} />

          <Button
            type={"button"}
            size={"lg"}
            startIcon={<CloseIcon fontSize="medium" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="medium" />}
            onClick={() => {}}
            disabled={true}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"lg"}
            label={"Button"}
            onClick={() => {}}
            disabled={true}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"lg"}
            startIcon={<CloseIcon fontSize="medium" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="medium" />}
            onClick={() => {}}
            disabled={true}
          />
        </div>

        {/* --- SIZE EXTRA LARGE --- */}
        <div className="flex gap-5">
          <Button type={"button"} size={"xl"} label={"Button"} onClick={() => {}} />

          <Button
            type={"button"}
            size={"xl"}
            startIcon={<CloseIcon fontSize="medium" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="medium" />}
            onClick={() => {}}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"xl"}
            label={"Button"}
            onClick={() => {}}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"xl"}
            startIcon={<CloseIcon fontSize="medium" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="medium" />}
            onClick={() => {}}
          />

          <Button type={"button"} size={"xl"} label={"Button"} onClick={() => {}} disabled={true} />

          <Button
            type={"button"}
            size={"xl"}
            startIcon={<CloseIcon fontSize="medium" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="medium" />}
            onClick={() => {}}
            disabled={true}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"xl"}
            label={"Button"}
            onClick={() => {}}
            disabled={true}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"xl"}
            startIcon={<CloseIcon fontSize="medium" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="medium" />}
            onClick={() => {}}
            disabled={true}
          />
        </div>

        {/* --- SIZE 2 EXTRA LARGE --- */}
        <div className="flex gap-5">
          <Button type={"button"} size={"2xl"} label={"Button"} onClick={() => {}} />

          <Button
            type={"button"}
            size={"2xl"}
            startIcon={<CloseIcon fontSize="large" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="large" />}
            onClick={() => {}}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"2xl"}
            label={"Button"}
            onClick={() => {}}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"2xl"}
            startIcon={<CloseIcon fontSize="large" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="large" />}
            onClick={() => {}}
          />

          <Button
            type={"button"}
            size={"2xl"}
            label={"Button"}
            onClick={() => {}}
            disabled={true}
          />

          <Button
            type={"button"}
            size={"2xl"}
            startIcon={<CloseIcon fontSize="large" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="large" />}
            onClick={() => {}}
            disabled={true}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"2xl"}
            label={"Button"}
            onClick={() => {}}
            disabled={true}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"2xl"}
            startIcon={<CloseIcon fontSize="large" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="large" />}
            onClick={() => {}}
            disabled={true}
          />
        </div>

        {/* --- SIZE 3 EXTRA LARGE --- */}
        <div className="flex gap-5">
          <Button type={"button"} size={"3xl"} label={"Button"} onClick={() => {}} />

          <Button
            type={"button"}
            size={"3xl"}
            startIcon={<CloseIcon fontSize="large" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="large" />}
            onClick={() => {}}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"3xl"}
            label={"Button"}
            onClick={() => {}}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"3xl"}
            startIcon={<CloseIcon fontSize="large" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="large" />}
            onClick={() => {}}
          />

          <Button
            type={"button"}
            size={"3xl"}
            label={"Button"}
            onClick={() => {}}
            disabled={true}
          />

          <Button
            type={"button"}
            size={"3xl"}
            startIcon={<CloseIcon fontSize="large" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="large" />}
            onClick={() => {}}
            disabled={true}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"3xl"}
            label={"Button"}
            onClick={() => {}}
            disabled={true}
          />

          <Button
            type={"button"}
            variant={"outline"}
            size={"3xl"}
            startIcon={<CloseIcon fontSize="large" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="large" />}
            onClick={() => {}}
            disabled={true}
          />
        </div>

        {/* --- COLOR ---  */}
        <div className="flex w-full justify-center gap-5">
          <Button
            type={"button"}
            color={"success"}
            size={"sm"}
            label={"Button"}
            onClick={() => {}}
          />
          <Button
            type={"button"}
            color={"success"}
            size={"sm"}
            startIcon={<CloseIcon fontSize="small" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="small" />}
            onClick={() => {}}
          />
          <Button
            type={"button"}
            variant={"outline"}
            color={"success"}
            size={"sm"}
            label={"Button"}
            onClick={() => {}}
          />
          <Button
            type={"button"}
            variant={"outline"}
            color={"success"}
            size={"sm"}
            startIcon={<CloseIcon fontSize="small" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="small" />}
            onClick={() => {}}
          />
          <Button
            type={"button"}
            color={"warning"}
            size={"sm"}
            label={"Button"}
            onClick={() => {}}
          />
          <Button
            type={"button"}
            color={"warning"}
            size={"sm"}
            startIcon={<CloseIcon fontSize="small" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="small" />}
            onClick={() => {}}
          />
          <Button
            type={"button"}
            variant={"outline"}
            color={"warning"}
            size={"sm"}
            label={"Button"}
            onClick={() => {}}
          />
          <Button
            type={"button"}
            variant={"outline"}
            color={"warning"}
            size={"sm"}
            startIcon={<CloseIcon fontSize="small" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="small" />}
            onClick={() => {}}
          />

          <Button type={"button"} color={"error"} size={"sm"} label={"Button"} onClick={() => {}} />
          <Button
            type={"button"}
            color={"error"}
            size={"sm"}
            startIcon={<CloseIcon fontSize="small" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="small" />}
            onClick={() => {}}
          />
          <Button
            type={"button"}
            variant={"outline"}
            color={"error"}
            size={"sm"}
            label={"Button"}
            onClick={() => {}}
          />
          <Button
            type={"button"}
            variant={"outline"}
            color={"error"}
            size={"sm"}
            startIcon={<CloseIcon fontSize="small" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="small" />}
            onClick={() => {}}
          />
          <Button type={"button"} color={"info"} size={"sm"} label={"Button"} onClick={() => {}} />
          <Button
            type={"button"}
            color={"info"}
            size={"sm"}
            startIcon={<CloseIcon fontSize="small" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="small" />}
            onClick={() => {}}
          />
          <Button
            type={"button"}
            variant={"outline"}
            color={"info"}
            size={"sm"}
            label={"Button"}
            onClick={() => {}}
          />
          <Button
            type={"button"}
            variant={"outline"}
            color={"info"}
            size={"sm"}
            startIcon={<CloseIcon fontSize="small" />}
            label={"Button"}
            endIcon={<CloseIcon fontSize="small" />}
            onClick={() => {}}
          />
        </div>
        
        {/* --- WIDTH FULL --- */}
        <div className="flex w-full gap-5">
          <Button type={"button"} size={"xl-full"} label={"Button"} onClick={() => {}} />

          <Button
            type={"button"}
            size={"xl-full"}
            startIcon={<CloseIcon />}
            label={"Button"}
            endIcon={<CloseIcon />}
            onClick={() => {}}
          />

          <Button
            type={"button"}
            size={"xl-full"}
            startIcon={<CloseIcon />}
            label={"Button"}
            endIcon={<CloseIcon />}
            onClick={() => {}}
            disabled={true}
          />
        </div>
      </section>
    </>
  );
};
