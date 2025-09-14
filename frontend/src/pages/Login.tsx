import { Card, Form, Input, Button, Layout } from 'antd'

export default function Login() {
  const onFinish = (values: any) => {
    console.log('login', values)
  }

  return (
    <Layout style={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Card title="登录" style={{ width: 300 }}>
        <Form onFinish={onFinish}>
          <Form.Item name="email" rules={[{ required: true, message: '请输入邮箱' }]}> 
            <Input placeholder="邮箱" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}> 
            <Input.Password placeholder="密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>登录</Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  )
}
