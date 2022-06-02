import { FC } from "react"
import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
  children: JSX.Element,
  title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin // Si window es undefined (lado del servidor) devuelvo un string vacio, de lo contrario (lado del cliente) utilizo el location para obtener la url base de la aplicación

export const Layout: FC<Props> = ({children, title}) => {
  
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Cesar" />
        <meta name="description" content={`Información sobre el pokemon ${title}`}/>
        <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main className={'main'}>
        {children}
      </main>
    </>
  )
}
