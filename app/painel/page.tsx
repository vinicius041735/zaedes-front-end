'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GraficoLinha, GraficoBarras, MapaRisco } from '@/components/graficos'
import { PainelNotificacoes } from '@/components/painel-notificacoes'

export default function Painel() {
  const [abaAtiva, setAbaAtiva] = useState('visao-geral')

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Painel ZAedes</h1>
      <Tabs value={abaAtiva} onValueChange={setAbaAtiva}>
        <TabsList>
          <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="mapa-risco">Mapa de Risco</TabsTrigger>
          <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
        </TabsList>
        <TabsContent value="visao-geral">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Tendência de Casos</CardTitle>
              </CardHeader>
              <CardContent>
                <GraficoLinha />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Criadouros de Mosquitos</CardTitle>
              </CardHeader>
              <CardContent>
                <GraficoBarras />
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Áreas de Risco</CardTitle>
              </CardHeader>
              <CardContent>
                <MapaRisco />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="mapa-risco">
          <Card>
            <CardHeader>
              <CardTitle>Mapa de Risco Detalhado</CardTitle>
            </CardHeader>
            <CardContent>
              <MapaRisco detalhado={true} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notificacoes">
          <PainelNotificacoes />
        </TabsContent>
      </Tabs>
    </div>
  )
}

