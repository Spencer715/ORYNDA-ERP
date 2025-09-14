import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import Login from './pages/Login'

const { Header, Content } = Layout

function Dashboard() {
  return (
    <Layout>
      <Header style={{ color: '#fff' }}>ORYNDA ERP</Header>
      <Content style={{ padding: '24px' }}>欢迎</Content>
    </Layout>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
