function Ratings({ count }) {
    const full = Math.floor(count)
    let half;
    if (full === count) {
        half = 5 - full
    }
    else {
        half = 5 - full - 1
    }
    return (<div className="ratings">
        {Array.from({ length: full }, (v, i) => {
            return <i className="bi bi-star-fill"></i>
        })}
        {count !== full && <i className="bi bi-star-half"></i>}
        {half !== 0 && Array.from({ length: half }, (v, i) => {
            return <i className="bi bi-star"></i>
        })}



    </div>)
}

export default Ratings