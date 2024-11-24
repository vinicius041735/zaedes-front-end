'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LineChart, BarChart, MapChart } from '@/components/charts'
import { NotificationPanel } from '@/components/notification-panel'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">ZAedes Dashboard</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="risk-map">Risk Map</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Case Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mosquito Breeding Sites</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart />
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Risk Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <MapChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="risk-map">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Risk Map</CardTitle>
            </CardHeader>
            <CardContent>
              <MapChart detailed={true} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications">
          <NotificationPanel />
        </TabsContent>
      </Tabs>
    </div>
  )
}

