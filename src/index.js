import ReactDOM from "react-dom/client";
import App from "./App";




function Index () {
    return (
        <>
          <App/>  
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Index />
  // </React.StrictMode>
);