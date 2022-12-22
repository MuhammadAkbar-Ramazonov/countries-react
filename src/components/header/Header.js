import "./header.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
	const { t, i18n } = useTranslation();
	return (
		<>
			<header className='site-header'>
				<div className='container'>
					<div className='header-wrapper d-flex justify-content-between'>
						<Link className='header-link' to='/'>
							{t("header.logo")}
						</Link>
						<div className='d-flex align-items-center justify-content-between'>
							<button
								className='d-flex header-darkmode'
								onClick={() => {
									document.body.classList.toggle("theme-dars");
								}}
								type='button'
							>
								{t("header.darkModeBtb")}
							</button>
							<select
								defaultValue={i18n.language}
								onChange={(evt) => {
									i18n.changeLanguage(evt.target.value);
									localStorage.setItem("lang", evt.target.value);
								}}
								className='lang-select rounded border ms-4 p-2'
							>
								<option value='uz'>uz</option>
								<option value='ru'>ru</option>
								<option value='en'>en</option>
							</select>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
