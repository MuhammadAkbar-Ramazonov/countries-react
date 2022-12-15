import "./header.css";

function Header () {
//     const elBtn = document.querySelector('.header-darkmode');

// elBtn.addEventListener('click', () => {
//     document.body.classList.toggle('theme-dars')
// })

    return (
        <>
            <header className="site-header">
                <div className="container">
                <div className="header-wrapper d-flex justify-content-between">
                    <a className="header-link" href="#"> Where in the world?</a>
                    <button className="d-flex header-darkmode" type="button" >Dark Mode</button>
                </div>
                </div>
            </header>
        </>
    )
}

export default Header;