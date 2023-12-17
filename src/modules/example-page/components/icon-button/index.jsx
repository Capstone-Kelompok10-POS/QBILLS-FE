import React from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { IconButton } from "@/components";

export const ComponentIconButton = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      {/* --- SIZE SMALL --- */}
      <div className="space-y-5">
        <div className="flex items-center justify-center gap-5">
          <IconButton
            size="sm"
            icon={<NotificationsOutlinedIcon fontSize="small" />}
            onClick={() => {}}
          />

          <IconButton
            variant="outline"
            size="sm"
            icon={<NotificationsOutlinedIcon fontSize="small" />}
            onClick={() => {}}
          />

          <IconButton
            size="sm"
            icon={<NotificationsOutlinedIcon fontSize="small" />}
            onClick={() => {}}
            disabled={true}
          />

          <IconButton
            variant="outline"
            size="sm"
            icon={<NotificationsOutlinedIcon fontSize="small" />}
            onClick={() => {}}
            disabled={true}
          />
        </div>
      </div>

      {/* --- SIZE MEDIUM --- */}
      <div className="flex items-center justify-center gap-5">
        <IconButton
          size="md"
          icon={<NotificationsOutlinedIcon fontSize="small" />}
          onClick={() => {}}
        />

        <IconButton
          variant="outline"
          size="sm"
          icon={<NotificationsOutlinedIcon fontSize="small" />}
          onClick={() => {}}
        />

        <IconButton
          size="sm"
          icon={<NotificationsOutlinedIcon fontSize="small" />}
          onClick={() => {}}
          disabled={true}
        />

        <IconButton
          variant="outline"
          size="md"
          icon={<NotificationsOutlinedIcon fontSize="small" />}
          onClick={() => {}}
          disabled={true}
        />
      </div>

      {/* --- SIZE LARGE --- */}
      <div className="flex items-center justify-center gap-5">
        <IconButton
          size="lg"
          icon={<NotificationsOutlinedIcon fontSize="medium" />}
          onClick={() => {}}
        />

        <IconButton
          variant="outline"
          size="lg"
          icon={<NotificationsOutlinedIcon fontSize="medium" />}
          onClick={() => {}}
        />

        <IconButton
          size="lg"
          icon={<NotificationsOutlinedIcon fontSize="medium" />}
          onClick={() => {}}
          disabled={true}
        />

        <IconButton
          variant="outline"
          size="lg"
          icon={<NotificationsOutlinedIcon fontSize="medium" />}
          onClick={() => {}}
          disabled={true}
        />
      </div>

      {/* --- SIZE EXTRA LARGE --- */}
      <div className="flex items-center justify-center gap-5">
        <IconButton
          size="xl"
          icon={<NotificationsOutlinedIcon fontSize="medium" />}
          onClick={() => {}}
        />

        <IconButton
          variant="outline"
          size="xl"
          icon={<NotificationsOutlinedIcon fontSize="medium" />}
          onClick={() => {}}
        />

        <IconButton
          size="xl"
          icon={<NotificationsOutlinedIcon fontSize="medium" />}
          onClick={() => {}}
          disabled={true}
        />

        <IconButton
          variant="outline"
          size="xl"
          icon={<NotificationsOutlinedIcon fontSize="medium" />}
          onClick={() => {}}
          disabled={true}
        />
      </div>

      {/* --- SIZE 2 EXTRA LARGE --- */}
      <div className="flex items-center justify-center gap-5">
        <IconButton
          size="2xl"
          icon={<NotificationsOutlinedIcon fontSize="large" />}
          onClick={() => {}}
        />

        <IconButton
          variant="outline"
          size="2xl"
          icon={<NotificationsOutlinedIcon fontSize="large" />}
          onClick={() => {}}
        />

        <IconButton
          size="2xl"
          icon={<NotificationsOutlinedIcon fontSize="large" />}
          onClick={() => {}}
          disabled={true}
        />

        <IconButton
          variant="outline"
          size="2xl"
          icon={<NotificationsOutlinedIcon fontSize="large" />}
          onClick={() => {}}
          disabled={true}
        />
      </div>

      {/* --- SIZE 3 EXTRA LARGE --- */}
      <div className="flex items-center justify-center gap-5">
        <IconButton
          size="3xl"
          icon={<NotificationsOutlinedIcon fontSize="large" />}
          onClick={() => {}}
        />

        <IconButton
          variant="outline"
          size="3xl"
          icon={<NotificationsOutlinedIcon fontSize="large" />}
          onClick={() => {}}
        />

        <IconButton
          size="3xl"
          icon={<NotificationsOutlinedIcon fontSize="large" />}
          onClick={() => {}}
          disabled={true}
        />

        <IconButton
          variant="outline"
          size="3xl"
          icon={<NotificationsOutlinedIcon fontSize="large" />}
          onClick={() => {}}
          disabled={true}
        />
      </div>
      {/* --- COLOR --- */}
      <div className="flex items-center justify-center gap-5">
        <IconButton
          color="success"
          size="sm"
          icon={<NotificationsOutlinedIcon fontSize="small" />}
          onClick={() => {}}
        />

        <IconButton
          variant="outline"
          color="success"
          size="sm"
          icon={<NotificationsOutlinedIcon fontSize="small" />}
          onClick={() => {}}
        />

        <IconButton
          color="error"
          size="sm"
          icon={<NotificationsOutlinedIcon fontSize="small" />}
          onClick={() => {}}
        />
        <IconButton
          variant="outline"
          color="error"
          size="sm"
          icon={<NotificationsOutlinedIcon fontSize="small" />}
          onClick={() => {}}
        />

        <IconButton
          color="warning"
          size="sm"
          icon={<NotificationsOutlinedIcon fontSize="small" />}
          onClick={() => {}}
        />

        <IconButton
          variant="outline"
          color="warning"
          size="sm"
          icon={<NotificationsOutlinedIcon fontSize="small" />}
          onClick={() => {}}
        />

        <IconButton
          color="info"
          size="sm"
          icon={<NotificationsOutlinedIcon fontSize="small" />}
          onClick={() => {}}
        />

        <IconButton
          variant="outline"
          color="info"
          size="sm"
          icon={<NotificationsOutlinedIcon fontSize="small" />}
          onClick={() => {}}
        />
      </div>
    </section>
  );
};
