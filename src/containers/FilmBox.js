import React, {Component} from 'react';
import FilmList from "../components/FilmList";
import CommentForm from "../components/FilmForm";

class FilmBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            films: [
                    {
                      id: 1,
                      name: "Spider-Man: Into the Spider-Verse",
                      url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
                    },
                    {
                      id: 2,
                      name: "Life Itself",
                      url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
                    },
                    {
                      id: 3,
                      name: "Mary Queen of Scots",
                      url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
                    },
                    {
                      id: 4,
                      name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
                    },
                    {
                      id: 5,
                      name: "Captain Marvel",
                      url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
                    }
            ]
        }

        this.handleFilmSubmit = this.handleFilmSubmit.bind(this);

    }

    handleFilmSubmit(submittedFilm){
        submittedFilm.id = Date.now();
        const updatedFilms = [...this.state.films, submittedFilm]
        this.setState({
            films: updatedFilms
        });
    }

    render(){
        return (
            <div className="film-box">
                <h2>Add a film:</h2>
                <FilmForm onCommentSubmit={this.handleFilmForm}/>
                <h2>Films</h2>
                <CommentList comments={this.state.films} />
            </div>
        )
    }

}