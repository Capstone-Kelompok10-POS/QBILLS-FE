import { Pagination } from "@/components";

export const ComponentPagination = () => {
  return (
    <>
      {/*
          startData={0}
          endData={0}
          total={0}
          currentPage={0}
          totalPage={0}
          onClickPrevPage={() => {}}
          onClickNextPage={() => {}}
      */}

      <Pagination
        startData={1}
        endData={30}
        total={1000}
        currentPage={2}
        totalPage={10}
        onClickPrevPage={() => {}}
        onClickNextPage={() => {}}
      />
    </>
  );
};
