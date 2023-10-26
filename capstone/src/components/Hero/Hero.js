import './Hero.css'
import ChefImg from '../../assets/restauranfood.jpg'
function Hero() {
    return (
        <section>
            <article>

                    <h1 id="title">Little Lemon</h1>
                    <h2 id="descriptor">Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>


            </article>

            <article>
                <img src={ChefImg} alt="Food at Little Lemon"/>
            </article>
        </section>
    )
}
export default Hero