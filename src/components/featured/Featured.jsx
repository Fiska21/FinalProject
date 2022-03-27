import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"
import React from "react"

export default function Featured( {type}) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span> {type === "movies" ? "Movies" : "Series" } </span>
          <select name="genre"  id= "genre">
            <option> Genre </option>       
            <option value="adventure"> Adventure </option>
            <option value="comedy"> Comedy </option>
            <option value="horror"> Horror </option>
            <option value="fantasy"> Fantasy </option>
            <option value="drama" > Drama </option>
            <option value="thriller" > Thriller </option>          
          </select>
        </div>
      )}
      <img
        src="https://www.destinationsforteens.com/wp-content/uploads/teen-smartphone-use-1200x600.jpeg "
        alt=""
      />
      <div className="info">
        <img src="https://img.okezone.com/content/2019/05/22/206/2059156/movie-review-aladdin-tak-seburuk-prediksi-awal-yL6F4Fd2rj.jpg" alt=""
        />
        <span className="desc">
        Aladdin is the son of Mustapha, a poor tailor. The young lad is lazy and carefree, 
        whiling the time away with other boys like himself 
        that he dies . Despite that, Aladdin does not change his ways.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span> Play </span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span> Info </span>
          </button>
        </div>
      </div>
    </div>
  )
}
