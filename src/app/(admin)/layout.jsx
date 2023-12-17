import { HeaderAdmin, NavigationDrawer } from "@/components";

export const viewport = {
  width: "device-width",
  initialScale: 0.5,
};

export const metadata = {
  title: "",
  description: "",
};

const AdminLayout = ({ children }) => {
  return (
    <>
      <NavigationDrawer />
      <div className="ml-96">
        <HeaderAdmin name={"Gede Dewo Wahyu M.W"} role={"Admin"} />
      </div>
      <div className="ml-96 p-5">{children}</div>
    </>
  );
};

export default AdminLayout;
