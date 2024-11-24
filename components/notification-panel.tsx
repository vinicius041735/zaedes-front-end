import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function NotificationPanel() {
  const notifications = [
    { id: 1, message: 'Increased cases detected in Area A', date: '2023-07-01' },
    { id: 2, message: 'New breeding site identified in Area B', date: '2023-06-30' },
    { id: 3, message: 'Risk level elevated in Area C', date: '2023-06-29' },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li key={notification.id} className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold">{notification.message}</p>
              <p className="text-sm text-gray-500">{notification.date}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

