import { DetailPageBody } from "../UI/detailPageBody"
import { DetailPageFace } from "../UI/detailPageFace"
import { HomePageFooter } from "../UI/homePageFooter"
import { HomePageHeader } from "../UI/homePageHeader"

export const Detail = () => {
  return (
    <div>
      <HomePageHeader />
      <DetailPageFace />
      <DetailPageBody />
      <HomePageFooter />
    </div>
  )
}