import { useEffect, useState } from "react"
import { Container, Content, Header, Hero, Img, Length, Loader, Logo } from '../AppMovie'
import { useNavigate } from 'react-router-dom'
import { moviesType } from "../types/movietype"

const BASE_URL = 'https://api.b7web.com.br/cinema/'

export const HomePage = () => {
    const [movies, setMovies] = useState<moviesType[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    useEffect(() => {
        loadMovies()
    }, [])

    const loadMovies = async () => {
        try {
            setLoading(true)
            let data = await fetch(BASE_URL);
            let response = await data.json()
            setLoading(false)
            setMovies(response)
        } catch (e) {
            console.log('We founded an error at', e)
            navigate("/notFound")
        }
    }
    return <>
        <Header>
            <Logo>
                <span>👽</span>
            </Logo>
            {!loading &&
                <Length>
                    <p>Movies tototal: {movies.length}</p>
                    <button>load movies</button>
                </Length>
            }
        </Header>
        <main>


            {loading &&
                <Loader></Loader>
            }

            {!loading &&
                <Hero>
                    {movies.map((item, index) => (
                        <Container key={index}>
                            <Img src={item.avatar} alt={item.titulo} title={item.titulo} />
                            <Content>{item.titulo}</Content>
                        </Container>
                    ))}
                </Hero>
            }
        </main>
    </>
}