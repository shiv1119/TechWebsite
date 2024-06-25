import React from 'react';
import { Button, Form, Input, Space, Row, Col, Card } from 'antd';

const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);

  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(true));
  }, [form, values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};
const { TextArea } = Input;

const Contacts = () => {
  const [form] = Form.useForm();
  return (
    <>
    <Form>
      <Row>
        <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} lg={{ span: 18, offset:  3}} xl={{ span: 16, offset: 4 }}>
            <div style={{fontWeight:"bold"}} className="large_text bottom_pad">Contact Me</div>
            <Card style={{background:"linear-gradient(90deg, rgba(252,247,252,1) 0%, rgba(255,255,255,1) 10%, rgba(252,247,252,1) 100%)", border:"none"}}>
            <Row gutter={20} style={{marginTop:"5px"}}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} > 
                    <Form.Item
                      name="firstName"
                      label="First Name"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input placeholder='Drop first name...' />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} > 
                <Form.Item
                      name="lastName"
                      label="Last Name"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input placeholder='Drop last name...' />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} > 
                    <Form.Item
                      name="email"
                      label="Email Id"
                      rules={[
                        {
                          required: true,
                          type: 'email'
                        },
                      ]}
                    >
                      <Input type='email' placeholder='Drop email id...'/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} > 
                <Form.Item
                      name="phone"
                      label="Mob Number"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input type="tel" placeholder='Drop phone number...' />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} > 
                    <Form.Item
                      name="textarea"
                      label="Message"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <TextArea placeholder="Drop message..."/>
                    </Form.Item>
                </Col>
            </Row>
            <Row style={{marginBottom:"-20px"}}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}> 
                <div style={{display:"flex", justifyContent:"center"}}>
                <Form.Item>
                  <Space>
                    <SubmitButton form={form}>Submit</SubmitButton>
                    <Button htmlType="reset">Reset</Button>
                  </Space>
                </Form.Item>
                </div>
                </Col>
            </Row>
            </Card>
        </Col>
      </Row>
      </Form>
    </>
  );
};
export default Contacts;