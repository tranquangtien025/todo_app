import { useEffect, useState } from "react"
import { Movie } from "../../../models/movie"
import { DetailPageBody } from "../UI/detailPageBody"
import { DetailPageFace } from "../UI/detailPageFace"
import { HomePageFooter } from "../UI/homePageFooter"
import { useNavigate, useLocation } from "react-router-dom"
import { getMovieDetail } from "../../../utils/axios"

export const Detail = () => {
  const navigate = useNavigate();
  const params = useLocation();
  const [movieDetail, setMovieDetail] = useState<Movie>();
  
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const id = params.pathname.split('/')[2]
    try {
      const { data } = await getMovieDetail(id)
      setMovieDetail(data)
    } catch (err) {
      navigate("/notFound")
    }
  }

  return (
    <div>
      <DetailPageFace movieDetail={movieDetail} />
      <DetailPageBody movieDetail={movieDetail} />
      <HomePageFooter />
    </div>
  )
}