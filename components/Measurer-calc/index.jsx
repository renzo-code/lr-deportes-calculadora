import React, { useState, useMemo } from 'react'

import styled from 'styled-components'
import Dates from './Dates'
import ButtonCalc from './ButtonCalc'
import SquareComponent from './Square'
import { FixturePartidos } from '../../const/index'

const MeasurerCalc = ({ table, setTable }) => {
  const [fecha13, setFecha13] = useState(FixturePartidos[0])
  const [fecha14, setFecha14] = useState(FixturePartidos[1])
  const [fecha15, setFecha15] = useState(FixturePartidos[2])
  const [fecha16, setFecha16] = useState(FixturePartidos[3])
  const [fecha17, setFecha17] = useState(FixturePartidos[4])
  const [fecha18, setFecha18] = useState(FixturePartidos[5])
  const [fecha, setFecha] = useState(13)

  const [error13, setError13] = useState(false)
  const [error14, setError14] = useState(false)
  const [error15, setError15] = useState(false)
  const [error16, setError16] = useState(false)
  const [error17, setError17] = useState(false)
  const [error18, setError18] = useState(false)
  // const [isValid, setIsValid] = useState(true)

  const handleInput = (e, fn, id, data) => {
    const { value, validity: { valid }, name } = e.target
    const newArray = data.map((f) => {
      if (f.id === id) {
        const x = valid ? value : f[name]
        return {
          ...f,
          [name]: x
        }
      }

      return { ...f }
    })
    fn([...newArray])
  }

  const getInfoCountry = (country) => {
    return table.find((t) => t.pais === country)
  }

  const validatedVs = (item) => {
    const info1 = getInfoCountry(item.nameTeam1)
    const info2 = getInfoCountry(item.nameTeam2)
    if (item.score1 > item.score2) {
      info1.PJ = info1.PJ + 1
      info2.PJ = info2.PJ + 1
      info1.PG = info1.PG + 1
      info2.PP = info2.PP + 1
      info2.DG = info2.DG - (item.score1 - item.score2)
      info1.PTS = info1.PTS + 3
      info1.DG = info1.DG + (item.score1 - item.score2)
    } else if (item.score1 < item.score2) {
      info2.PJ = info2.PJ + 1
      info1.PJ = info1.PJ + 1
      info1.PP = info1.PP + 1
      info2.PG = info2.PG + 1
      info2.PTS = info2.PTS + 3
      info2.DG = info2.DG - (item.score2 - item.score1)
      info1.DG = info1.DG + (item.score2 - item.score1)
    } else if (item.score1 === item.score2) {
      info2.PJ = info2.PJ + 1
      info1.PJ = info1.PJ + 1
      info2.PE = info2.PE + 1
      info1.PE = info1.PE + 1
      info2.PTS = info2.PTS + 1
      info1.PTS = info1.PTS + 1
    }
    setTable([...table, info1, info2])
  }

  let info = null

  const CalcPoints = (f) => {
    let isValid = true
    
    f.forEach((item) => {
      console.log('calc',item.score1.length, item.score2.length)
      if (item.score1.length === 0 || item.score2.length === 0) {
        isValid = false
      }
    })
    
    console.log('item', isValid)
    if (!isValid) {
      setError13(true)
      setError14(true)
      setError15(true)
      setError16(true)
      setError17(true)
      setError18(true)
      return
    } else {
      setError13(false)
      setError14(false)
      setError15(false)
      setError16(false)
      setError17(false)
      setError18(false)
    }

    f.filter(item => item.score1.length > 0 && item.score2.length > 0)
    .forEach((item, i) => {
      validatedVs(item)
    })
  }

  const MostrarDataFecha = (number) => {
    if (number === 13) {
      return (
        <>
          {
            fecha13 &&
            fecha13.map((item, i) => {
              return (
                <>
                  <Dates
                    key={i}
                    team1={item.nameTeam1}
                    logo1={item.logo1}
                    team2={item.nameTeam2}
                    logo2={item.logo2}
                    score1={item.score1}
                    score2={item.score2}
                    handleInput={(e) => handleInput(e, setFecha13, item.id, fecha13)}
                  />
                </>
              )
            })
          }
          <ButtonCalc colorBtn='#398E06' onClick={() => { CalcPoints(fecha13) }} />
          {error13 && <TextError>Complete todos los espacios.</TextError>}
        </>
      )
    }
    else if (number === 14) {
      return (
        <>
          {
            fecha14 &&
            fecha14.map((item, i) => {
              return <Dates
                key={i}
                team1={item.nameTeam1}
                logo1={item.logo1}
                team2={item.nameTeam2}
                logo2={item.logo2}
                score1={item.score1}
                score2={item.score2}
                handleInput={(e) => handleInput(e, setFecha14, item.id, fecha14)}
              />
            })
          }
          <ButtonCalc colorBtn='#398E06' onClick={() => { CalcPoints(fecha14) }} />
          {error14 && <TextError>Complete todos los espacios.</TextError>}
        </>
      )
    }
    else if (number === 15) {
      return (
        <>
          {
            fecha15 &&
            fecha15.map((item, i) => {
              return <Dates
                key={i}
                team1={item.nameTeam1}
                logo1={item.logo1}
                team2={item.nameTeam2}
                logo2={item.logo2}
                score1={item.score1}
                score2={item.score2}
                handleInput={(e) => handleInput(e, setFecha15, item.id, fecha15)}
              />
            })
          }
          <ButtonCalc colorBtn='#398E06' onClick={() => { CalcPoints(fecha15) }} />
          {error15 && <TextError>Complete todos los espacios.</TextError>}
        </>
      )
    }
    else if (number === 16) {
      return (
        <>
          {
            fecha16 &&
            fecha16.map((item, i) => {
              return <Dates
                key={i}
                team1={item.nameTeam1}
                logo1={item.logo1}
                team2={item.nameTeam2}
                logo2={item.logo2}
                score1={item.score1}
                score2={item.score2}
                handleInput={(e) => handleInput(e, setFecha16, item.id, fecha16)}
              />
            })
          }
          <ButtonCalc colorBtn='#398E06' onClick={() => { CalcPoints(fecha16) }} />
          {error16 && <TextError>Complete todos los espacios.</TextError>}
        </>
      )
    }
    else if (number === 17) {
      return (
        <>
          {
            fecha17 &&
            fecha17.map((item, i) => {
              return <Dates
                key={i}
                team1={item.nameTeam1}
                logo1={item.logo1}
                team2={item.nameTeam2}
                logo2={item.logo2}
                score1={item.score1}
                score2={item.score2}
                handleInput={(e) => handleInput(e, setFecha17, item.id, fecha17)}
              />
            })
          }
          <ButtonCalc colorBtn='#398E06' onClick={() => { CalcPoints(fecha17) }} />
          {error17 && <TextError>Complete todos los espacios.</TextError>}
        </>
      )
    }
    else if (number === 18) {
      return (
        <>
          {
            fecha18 &&
            fecha18.map((item, i) => {
              return <Dates
                key={i}
                team1={item.nameTeam1}
                logo1={item.logo1}
                team2={item.nameTeam2}
                logo2={item.logo2}
                score1={item.score1}
                score2={item.score2}
                handleInput={(e) => handleInput(e, setFecha18, item.id, fecha18)}
              />
            })
          }
          <ButtonCalc colorBtn='#398E06' onClick={() => { CalcPoints(fecha18) }} />
          {error18 && <TextError>Complete todos los espacios.</TextError>}
        </>
      )
    }
  }

  const partidosxFecha = useMemo(() => MostrarDataFecha(fecha), [fecha, fecha13, fecha14, fecha15, fecha16, fecha17, fecha18, error13, error14, error15, error16, error17, error18])

  return (
    <>
    <ContainerMeasurer>
      {partidosxFecha}

      <ContainerBar>
        <SquareComponent onClick={() => setFecha(13)} number="13" />
        <SquareComponent onClick={() => setFecha(14)} number="14" />
        <SquareComponent onClick={() => setFecha(15)} number="15" />
        <SquareComponent onClick={() => setFecha(16)} number="16" />
        <SquareComponent onClick={() => setFecha(17)} number="17" />
        <SquareComponent onClick={() => setFecha(18)} number="18" />
      </ContainerBar>

    </ContainerMeasurer>
    </>
  )
}

export default MeasurerCalc

const ContainerMeasurer = styled.div`
  height: auto;
  width: 100%;
`
const ContainerBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 45px;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
`
const TextError = styled.h3`
  font-size: 11px;
  color: red;
  font-weight: 600;
  text-align: center;
`