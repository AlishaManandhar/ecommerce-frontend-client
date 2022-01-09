import OwlCarousel from 'react-owl-carousel';
function RenderProductImage(props)
{
    const {image, images, handleImageChange} = props
    return (
        <>
        <div className="frontImage" style={{ height: "500px" }}>
                                <img src={`http://localhost:5000/${image}`} alt={image} className="product-img" />
                            </div>
                            <div className="images mt-2">

                                <OwlCarousel className="owl-theme" margin={10} loop responsive={{
                                    0: {
                                        items: 1
                                    },
                                    600: {
                                        items: 3
                                    },
                                    1000: {
                                        items: 4
                                    }
                                }}>

                                    {images.map((el, i) => {

                                        return (
                                            <div className="item" key={i}>
                                                <img src={`http://localhost:5000/${el}`} className="rounded" alt="Product Image" onClick={() => handleImageChange(el)} />
                                            </div>
                                        )
                                    })}

                                </OwlCarousel>

                            </div>
        </>
    )
}

export default RenderProductImage