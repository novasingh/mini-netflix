import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BackIcon from "../../assets/images/backIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { performGetMovieById } from "../../redux/actionCreators/movieCreators";
import Loader from "../../components/Loader";

const SingleItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  //use Selector to use to get data from Redux state
  const { movieData, submitting } = useSelector((state) => state.movie);

  useEffect(() => {
    if (id) {
      dispatch(performGetMovieById(id));
    }
  }, [dispatch, id]);

  return submitting ? (
    <Loader />
  ) : (
    !submitting && movieData && (
      <div className="single-item">
        <div className="back-icon">
          <Link to="/">
            <img lazy="true" src={BackIcon} alt="back icon to home" />
          </Link>
        </div>
        <div className="movie-content">
          <div className="movie-poster">
            <img
              src={movieData?.Poster}
              className="movie-image"
              alt={"Movie Poster - " + movieData?.Title}
            />
          </div>
          <div className="movie-data">
            <div className="movie-info">
              <h1 className="movie-title">{movieData?.Title}</h1>
              <div className="movie-label">Description</div>
              <p className="movie-description"> {movieData?.Plot}</p>
              <div className="movie-label">The Actor</div>
              <p className="movie-description">{movieData?.Actors}</p>
              <div className="movie-label">Ratings</div>
              {movieData &&
                movieData?.Ratings &&
                movieData?.Ratings.map((item, i) => (
                  <div className="rating" key={`rating-` + i}>
                    <div>{item.Source}</div>
                    <div>{item.Value}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SingleItem;
