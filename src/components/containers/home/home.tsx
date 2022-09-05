import { useEffect, useState } from "react"
import { Movie } from "../../../models/movie"
import { getMovies } from "../../../utils/axios"
import { HomePageBody } from "../UI/homePageBody"
import { HomePageFooter } from "../UI/homePageFooter"
import { HomePageHeader } from "../UI/homePageHeader"
import { HomePageNeck } from "../UI/homePageNeck"

export const Home: React.FC = () => {

  const [moviesList, setMoviesList] = useState<Movie[]>([])
  const [filteredList, setFilteredList] = useState<Movie[]>([])
  const [selectedCategory, setSelectedCategory] = useState("Hành động và phiêu lưu");
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    setFilteredList(filteredMoviesList)
  }, [selectedCategory, moviesList, searchKey])

  const getData = async () => {
    try {
      const { data } = await getMovies("/movies", { param: { page: 1, pageSize: 10 } })
      setMoviesList(data)
    } catch (err) {
      setMoviesList([])
    }
  }

  const filterChangeHandler = (selectedCategory: string) => {
    setSelectedCategory(selectedCategory);
  }

  const filterSearchChangeHandler = (searchKey: string) => {
    setSearchKey(searchKey);
  }

  const filteredMoviesList = moviesList.filter((movie) => {
    console.log(searchKey);
    if (searchKey !== "") {
      return movie.name.toString().includes(searchKey);
    }
      return movie.category.toString() === selectedCategory;
  })

  return (
    <div>
      <HomePageHeader searchMovie={filterSearchChangeHandler} />
      <HomePageNeck onChangeFilter={filterChangeHandler} />
      <HomePageBody movies={filteredList} />
      <HomePageFooter />
    </div>
  )
}