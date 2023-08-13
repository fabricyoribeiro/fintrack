import useTransacao from '@/data/hooks/useTransacao'
import { TipoTransacao } from '@/logic/core/financas/TipoTransacao'
import Chart from 'react-google-charts'

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
    colors: ['#ff4155', '#ab4422'],
    backgroundColor: '#181815'
  }
  return (
    <div className=''>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={organizedData}
        options={options}
        chartLanguage="pt-BR"
      />
    </div>
  )
}
