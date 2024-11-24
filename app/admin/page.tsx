'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function PainelAdmin() {
  const [abaAtiva, setAbaAtiva] = useState('fontes-dados')

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Painel Administrativo</h1>
      <Tabs value={abaAtiva} onValueChange={setAbaAtiva}>
        <TabsList>
          <TabsTrigger value="fontes-dados">Fontes de Dados</TabsTrigger>
          <TabsTrigger value="gerenciamento-usuarios">Gerenciamento de Usuários</TabsTrigger>
          <TabsTrigger value="configuracoes-sistema">Configurações do Sistema</TabsTrigger>
        </TabsList>
        <TabsContent value="fontes-dados">
          <Card>
            <CardHeader>
              <CardTitle>Configurar Fontes de Dados</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="fonte-dados">Fonte de Dados</Label>
                  <Select>
                    <SelectTrigger id="fonte-dados">
                      <SelectValue placeholder="Selecione uma fonte de dados" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sinan">SINAN - Sistema de Informação de Agravos de Notificação</SelectItem>
                      <SelectItem value="sivep">SIVEP - Sistema de Informação de Vigilância Epidemiológica</SelectItem>
                      <SelectItem value="sih">SIH - Sistema de Informações Hospitalares</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="endpoint-api">Endpoint da API</Label>
                  <Input id="endpoint-api" placeholder="https://api.saude.gov.br/sinan" />
                </div>
                <div>
                  <Label htmlFor="frequencia-atualizacao">Frequência de Atualização (horas)</Label>
                  <Input id="frequencia-atualizacao" type="number" placeholder="24" />
                </div>
                <Button type="submit">Salvar Configuração</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="gerenciamento-usuarios">
          <Card>
            <CardHeader>
              <CardTitle>Gerenciamento de Usuários</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Interface de gerenciamento de usuários a ser implementada.</p>
              <p>Aqui serão adicionadas funcionalidades para criar, editar e excluir usuários, bem como definir suas permissões de acesso ao sistema.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="configuracoes-sistema">
          <Card>
            <CardHeader>
              <CardTitle>Configurações do Sistema</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="limiar-alerta">Limiar de Alerta (casos por 100.000 habitantes)</Label>
                  <Input id="limiar-alerta" type="number" placeholder="300" />
                </div>
                <div>
                  <Label htmlFor="periodo-analise">Período de Análise (dias)</Label>
                  <Input id="periodo-analise" type="number" placeholder="30" />
                </div>
                <div>
                  <Label htmlFor="nivel-detalhamento">Nível de Detalhamento Geográfico</Label>
                  <Select>
                    <SelectTrigger id="nivel-detalhamento">
                      <SelectValue placeholder="Selecione o nível de detalhamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="municipio">Município</SelectItem>
                      <SelectItem value="bairro">Bairro</SelectItem>
                      <SelectItem value="setor-censitario">Setor Censitário</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit">Salvar Configurações</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

