import "./app.css";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Hero from "./components/hero/Hero";

function App () {
    return (
        <>
            <Header/>
            <main className="site-main">
              <section className="hero-section">
                    <div className="container">
                        <Form/>
                        <ul className="hero-section-list row justify-content-center gx-5">
                            <Hero/>
                            <Hero/>
                            <Hero/>
                            <Hero/>
                            <Hero/>
                            <Hero/>
                            <Hero/>
                            <Hero/>

                        </ul>
                    </div>
              </section>
            </main>
        </>
    )
}

export default App;