import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"
import film from "../../components/listItem/teaserAladdin.mp4"

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video className="video" 
            autoPlay 
            progress 
            controls 
            src={film} type="video/mp4" />
        </div>
    )
}
