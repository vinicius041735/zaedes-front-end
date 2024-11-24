'use client'

import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

export function GraficoLinha() {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Casos de Dengue',
        data: [120, 190, 300, 510, 600, 450, 380, 320, 280, 240, 220, 180],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      },
      {
        label: 'Casos de Zika',
        data: [20, 30, 50, 80, 100, 90, 70, 60, 50, 40, 30, 25],
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1
      },
      {
        label: 'Casos de Chikungunya',
        data: [5, 10, 15, 25, 30, 28, 22, 18, 15, 12, 8, 6],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  }

  return <Line data={data} />
}

export function GraficoBarras() {
  const data = {
    labels: ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Fortaleza'],
    datasets: [
      {
        label: 'Número de Criadouros',
        data: [1200, 980, 750, 820, 680],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      }
    ]
  }

  return <Bar data={data} />
}

export function MapaRisco({ detalhado = false }) {
  const posicao = [-15.7801, -47.9292] // Coordenadas de Brasília
  const zoom = detalhado ? 10 : 4

  const areas = [
    { nome: 'São Paulo', posicao: [-23.5505, -46.6333], casos: 500, risco: 'alto' },
    { nome: 'Rio de Janeiro', posicao: [-22.9068, -43.1729], casos: 350, risco: 'médio' },
    { nome: 'Salvador', posicao: [-12.9714, -38.5014], casos: 280, risco: 'alto' },
    { nome: 'Fortaleza', posicao: [-3.7172, -38.5431], casos: 200, risco: 'médio' },
    { nome: 'Manaus', posicao: [-3.1190, -60.0217], casos: 150, risco: 'baixo' },
  ]

  return (
    <MapContainer center={posicao} zoom={zoom} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {areas.map((area) => (
        <CircleMarker 
          key={area.nome}
          center={area.posicao} 
          color={area.risco === 'alto' ? 'red' : area.risco === 'médio' ? 'yellow' : 'green'} 
          radius={15}
        >
          <Popup>
            <strong>{area.nome}</strong><br />
            Casos: {area.casos}<br />
            Risco: {area.risco}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  )
}

