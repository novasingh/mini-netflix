import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { performAllMovies } from "../../redux/actionCreators/movieCreators";
import Loader from "../../components/Loader";

const ListMovie = ({ movieList, submitting, getAllMovies }) => {
  //Check movieList don't have any value then GET ALL MOVIES WITH getAllMovie Func
  useEffect(() => {
    if (movieList && movieList.length === 0 && !movieList?.Search) {
      getAllMovies();
    }
  }, [getAllMovies, movieList]);

  return submitting ? (
    <Loader />
  ) : !submitting && (
    <div className="container-grid">
      {movieList && movieList?.Search?.length > 0 &&
        movieList?.Search.map((item, i) => (
          <Link
            key={"movies" + i}
            to={`/movie/${item.imdbID}`}
            className="item link"
          >
            <img lazy="true" className="image skeleton" src={item.Poster} alt={item.Title} />
          </Link>
        ))}
      {movieList?.length === 0 && "No movies found."}
    </div>
  );
};

const mapStateToProps = (state) => ({
  submitting: state.movie.submitting,
  movieList: state.movie.movieList,
});

const mapDispatchToProps = (dispatch) => ({
  getAllMovies: (payload) => dispatch(performAllMovies(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
