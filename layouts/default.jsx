import React from 'react'

import NextHead from 'next/head'
import Header from '../components/Header'

import styled from 'styled-components'

const Layout = (props) => {
  const {
    children
  } = props
  return (
    <>
      <NextHead>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap" rel="stylesheet"/>

        {/* Metadatos Facebook */}
        <meta property="fb:pages" content="94604237016" />
        <meta property="fb:app_id" content="489210501129201" />
        <meta property="og:image" content="https://origin.cronosmedia.glr.pe/large/2021/10/14/lg_6168aa194dbe4a0ab457331d.jpg"/>
        {/* Metadatos Twitter */} 
        <meta property="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2021/10/14/lg_6168aa194dbe4a0ab457331d.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@larepublica_pe" />

        <link href="https://fonts.googleapis.com/css2?family=Public+Sans&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
        <link rel="canonical" href="https://especiales.larepublica.pe/eliminatorias-qatar-2022-sudamerica-tabla-posiciones-fixture-estadisticas-ultimas-noticias-clasificatorias-mundial/" />
        
        <title>Eliminatorias Qatar 2022 Sudamérica: tabla de posiciones, fixture, estadísticas y últimas noticias clasificatorias al Mundial de fútbol</title>
      </NextHead>
      <Wrapper>
        <Header />
        <LayoutContent>
          <LayoutBody>
            {children}
          </LayoutBody>
        </LayoutContent>
      </Wrapper>
    </>
  )
}

export default Layout

const Wrapper = styled.div`
  height: auto;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  background-image: url("./static/images/fondo-opaco.png");
  background-size: 100%;
  background-repeat: repeat;
  background-attachment: fixed;
`
const LayoutContent = styled.div`
  display: flex;
  height:  calc(100vh - 104px);
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`
const LayoutBody = styled.div`
  width: 100%;
  margin: auto;
  padding: 0;
  min-height: calc(100vh - 450px);
  font-family: Arial, Helvetica, sans-serif;
`