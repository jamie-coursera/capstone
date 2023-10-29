import './Hero.css'
import ChefImg from '../../assets/restauranfood.jpg'
import Button from '../Button/Button'
function Hero() {
    return (
        <section>
            <article style={{flex:1,paddingLeft:"23vw"}}>

                    <h1 id="title">Little Lemon</h1>
                    <h2 id="descriptor">Chicago</h2>

                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <br></br>
                    <Button link="/reserve" text="Reserve a Table" id="reserveBtn"/>

            </article>

            <article style={{flex:1,paddingRight:"23vw"}}>
                <img src={ChefImg} alt="Food at Little Lemon"/>
            </article>
        </section>
    )
}
export default Hero