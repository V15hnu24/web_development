import React from 'react'
import "antd/dist/antd.css";
import { Button } from 'antd';
  
export default function App() {
  
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4>Ant Design Button Component</h4>
      <Button>Default Button</Button> <br />
      <Button type="primary">Primary Button</Button> <br />
      <Button type="dashed">Dashed Button</Button> <br />
    </div>
  );
}