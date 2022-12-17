import "./header.css";
import { Link } from "react-router-dom";

function Header() {

	return (
		<>
			<header className='site-header'>
				<div className='container'>
					<div className='header-wrapper d-flex justify-content-between'>
						<Link className='header-link' to="/">
							Where in the world?
						</Link>
						<button
							className='d-flex header-darkmode'
							onClick={() => {
								document.body.classList.toggle("theme-dars");
							}}
							type='button'
						>
							Dark Mode
						</button>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
