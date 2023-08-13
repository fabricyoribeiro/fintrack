import useTransacao from '@/data/hooks/useTransacao'
import { transacaoVazia } from '@/logic/core/financas/Transacao'
import { Button } from '@mantine/core'
import { IconChartBar, IconPlus } from '@tabler/icons-react'
import Cabecalho from '../template/Cabecalho'
import CampoMesAno from '../template/CampoMesAno'
import Conteudo from '../template/Conteudo'
import NaoEncontrado from '../template/NaoEncontrado'
import Pagina from '../template/Pagina'
import Formulario from './Formulario'
import Lista from './Lista'
import { TipoTransacao } from '@/logic/core/financas/TipoTransacao'
import Fluxo from './Fluxo'
import Link from 'next/link'
import {Dialog} from '@radix-ui/react-dialog'
import Graphic from '../graphic/Graphic'
import { useState } from 'react'

export default function Financas() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const {
    data,
    alterarData,
    transacoes,
    transacao,
    selecionar,
    salvar,
    excluir
  } = useTransacao()

  const despesas = () => {
    let total: number = 0
    transacoes.forEach(transacao => {
      total += transacao.tipo === TipoTransacao.DESPESA ? transacao.valor : 0
    })
    return total
  }

  const receita = () => {
    let total: number = 0
    transacoes.forEach(transacao => {
      total += transacao.tipo === TipoTransacao.RECEITA ? transacao.valor : 0
    })
    return total
  }

  function renderizarControles() {
    return (
      <div>
        <div className="flex justify-between items-center mt-5">
          <Fluxo receita={receita()} despesa={despesas()} />
          {/* <Link href='/graphic' className='flex gap-4 '>
            Ver resumo anual
            <IconChartBar  />
          </Link> */}
          {/* <Dialog.Trigger>
            Ver resumo anual
          </Dialog.Trigger> */}
          {/* <button onClick={handleOpen}>Clique para abrir o diálogo</button>
          <Dialog open={open} onOpenChange={handleClose}>
            <div style={{ padding: '20px' }}>teste</div>
          </Dialog> */}
          <Graphic />
        </div>
        <div className="flex justify-between mt-10 mb-6">
          <CampoMesAno data={data} dataMudou={alterarData} />
          <Button
            className="bg-blue-500 "
            leftIcon={<IconPlus />}
            onClick={() => selecionar(transacaoVazia)}
          >
            Nova transação
          </Button>
        </div>
      </div>
    )
  }

  function renderizarTransacoes() {
    const props = { transacoes, selecionarTransacao: selecionar }
    return <Lista {...props} />
  }

  return (
    <Pagina>
      <Cabecalho />
      <Conteudo className="gap-5 w-full max-w-6xl mx-auto">
        {renderizarControles()}
        {transacao ? (
          <Formulario
            transacao={transacao}
            salvar={salvar}
            excluir={excluir}
            cancelar={() => selecionar(null)}
          />
        ) : transacoes.length > 0 ? (
          renderizarTransacoes()
        ) : (
          <NaoEncontrado>Nenhuma transação encontrada</NaoEncontrado>
        )}
      </Conteudo>
    </Pagina>
  )
}
