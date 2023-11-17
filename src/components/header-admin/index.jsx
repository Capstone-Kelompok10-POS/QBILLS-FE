import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonIcon from "@mui/icons-material/Person";

export const HeaderAdmin = ({ pageName }) => {
  return (
    <>
      <header className="ms-96 flex items-center justify-between p-10 pt-20">
        <section>
          <h1 className="text-3xl font-bold">{pageName}</h1>
        </section>
        <section className="flex items-center gap-52">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-P4 p-2 text-N1">
              <PersonIcon />
            </div>
            <div className="gap-1">
              <p className="font-semibold">Admin Name</p>
              <p className="text-xs">Admin</p>
            </div>
          </div>
          <button className="rounded-lg bg-P4 p-2 text-N1">
            <NotificationsOutlinedIcon />
          </button>
        </section>
      </header>
    </>
  );
};
