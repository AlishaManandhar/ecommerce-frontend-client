import image1 from "../images/brand-1.png"
import image2 from "../images/brand-2.png"
import image3 from "../images/brand-3.png"
import image4 from "../images/brand-4.png"
import image5 from "../images/brand-5.png"
import image6 from "../images/brand-6.png"

function Brands()
{
    return (
        <div className="container brands">
    <div className="row text-center">
      <div className="col">
        <img src={image1} alt="brand1" />
      </div>
      <div className="col">
      <img src={image2} alt="brand2" />
      </div>
      <div className="col">
      <img src={image3} alt="brand3" />
      </div>
      <div className="col">
      <img src={image4} alt="brand4" />
      </div>
      <div className="col">
      <img src={image5} alt="brand5" />
      </div>
      <div className="col">
      <img src={image6} alt="brand6" />
      </div>
    </div>
  </div>
    )
}

export default Brands