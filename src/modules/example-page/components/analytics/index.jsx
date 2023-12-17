import { Analytics } from "@/components";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export const ComponentAnalytics = () => {
  return (
    <>
      {/*
          icon={</>}
          label={""}
          numberData={""}
      */}

      <section className="flex w-full">
        <div className="flex w-full gap-5">
          <Analytics
            icon={<AccountBalanceWalletIcon sx={{ fontSize: 50 }} className="text-I4" />}
            label={"Daily Total"}
            numberData={"Rp.560.000"}
          />

          <Analytics
            icon={<ImportExportIcon sx={{ fontSize: 50 }} className="text-S4" />}
            label={"Success"}
            numberData={"31"}
          />

          <Analytics
            icon={<QueryBuilderIcon sx={{ fontSize: 50 }} className="text-W4" />}
            label={"Pending"}
            numberData={"4"}
          />

          <Analytics
            icon={<RemoveCircleOutlineIcon sx={{ fontSize: 50 }} className="text-E4" />}
            label={"Canceled"}
            numberData={"11"}
          />
        </div>
      </section>
    </>
  );
};
