'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { GraficoLinha, GraficoBarras } from '@/components/graficos'

export default function RelatoriosPage() {
  const [periodoSelecionado, setPeriodoSelecionado] = useState('7d')
  const [tipoRelatorio, setTipoRelatorio] = useState('casos')

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Relatórios Detalhados</h1>
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <Select value={periodoSelecionado} onValueChange={setPeriodoSelecionado}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione o período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Últimos 7 dias</SelectItem>
              <SelectItem value="30d">Últimos 30 dias</SelectItem>
              <SelectItem value="90d">Últimos 90 dias</SelectItem>
              <SelectItem value="1a">Último ano</SelectItem>
            </SelectContent>
          </Select>
          <Select value={tipoRelatorio} onValueChange={setTipoRelatorio}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tipo de relatório" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="casos">Casos reportados</SelectItem>
              <SelectItem value="criadouros">Criadouros identificados</SelectItem>
              <SelectItem value="acoes">Ações de controle</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button>Exportar Dados</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Evolução Temporal</CardTitle>
          </CardHeader>
          <CardContent>
            <GraficoLinha />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Distribuição por Região</CardTitle>
          </CardHeader>
          <CardContent>
            <GraficoBarras />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

