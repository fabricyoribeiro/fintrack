import useTransacao from '@/data/hooks/useTransacao'
import { TipoTransacao } from '@/logic/core/financas/TipoTransacao'
import Chart from 'react-google-charts'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { IconChartBar } from '@tabler/icons-react'

export default function Graphic() {
  const { todasTransacoes } = useTransacao()
  // const data = [
  //   ['mês', 'despesa', 'receita'],
  //   ['janeiro', 20, 10],
  //   ['fevereiro', 200, 100],
  //   ['março', 200, 100]
  // ]

  const organizedData = [['mês', 'receita', 'despesa']]
  const months = new Map()

  todasTransacoes.forEach(item => {
    const month = item.data.toLocaleString('default', { month: 'long' })
    if (!months.has(month)) {
      months.set(month, { receita: 0, despesa: 0 })
    }

    if (item.tipo === 'despesa') {
      months.get(month).despesa += item.valor
    } else if (item.tipo === 'receita') {
      months.get(month).receita += item.valor
    }
  })

  console.log(todasTransacoes)

  months.forEach((values, month) => {
    organizedData.push([month, values.receita, values.despesa])
  })

  const options = {
    title: 'Receitas x Despesas',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis: { format: 'currency' },
    animation: { duration: 500, easing: 'linear', startup: true },
    colors: ['#00ff00', '#ff0000'],
    backgroundColor: '#fff'
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex gap-4">
          <span>Ver resumo anual</span>
          <IconChartBar  />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed inset-0" />
        <Dialog.Content className="fixed bg-white py-8 px-5 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[700px] shadow-lg shadow-black/25'">
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={organizedData}
            options={options}
            chartLanguage="pt-BR"
          />

          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <X color='black' size={24}/>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
