import './Vouches.css'
import Tim from '../../assets/tim.jpg'
import GreyStar from '../../assets/greystar.png'
function Vouches() {
    return (
        <>
        <article id="vouchbox">
        <span id="vouchtitle">Don't just take our word for it...</span>
        

        <section id="vouchesContainer">
            <article>
                <img src={Tim} alt="a client" className="vouch-img"/>
                <div>
                        <h1>Timothy Polini</h1>
                        <span className='rating'>5<img src={GreyStar} alt="a star"/></span>
                    </div>
                <span className="vouch-details">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</span>
            </article>

            <article>
                <img src={Tim} alt="a client" className="vouch-img"/>
                <div>
                        <h1>Timothy Polini</h1>
                        <span className='rating'>5<img src={GreyStar} alt="a star"/></span>
                    </div>
                <span className="vouch-details">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</span>
            </article>

            <article>
                <img src={Tim} alt="a client" className="vouch-img"/>
                <div>
                        <h1>Timothy Polini</h1>
                        <span className='rating'>5<img src={GreyStar} alt="a star"/></span>
                    </div>
                <span className="vouch-details">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</span>
            </article>

            <article>
                <img src={Tim} alt="a client" className="vouch-img"/>
                <div>
                        <h1>Timothy Polini</h1>
                        <span className='rating'>5<img src={GreyStar} alt="a star"/></span>
                    </div>
                <span className="vouch-details">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</span>
            </article>
            
        </section>
        </article>
        </>
    )
}

export default Vouches;
