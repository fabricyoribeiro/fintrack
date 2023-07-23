import { IconTrendingUp } from "@tabler/icons-react";

export default function Saldo(){
  return (
    <div className="flex items-center gap-2 w-fit p-3 rounded-md bg-gradient-to-br from-[#1F5B0A] to-[#12D248]">
      <span className="text-xl font-semibold">R$ 120.000,00</span>
      <IconTrendingUp width={35} height={35} />
    </div>
  )
}