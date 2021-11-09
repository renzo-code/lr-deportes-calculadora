import React, { useState } from 'react'

import styled from 'styled-components'
import MeasurerCalc from '../Measurer-calc'
import TableCalcPositions from '../Table-calc/table'
import { ArrayPointsTable } from '../../const/index'

const Calculator = () => {
  const [table, setTable] = useState(ArrayPointsTable)
  return (
    <Container>
      <MeasurerCalc table={table} setTable={setTable} />
      <TableCalcPositions table={table} setTable={setTable} />
    </Container>
  )
}

export default Calculator

const Container = styled.div`
  height: auto;
  width: 100%;
`