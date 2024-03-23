import React, { FC, useEffect } from "react"
import { Switch, Space } from "antd"

const App: FC<any> = (props: any) => {
  const [checked, setChecked] = React.useState(false)

  const handleChange = (checked: boolean) => {
    setChecked(checked)
    props.ngSetCheckState(checked)
  }

  useEffect(() => {
    handleChange(props.checkState)
  }, [props.checkState])

  return (
    <Space direction="vertical">
      <Switch
        checkedChildren="on"
        unCheckedChildren="off"
        checked={checked}
        onChange={handleChange}
      />
    </Space>
  )
}

export default App
