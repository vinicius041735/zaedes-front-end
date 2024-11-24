'use client'

import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

export function LineChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Number of Cases',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  }

  return <Line data={data} />
}

export function BarChart() {
  const data = {
    labels: ['Area A', 'Area B', 'Area C', 'Area D', 'Area E'],
    datasets: [
      {
        label: 'Number of Breeding Sites',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }
    ]
  }

  return <Bar data={data} />
}

export function MapChart({ detailed = false }) {
  const position = [51.505, -0.09]
  const zoom = detailed ? 13 : 10

  return (
    <MapContainer center={position} zoom={zoom} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <CircleMarker center={position} color="red" radius={20}>
        <Popup>
          High risk area <br /> 20 cases reported
        </Popup>
      </CircleMarker>
    </MapContainer>
  )
}

