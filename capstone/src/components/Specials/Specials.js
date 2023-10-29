import Button from '../Button/Button'
import GreekSalad from '../../assets/greek salad.jpg'
import './Specials.css'
function Special() {
    return (
        <>

            <section id="titleBox">
                <article id='specialstitle'>
                    Specials
                </article>
                <article id='specialsbutton'>
                    <Button text='Order Online' link='/order'/>
                </article>
             </section>






             <section id="specialsBox">
                <article>
                    <img src={GreekSalad} alt='a greek salad' className="specialsImage"/>
                    <div>
                        <h1>Greek Salad </h1>
                        <span className='specialsprice'>$12.99</span>
                    </div>
                    <body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                        
                    </body>
                    
                </article>

                <article>
                    <img src={GreekSalad} alt='a greek salad' className="specialsImage"/>
                    <div>
                        <h1>Greek Salad </h1>
                        <span className='specialsprice'>$12.99</span>
                    </div>
                    <body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </body>
                    
                </article>

                <article>
                    <img src={GreekSalad} alt='a greek salad' className="specialsImage"/>
                    <div>
                        <h1>Greek Salad </h1>
                        <span className='specialsprice'>$12.99</span>
                    </div>
                    <body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </body>
                    
                </article>
             </section>
             <br/><br/>
         </>
    )
}

export default Special