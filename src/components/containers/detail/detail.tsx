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
  const id = params.pathname.split('/')[2]
  const [movieDetail, setMovieDetail] = useState<Movie>();

  useEffect(() => {
    if(id){
      getData()
    }
  }, [id])

  const getData = async () => {
    try {
      const { data } = await getMovieDetail(id)
      setMovieDetail(data)
    } catch (err) {
      navigate("/notFound")
    }
  }

  return (
    <div>
      {movieDetail &&
        (
          <div>
            <DetailPageFace movieDetail={movieDetail} />
            <DetailPageBody movieDetail={movieDetail} />
          </div>
        )
      }
      <HomePageFooter />
    </div>
  )
}