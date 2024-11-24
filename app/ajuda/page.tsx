import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AjudaPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Ajuda e FAQ</h1>
      <Card>
        <CardHeader>
          <CardTitle>Perguntas Frequentes</CardTitle>
          <CardDescription>Encontre respostas para as dúvidas mais comuns sobre o ZAedes</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Como interpretar o mapa de risco?</AccordionTrigger>
              <AccordionContent>
                O mapa de risco utiliza cores para indicar o nível de infestação do Aedes aegypti em diferentes áreas. 
                Vermelho indica alto risco, amarelo médio risco e verde baixo risco. Os marcadores mostram o número 
                de casos reportados em cada região.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Como reportar um novo foco do mosquito?</AccordionTrigger>
              <AccordionContent>
                Para reportar um novo foco, acesse a seção &quot;Notificações&quot; no painel principal. Clique em 
                &quot;Nova Notificação&quot; e preencha o formulário com as informações sobre a localização e 
                características do foco encontrado.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Como exportar os dados para análise externa?</AccordionTrigger>
              <AccordionContent>
                Na página de Relatórios, você encontrará um botão &quot;Exportar Dados&quot; no canto superior direito. 
                Clique nele e escolha o formato desejado (CSV ou Excel) para baixar os dados selecionados.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}

