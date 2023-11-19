import { SnackBar } from "@/components";

export const ComponentSnackBar = () => {
  return (
    <>
      {/* 
          variant={"success" | "info" | "warning" | "error"}
          size={"sm" | "lg"}
          desc={""}
          onClickClose={() => {}}
          action={true | false}
          actionLabel={""}
          onClickAction={() => {}}
      */}

      <section className="flex flex-col items-center justify-center gap-5">
        {/* --- SIZE SMALL --- */}
        <SnackBar
          variant={"success"}
          size={"sm"}
          label={"Success"}
          desc={"Lorem ipsum is simply dummy text of the printing"}
          onClickClose={() => {}}
          action={true}
          actionLabel={"Action"}
          onClickAction={() => {}}
        />

        {/* --- SIZE LARGE --- */}
        <SnackBar
          variant={"success"}
          size={"lg"}
          label={"Success"}
          desc={
            "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing."
          }
          onClickClose={() => {}}
          action={true}
          actionLabel={"Action"}
          onClickAction={() => {}}
        />

        {/* --- VARIANT SUCCESS --- */}
        <div className="flex gap-5">
          <SnackBar
            variant={"success"}
            size={"sm"}
            label={"Success"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
            action={true}
            actionLabel={"Action"}
            onClickAction={() => {}}
          />

          <SnackBar
            variant={"success"}
            size={"sm"}
            label={"Success"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
          />
        </div>

        {/* --- VARIANT INFORMATION --- */}
        <div className="flex gap-5">
          <SnackBar
            variant={"info"}
            size={"sm"}
            label={"Information"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
            action={true}
            actionLabel={"Action"}
            onClickAction={() => {}}
          />

          <SnackBar
            variant={"info"}
            size={"sm"}
            label={"Information"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
          />
        </div>

        {/* --- VARIANT WARNING --- */}
        <div className="flex gap-5">
          <SnackBar
            variant={"warning"}
            size={"sm"}
            label={"Warning"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
            action={true}
            actionLabel={"Action"}
            onClickAction={() => {}}
          />

          <SnackBar
            variant={"warning"}
            size={"sm"}
            label={"Warning"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
          />
        </div>

        {/* --- VARIANT ERROR --- */}
        <div className="flex gap-5">
          <SnackBar
            variant={"error"}
            size={"sm"}
            label={"Error"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
            action={true}
            actionLabel={"Action"}
            onClickAction={() => {}}
          />

          <SnackBar
            variant={"error"}
            size={"sm"}
            label={"Error"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
          />
        </div>
      </section>
    </>
  );
};
