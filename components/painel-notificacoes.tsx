import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function PainelNotificacoes() {
  const notificacoes = [
    { id: 1, mensagem: 'Surto de dengue detectado em São Paulo - SP', data: '15/07/2023', tipo: 'alerta' },
    { id: 2, mensagem: 'Novo foco de Aedes aegypti identificado em Belo Horizonte - MG', data: '14/07/2023', tipo: 'aviso' },
    { id: 3, mensagem: 'Campanha de vacinação contra febre amarela em Manaus - AM', data: '13/07/2023', tipo: 'informacao' },
    { id: 4, mensagem: 'Aumento de casos de Chikungunya em Fortaleza - CE', data: '12/07/2023', tipo: 'alerta' },
    { id: 5, mensagem: 'Mutirão de limpeza urbana no Rio de Janeiro - RJ', data: '11/07/2023', tipo: 'aviso' },
  ]

  const getTipoClass = (tipo) => {
    switch (tipo) {
      case 'alerta':
        return 'bg-red-100 border-red-500 text-red-700'
      case 'aviso':
        return 'bg-yellow-100 border-yellow-500 text-yellow-700'
      case 'informacao':
        return 'bg-blue-100 border-blue-500 text-blue-700'
      default:
        return 'bg-gray-100 border-gray-500 text-gray-700'
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notificações Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {notificacoes.map((notificacao) => (
            <li key={notificacao.id} className={`p-4 rounded-lg shadow border-l-4 ${getTipoClass(notificacao.tipo)}`}>
              <p className="font-semibold">{notificacao.mensagem}</p>
              <p className="text-sm mt-1">{notificacao.data}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

