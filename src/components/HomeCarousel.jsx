function HomeCarousel() {
    return (
        <div className="container-fluid"><div class="row banner mb-3 pb-3">

            <div id="carouselExampleControls" class="carousel slide px-0" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active banner-img">
                        <img src="https://preview.hasthemes.com/jadusona-v2/assets/images/hero/hero-1.jpg" class="d-block w-100"
                            alt="..." />
                    </div>
                    <div class="carousel-item banner-img">
                        <img src="https://preview.hasthemes.com/jadusona-v2/assets/images/hero/hero-2.jpg" class="d-block w-100"
                            alt="..." />
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
            <div class="info">
                <h2>Get 10% off </h2>
                <h2>Latest baby product</h2>

                <a href="#popular-section" class="shop">Shop now</a>
            </div></div>
        /* <!--------------------------- banner ends here ---------------------------------> */
    )
}

export default HomeCarousel