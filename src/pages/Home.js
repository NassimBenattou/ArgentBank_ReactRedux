import React from 'react';
import Navbar from '../components/Navbar';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import iconChat from '../img/icon-chat.webp';
import iconMoney from '../img/icon-money.webp';
import iconSecurity from '../img/icon-security.webp';
import "../css/main.css";

function Home() {
  return (
    <div>
        <Navbar />
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className='features'>
                <Feature img={iconChat} title="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our
                24/7 chat or through a phone call in less than 5 minutes." />

                <Feature img={iconMoney} title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!" />
                
                <Feature img={iconSecurity} title="Security you can trust" text="We use top of the line encryption to make sure your data and money
                is always safe." />
            </section>
        <Footer />
    </div>
  )
}

export default Home