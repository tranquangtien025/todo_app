import { Movie } from "../../../../../models/movie"
import { Item } from "./item"
import { StyledList } from "./styles"

export const List = (props: any) => {

  return (
    <StyledList>
      {props.movies.map((movie: Movie) => <Item 
      no={props.movies.indexOf(movie) + 1}
      thumbnail={movie.thumbnail}
      name={movie.name}
      rating={movie.rating}
      category={movie.category}
      starRating={movie.starRating}
      rent={movie.rent} />)}
    </StyledList>
  )
}