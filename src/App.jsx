import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css"
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
  

export function App (){
    return ( 
    
    <Router>
        <header>
          <Link to="/"> <h1 className={styles.title}>Peliculitas</h1> </Link>  
        </header>
            
        <main>
         <Routes>
          {/* <Route exact path="/movie"> <MovieDetails /> </Route> */}
          <Route exact path='/movie/:movieId' element={<MovieDetails/>}></Route>
          <Route exact path='/' element={<LandingPage/>}></Route>
         </Routes>
        </main>

    </Router>
    
    );
};
