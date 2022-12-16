import notFound from '../../assets/notFound.png'
import {Link} from 'react-router-dom'
import { Container, Img, Content } from './style'

export const Notfound = () => {
  return (
    <Container>
        <Img src={notFound} />
        <Content>
            <h1>Not Found Page</h1>
            <p>check your URL First</p>
            <Link to="/">Back to Home</Link>
        </Content>
    </Container>
  )
}
