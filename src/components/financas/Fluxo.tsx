import Dinheiro from '@/logic/utils/Dinheiro'
// import { IconTrendingUp } from '@tabler/icons-react'
import {
  IconArrowsDoubleSwNe,
  IconCash,
  IconCreditCard
} from '@tabler/icons-react'

interface Props {
  receita: number
  despesa: number
}
export default function Fluxo({ receita, despesa }: Props) {
  return (
    <div className='flex flex-wrap gap-7'>
      <div className=" px-4 py-2 rounded-md bg-black border border-[#28282c]">
        <div className="flex flex-col ">
          <div className="text-[#65656c]">Despesas</div>
          <div className="flex items-center gap-5">
            <span className="text-xl font-semibold">
              {Dinheiro.formatar(despesa)}
            </span>
            <IconCreditCard size={40} stroke={1} color='red'/>
          </div>
        </div>
      </div>
      <div className=" px-4 py-2 rounded-md bg-black border border-[#28282c]">
        <div className="flex flex-col ">
          <div className="text-[#65656c]">Receita</div>
          <div className="flex items-center gap-5">
            <span className="text-xl font-semibold">
              {Dinheiro.formatar(receita)}
            </span>
            <IconCash size={40} stroke={1} color='green'/>
          </div>
        </div>
      </div>
      <div className=" px-4 py-2 rounded-md bg-black border border-[#28282c]">
        <div className="flex flex-col ">
          <div className="text-[#65656c]">Saldo</div>
          <div className="flex items-center gap-5">
            <span className="text-xl font-semibold">
              {Dinheiro.formatar(receita - despesa)}
            </span>
            <IconArrowsDoubleSwNe size={40} stroke={1} color='blue'/>
          </div>
        </div>
      </div>
    </div>
  )
}
