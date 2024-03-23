import React, { FC } from "react"
import { Flex } from "antd"

import MyList from "./List"
import MyForm from "./MyForm"
import MyUpload from "./MyUpload"
import MyTimeline from "./MyTimeline"

const ReactApp: FC<any> = () => {
  return (
    <Flex gap={20} wrap="wrap">
      <MyList />
      <MyForm />
      <MyUpload />
      <MyTimeline />
    </Flex>
  )
}

export default ReactApp
