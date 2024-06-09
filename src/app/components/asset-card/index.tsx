import { Asset } from "@/app/page";
import Image from "next/image";

type Props = {
  asset: Asset;
  variant: "white" | "none";
  handleOpenModal: () => void;
};

export const AssetCard = ({ asset, variant, handleOpenModal }: Props) => {
  const bgColorAndBorder =
    variant === "white"
      ? "bg-slate-50 border-solid border border-slate-300"
      : "";

  return (
    <div
      className={`p-4 ${bgColorAndBorder} text-slate-950 flex flex-1 gap-5 min-w-96 h-32 p-2 rounded cursor-pointer items-center`}
      onClick={handleOpenModal}
    >
      <div className="bg-slate-300 w-24 h-20 rounded flex items-center justify-center">
        <Image
          src="/time-icon.svg"
          alt="Time image"
          className="w-12 h-12"
          width={200}
          height={200}
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-bold">{asset.name}</p>
        <span className="text-sm">{asset.description}</span>
        <span className="text-gray-600 text-xs">{asset.date}</span>
      </div>
    </div>
  );
};
