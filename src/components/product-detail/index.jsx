import Image from "next/image";
import LogoQbills from "@/public/assets/images/logos/white/logo-2.png";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export const ProductDetail = ({
  name,
  category,
  price,
  stock,
  ingredient,
  imagePreview,
  size,
  sizeOptionsList,
  onSizeChange,
  onClick,
}) => {
  const isCoffeeCategory = category === "Coffee";

  return (
    <section className="relative h-[659px] w-[981px] overflow-hidden rounded-xl bg-white">
      <div className="absolute left-[494px] top-[474px] h-[186px] w-[487px] bg-N1.1">
        <div className="absolute left-[438px] top-[-95px] w-[270px] origin-top-left rotate-[48.06deg]">
          <Image className="rotate-49 max-w-full" src={LogoQbills} alt="Logo" />
        </div>
        <div className="absolute left-[43px] top-[52px] inline-flex items-end justify-start gap-[75px]">
          {isCoffeeCategory && (
            <div className="flex items-end justify-start gap-[22px]">
              {sizeOptionsList.map((option) => (
                <div
                  key={option}
                  className={`inline-flex flex-col items-start justify-start gap-[11px] ${
                    size === option ? "text-N5" : "text-N2"
                  }`}
                  onClick={() => onSizeChange(option)}
                >
                  <LocalCafeIcon
                    fontSize={
                      option === "SMALL" ? "small" : option === "NORMAL" ? "medium" : "large"
                    }
                    disabled={false}
                    className={`h-${
                      option === "Small" ? "45" : option === "Normal" ? "55" : "65"
                    } w-${option === "Small" ? "45" : option === "Normal" ? "55" : "65"} ${
                      size === option ? "text-P4" : "text-N2"
                    }`}
                  />
                  {option}
                </div>
              ))}
            </div>
          )}
          <div className="inline-flex flex-col items-start justify-end">
            <div className="font-['Open Sans'] w-[37px] text-justify text-sm font-semibold leading-none text-N6">
              Price
            </div>
            <div className="relative h-12 w-[141px]">
              <div className="absolute left-0 top-0 inline-flex h-[42px] flex-col items-center justify-center gap-2">
                <div className="font-['Open Sans'] self-stretch text-[24px] font-semibold leading-[42px] text-N6">
                  Rp. {price}
                </div>
              </div>
              <div className="absolute left-[3px] top-[48px] h-[0px] w-[115px] border border-N6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg absolute left-0 top-0 inline-flex h-[659px] w-[494px] flex-col items-center justify-center gap-2.5 rounded-bl-xl rounded-tl-xl px-7 py-[172px]">
        <Image
          // className="h-[409px] w-[369px]"
          src={imagePreview}
          alt="Image Product"
          width={369}
          height={409}
        />
        <div className="absolute left-[-119px] top-[210.78px] inline-flex h-[68px] w-[505px] origin-top-left rotate-[-37.98deg] flex-col items-start justify-start">
          <div className="flex shrink grow basis-0 flex-col items-center justify-center self-stretch bg-S4">
            <div className="inline-flex items-center justify-start gap-2 self-stretch px-4 py-3">
              <div className="font-['Open Sans'] shrink grow basis-0 text-center text-2xl font-bold leading-9 text-white">
                Stock Available
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[533px] top-[95px] inline-flex flex-col items-start justify-start gap-5">
        <div className="flex h-[122px] flex-col items-start justify-start gap-5 self-stretch">
          <div className="flex flex-col items-start justify-start">
            <div className="font-['Open Sans'] text-xl font-normal leading-9 text-N7">
              {category}
            </div>
            <div className="font-['Open Sans'] text-[40px] font-semibold leading-[46px] text-N7">
              {name}
            </div>
          </div>
          <div className="font-['Open Sans'] w-[157px] text-justify text-base font-semibold leading-tight text-N7">
            Total stock: {stock}
          </div>
        </div>
        <div className="font-['Open Sans'] w-[409px] text-justify text-base font-normal leading-normal text-N5">
          {ingredient}
        </div>
      </div>
      <div className="absolute left-[925px] top-[24px] h-[32px] w-[32px] cursor-pointer leading-none">
        <CloseRoundedIcon fontSize="large" className="text-N3" onClick={onClick} />
      </div>
    </section>
  );
};
