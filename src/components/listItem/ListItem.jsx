import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"
import { useState } from "react"
import Trailer from "./teaserAladdin.mp4"


export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false)
  // const trailer = "src\components\teaserAladdin.mp4"
  return (
    <div className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="http://assets.kompasiana.com/items/album/2020/04/12/images-5-5e928a96097f367c85784d12.jpeg"
        alt=""
      />
      {isHovered && (
        <>
          <video src={Trailer} type="video/mp4" autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span> 1 hour 41 mins</span>
              <span className="limit"> +12 </span>
              <span> 2019 </span>
            </div>
            <div className="desc">
              Aladdin is the son of Mustapha, a poor tailor. The young lad is lazy and carefree,
              whiling the time away with other boys like himself
              that he dies . Despite that, Aladdin does not change his ways.
            </div>
            <div className="genre"> Fantasy </div>
          </div>
        </>
      )}
    </div>
  )
}
