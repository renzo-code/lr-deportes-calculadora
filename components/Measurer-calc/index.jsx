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
  const [fecha, setFecha] = useState(14)

  const [error13, setError13] = useState(false)
  const [error14, setError14] = useState(false)
  const [error15, setError15] = useState(false)
  const [error16, setError16] = useState(false)
  const [error17, setError17] = useState(false)
  const [error18, setError18] = useState(false)

  const [errorColor14, setErrorColor14] = useState(false)
  const [errorColor15, setErrorColor15] = useState(false)
  const [errorColor16, setErrorColor16] = useState(false)
  const [errorColor17, setErrorColor17] = useState(false)
  const [errorColor18, setErrorColor18] = useState(false)

  const  [btnDisabled14, setBtnDisabled14] = useState(true)
  const  [btnDisabled15, setBtnDisabled15] = useState(false)
  const  [btnDisabled16, setBtnDisabled16] = useState(false)
  const  [btnDisabled17, setBtnDisabled17] = useState(false)
  const  [btnDisabled18, setBtnDisabled18] = useState(false)

  const [colorBtn14, setColorBtn14] = useState('red')
  const [colorBtn15, setColorBtn15] = useState('#398E06')
  const [colorBtn16, setColorBtn16] = useState('#398E06')
  const [colorBtn17, setColorBtn17] = useState('#398E06')
  const [colorBtn18, setColorBtn18] = useState('#398E06')

  // const [isValid, setIsValid] = useState(true)

  const arrayStates = [
    fecha, 
    fecha13, 
    fecha14, 
    fecha15, 
    fecha16, 
    fecha17, 
    fecha18, 
    error13, 
    error14, 
    error15, 
    error16, 
    error17, 
    error18, 
    errorColor14, 
    errorColor15,
    errorColor16,
    errorColor17,
    errorColor18,
    btnDisabled14, 
    btnDisabled15, 
    btnDisabled16, 
    btnDisabled17, 
    btnDisabled18,
    colorBtn14, 
    colorBtn15, 
    colorBtn16, 
    colorBtn17, 
    colorBtn18
  ]

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

  const CalcPoints = (f, n) => {
    let isValid = true
    f.forEach((item) => {
      console.log('calc',item.score1.length, item.score2.length)
      if (item.score1.length === 0 || item.score2.length === 0) {
        isValid = false
      }
    })
    
    console.log('item', isValid)
    if (!isValid) {
      //suma puntos llenos las casillas
      setError13(true)
      setError14(true)
      setError15(true)
      setError16(true)
      setError17(true)
      setError18(true)

      // setErrorColor14(true)
      setErrorColor15(true)
      setErrorColor16(true)
      setErrorColor17(true)
      setErrorColor18(true)
      
      // setBtnDisabled14(false)
      setBtnDisabled15(false)
      setBtnDisabled16(false)
      setBtnDisabled17(false)
      setBtnDisabled18(false)

      return
    } else {
      //bloquea boton vacios las casillas
      // setError13(false)
      // setError14(false)
      // setError15(false)
      // setError16(false)
      setError17(false)
      setError18(false)

      setErrorColor14(false)
      setErrorColor15(false)
      setErrorColor16(false)
      setErrorColor17(false)
      setErrorColor18(false)
    }
    if (n === 15){
      setBtnDisabled15(true)
      setColorBtn15('red')
    }
    else if (n === 16){
      setBtnDisabled16(true)
      setColorBtn16('red')
    }
    else if (n === 17){
      setBtnDisabled17(true)
      setColorBtn17('red')
    }
    else if (n === 18){
      setBtnDisabled18(true)
      setColorBtn18('red')
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
          {console.log('btnDisabled14', btnDisabled14)}
          {errorColor14 && <ButtonCalc colorBtn={colorBtn14} onClick={() => { CalcPoints(fecha14) }} />}
          {!errorColor14 && <ButtonCalc colorBtn={colorBtn14} disabled={btnDisabled14} onClick={() => { CalcPoints(fecha14, 14) }} />}
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
          {console.log('btnDisabled15', btnDisabled15)}
          {errorColor15 && <ButtonCalc colorBtn={colorBtn15} onClick={() => { CalcPoints(fecha15) }} />}
          {!errorColor15 && <ButtonCalc colorBtn={colorBtn15} disabled={btnDisabled15} onClick={() => { CalcPoints(fecha15, 15) }} />}
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
          {console.log('btnDisabled16', btnDisabled16)}
          {errorColor16 && <ButtonCalc colorBtn={colorBtn16} onClick={() => { CalcPoints(fecha16) }} />}
          {!errorColor16 && <ButtonCalc colorBtn={colorBtn16} disabled={btnDisabled16} onClick={() => { CalcPoints(fecha16, 16) }} />}
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
          {errorColor17 && <ButtonCalc colorBtn={colorBtn17} onClick={() => { CalcPoints(fecha17) }} />}
          {!errorColor17 && <ButtonCalc colorBtn={colorBtn17} disabled={btnDisabled17} onClick={() => { CalcPoints(fecha17, 17) }} />}
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
          {errorColor18 && <ButtonCalc colorBtn={colorBtn18} onClick={() => { CalcPoints(fecha18) }} />}
          {!errorColor18 && <ButtonCalc colorBtn={colorBtn18} disabled={btnDisabled18} onClick={() => { CalcPoints(fecha18, 18) }} />}
          {error18 && <TextError>Complete todos los espacios.</TextError>}
        </>
      )
    }
  }

  const partidosxFecha = useMemo(() => MostrarDataFecha(fecha), [arrayStates])

  return (
    <>
    <ContainerMeasurer>
      {partidosxFecha}

      <ContainerBar>
        {/* <SquareComponent onClick={() => setFecha(13)} number="13" /> */}
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
