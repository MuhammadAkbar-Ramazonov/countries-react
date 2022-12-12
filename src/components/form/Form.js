import "./form.css"


function Form () {
    return (
        <>
            <form className="row justify-content-between flex-wrap    site-search p-0 mb-3 " action="https://echo.htmlacademy.ru/" method="post" autoComplete="off">
                <input  className="col-12 col-sm-12 col-md-9  col-xl-10 site-search-input form-control" type="search" name="user_search" placeholder="Search for a country…" aria-label="search" />


                <select className="col-12 col-sm-12 col-md-3 col-xl-2 form-selects">
                    <option selected>Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </form>
        </>
    )
}

export default Form;