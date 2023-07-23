import useTransacao from '@/data/hooks/useTransacao'
import { transacaoVazia } from '@/logic/core/financas/Transacao'
import { Button, SegmentedControl } from '@mantine/core'
import { IconLayoutGrid, IconList, IconPlus } from '@tabler/icons-react'
import Cabecalho from '../template/Cabecalho'
import CampoMesAno from '../template/CampoMesAno'
import Conteudo from '../template/Conteudo'
import NaoEncontrado from '../template/NaoEncontrado'
import Pagina from '../template/Pagina'
import Formulario from './Formulario'
import Lista from './Lista'
import Saldo from './Saldo'

export default function Financas() {
  const {
    data,
    alterarData,
    // alterarExibicao,
    // tipoExibicao,
    transacoes,
    transacao,
    selecionar,
    salvar,
    excluir
  } = useTransacao()

  function renderizarControles() {
    return (
      <div>
        <div className="flex justify-between mt-10">
          <Saldo />
          <CampoMesAno data={data} dataMudou={alterarData} />

        </div>
        <div className='flex justify-center my-4'>
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
