"use client";

import { Button, Chips, IconButton, SnackBar, SubmitButton } from "@/components";
import { Footer, Header, Main } from "@/modules/example-page";
import logoVercel from "@/public/assets/images/logos/vercel.svg";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const ExamplePage = () => {
  return (
    <section className="space-y-5 p-5">
      <section>
        <SubmitButton />
        <Header />
        <Main />
        <Footer />
        <Image src={logoVercel} alt="Vercel" width={100} className="h-auto" />
      </section>

      {/* [x] Untuk dev dan melihat hasilnya bisa di sini saja dan jika sudah selesai berikan contoh penggunaan component nya di sini */}

      {/* [x] COMPONENT SNACK BAR */}

      {/* 
          variant={"success" | "information" | "warning" | "error"}
          size={"sm" | "lg"}
          desc={""}
          onClickClose={() => {}}
          action={true | false}
          actionLabel={""}
          onClickAction={() => {}}
      */}

      <section className="flex flex-col items-center justify-center gap-5">
        {/* SIZE SMALL */}
        <SnackBar
          variant={"success"}
          size={"sm"}
          desc={"Lorem ipsum is simply dummy text of the printing"}
          onClickClose={() => {}}
          action={true}
          actionLabel={"Action"}
          onClickAction={() => {}}
        />

        {/* SIZE LARGE */}
        <SnackBar
          variant={"success"}
          size={"lg"}
          desc={
            "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing."
          }
          onClickClose={() => {}}
          action={true}
          actionLabel={"Action"}
          onClickAction={() => {}}
        />

        {/* VARIANT SUCCESS */}
        <div className="flex gap-5">
          {/* WITH ACTION */}
          <SnackBar
            variant={"success"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
            action={true}
            actionLabel={"Action"}
            onClickAction={() => {}}
          />

          {/* WITHOUT ACTION */}
          <SnackBar
            variant={"success"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
          />
        </div>

        {/* VARIANT INFORMATION */}
        <div className="flex gap-5">
          {/* WITH ACTION */}
          <SnackBar
            variant={"information"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
            action={true}
            actionLabel={"Action"}
            onClickAction={() => {}}
          />

          {/* WITHOUT ACTION */}
          <SnackBar
            variant={"information"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
          />
        </div>

        {/* VARIANT WARNING */}
        <div className="flex gap-5">
          {/* WITH ACTION */}
          <SnackBar
            variant={"warning"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
            action={true}
            actionLabel={"Action"}
            onClickAction={() => {}}
          />

          {/* WITHOUT ACTION */}
          <SnackBar
            variant={"warning"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
          />
        </div>

        {/* VARIANT ERROR */}
        <div className="flex gap-5">
          {/* WITH ACTION */}
          <SnackBar
            variant={"error"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
            action={true}
            actionLabel={"Action"}
            onClickAction={() => {}}
          />

          {/* WITHOUT ACTION */}
          <SnackBar
            variant={"error"}
            size={"sm"}
            desc={"Lorem ipsum is simply dummy text of the printing"}
            onClickClose={() => {}}
          />
        </div>
      </section>

      {/* [x] ICON BUTTON */}

      {/* 
          size={"sm" | "md"}
          icon={</>}
          onClick={() => {}}
          disabled={true | false}
      */}

      <section className="space-y-5">
        {/* SIZE SMALL */}
        <div className="flex items-center justify-center gap-5">
          {/* DEFAULT */}
          <IconButton size={"sm"} icon={<NotificationsOutlinedIcon />} onClick={() => {}} />

          {/* DISABLED */}
          <IconButton
            size={"sm"}
            icon={<NotificationsOutlinedIcon />}
            onClick={() => {}}
            disabled={true}
          />
        </div>

        {/* SIZE MEDIUM */}
        <div className="flex items-center justify-center gap-5">
          {/* DEFAULT */}
          <IconButton
            size={"md"}
            icon={<NotificationsOutlinedIcon sx={{ fontSize: 40 }} />}
            onClick={() => {}}
          />

          {/* DISABLED */}
          <IconButton
            size={"md"}
            icon={<NotificationsOutlinedIcon sx={{ fontSize: 40 }} />}
            onClick={() => {}}
            disabled={true}
          />
        </div>
      </section>

      {/* [x] COMPONENT CHIPS */}

      {/* 
          size={"md" | "lg"}
          startIcon={</>}
          label={""}
          endIcon={</>}
          onClick={() => {}}
          selected={true | false}
          disabled={true | false}
      */}

      <section className="flex items-center justify-center gap-5">
        {/* SIZE MEDIUM */}
        <div className="flex flex-col items-center justify-center gap-5">
          {/* WITHOUT ICON */}
          <div className="flex gap-5">
            {/* DEFAULT */}
            <Chips size={"md"} label={"Label"} onClick={() => {}} />

            {/* SELECTED */}
            <Chips size={"md"} label={"Label"} selected={true} />

            {/* DISABLED */}
            <Chips size={"md"} label={"Label"} onClick={() => {}} disabled={true} />
          </div>

          {/* WITH ICON */}
          <div className="flex gap-5">
            {/* DEFAULT */}
            <Chips
              size={"md"}
              startIcon={<CheckIcon fontSize="small" />}
              label={"Label"}
              onClick={() => {}}
            />

            {/* SELECTED */}
            <Chips
              size={"md"}
              startIcon={<CheckIcon fontSize="small" />}
              label={"Label"}
              selected={true}
            />

            {/* DISABLED */}
            <Chips
              size={"md"}
              startIcon={<CheckIcon fontSize="small" />}
              label={"Label"}
              onClick={() => {}}
              disabled={true}
            />
          </div>
        </div>

        {/* SIZE LARGE */}
        <div className="flex flex-col items-center justify-center gap-5">
          {/* WITHOUT ICON */}
          <div className="flex gap-5">
            {/* DEFAULT */}
            <Chips size={"lg"} label={"Label"} onClick={() => {}} />

            {/* SELECTED */}
            <Chips size={"lg"} label={"Label"} selected={true} />

            {/* DISABLED */}
            <Chips size={"lg"} label={"Label"} onClick={() => {}} disabled={true} />
          </div>

          {/* ONE ICON */}
          <div className="flex gap-5">
            {/* DEFAULT */}
            <Chips
              size={"lg"}
              startIcon={<CheckIcon fontSize="small" />}
              label={"Label"}
              onClick={() => {}}
            />

            {/* SELECTED */}
            <Chips
              size={"lg"}
              startIcon={<CheckIcon fontSize="small" />}
              label={"Label"}
              selected={true}
            />

            {/* DISABLED */}
            <Chips
              size={"lg"}
              startIcon={<CheckIcon fontSize="small" />}
              label={"Label"}
              onClick={() => {}}
              disabled={true}
            />
          </div>

          {/* TWO ICON */}
          <div className="flex gap-5">
            {/* DEFAULT */}
            <Chips
              size={"lg"}
              startIcon={<CheckIcon fontSize="small" />}
              label={"Label"}
              endIcon={<CloseIcon sx={{ fontSize: 23 }} />}
              onClick={() => {}}
            />

            {/* SELECTED */}
            <Chips
              size={"lg"}
              startIcon={<CheckIcon fontSize="small" />}
              label={"Label"}
              endIcon={<CloseIcon sx={{ fontSize: 23 }} />}
              selected={true}
            />

            {/* DISABLED */}
            <Chips
              size={"lg"}
              startIcon={<CheckIcon fontSize="small" />}
              label={"Label"}
              endIcon={<CloseIcon sx={{ fontSize: 23 }} />}
              onClick={() => {}}
              disabled={true}
            />
          </div>
        </div>
      </section>

      {/* [x] COMPONENT BUTTON */}

      {/* 
          type={""}
          variant={"outline"}
          size={"sm" | "md" | "lg"}
          startIcon={</>}
          label={""}
          endIcon={</>}
          onClick={() => {}}
          disabled={true | false}
      */}

      <section className="flex flex-col items-center justify-center gap-5">
        {/* SIZE SMALL */}
        <div className="flex gap-5">
          {/* DEFAULT */}
          <Button type={"button"} size={"sm"} label={"Button"} onClick={() => {}} />

          {/* WITH ICON */}
          <Button
            type={"button"}
            size={"sm"}
            startIcon={<CloseIcon />}
            label={"Button"}
            endIcon={<CloseIcon />}
            onClick={() => {}}
          />

          {/* OUTLINE */}
          <Button
            type={"button"}
            variant={"outline"}
            size={"sm"}
            label={"Button"}
            onClick={() => {}}
          />

          {/* WITH ICON */}
          <Button
            type={"button"}
            variant={"outline"}
            size={"sm"}
            startIcon={<CloseIcon />}
            label={"Button"}
            endIcon={<CloseIcon />}
            onClick={() => {}}
          />

          {/* DISABLED */}
          <Button type={"button"} size={"sm"} label={"Button"} onClick={() => {}} disabled={true} />

          {/* WITH ICON */}
          <Button
            type={"button"}
            variant={"outline"}
            size={"sm"}
            startIcon={<CloseIcon />}
            label={"Button"}
            endIcon={<CloseIcon />}
            onClick={() => {}}
            disabled={true}
          />
        </div>

        {/* SIZE MEDIUM */}
        <div className="flex gap-5">
          {/* DEFAULT */}
          <Button type={"button"} size={"md"} label={"Button"} onClick={() => {}} />

          {/* WITH ICON */}
          <Button
            type={"button"}
            size={"md"}
            startIcon={<CloseIcon />}
            label={"Button"}
            endIcon={<CloseIcon />}
            onClick={() => {}}
          />

          {/* OUTLINE */}
          <Button
            type={"button"}
            variant={"outline"}
            size={"md"}
            label={"Button"}
            onClick={() => {}}
          />

          {/* WITH ICON */}
          <Button
            type={"button"}
            variant={"outline"}
            size={"md"}
            startIcon={<CloseIcon />}
            label={"Button"}
            endIcon={<CloseIcon />}
            onClick={() => {}}
          />

          {/* DISABLED */}
          <Button type={"button"} size={"md"} label={"Button"} onClick={() => {}} disabled={true} />

          {/* WITH ICON */}
          <Button
            type={"button"}
            variant={"outline"}
            size={"md"}
            startIcon={<CloseIcon />}
            label={"Button"}
            endIcon={<CloseIcon />}
            onClick={() => {}}
            disabled={true}
          />
        </div>

        {/* SIZE LARGE */}
        <div className="flex gap-5">
          {/* DEFAULT */}
          <Button type={"button"} size={"lg"} label={"Button"} onClick={() => {}} />

          {/* WITH ICON */}
          <Button
            type={"button"}
            size={"lg"}
            startIcon={<CloseIcon />}
            label={"Button"}
            endIcon={<CloseIcon />}
            onClick={() => {}}
          />

          {/* OUTLINE */}
          <Button
            type={"button"}
            variant={"outline"}
            size={"lg"}
            label={"Button"}
            onClick={() => {}}
          />

          {/* WITH ICON */}
          <Button
            type={"button"}
            variant={"outline"}
            size={"lg"}
            startIcon={<CloseIcon />}
            label={"Button"}
            endIcon={<CloseIcon />}
            onClick={() => {}}
          />

          {/* DISABLED */}
          <Button type={"button"} size={"lg"} label={"Button"} onClick={() => {}} disabled={true} />

          {/* WITH ICON */}
          <Button
            type={"button"}
            variant={"outline"}
            size={"lg"}
            startIcon={<CloseIcon />}
            label={"Button"}
            endIcon={<CloseIcon />}
            onClick={() => {}}
            disabled={true}
          />
        </div>

        {/* WIDTH FULL */}
        <div className="flex w-full gap-5">
          {/* DEFAULT */}
          <Button type={"button"} size={"sm-full"} label={"Button"} onClick={() => {}} />

          {/* WITH ICON */}
          <Button
            type={"button"}
            size={"sm-full"}
            startIcon={<CloseIcon />}
            label={"Button"}
            endIcon={<CloseIcon />}
            onClick={() => {}}
          />

          {/* WITH ICON */}
          <Button
            type={"button"}
            size={"sm-full"}
            startIcon={<CloseIcon />}
            label={"Button"}
            endIcon={<CloseIcon />}
            onClick={() => {}}
            disabled={true}
          />
        </div>
      </section>
    </section>
  );
};

export default ExamplePage;
