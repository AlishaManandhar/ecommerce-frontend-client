function DataSpecs(props) {
    const { warranty, material, category, gender } = props
    return (
        <div className="data-specs">
            <h4>Data Specs</h4>
            <div className="table-responsive mt-3">

                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <th>Warranty</th>
                            <td>{warranty}</td>
                        </tr>
                        <tr >
                            <th>Material</th>
                            <td>{material}</td>
                        </tr>
                        <tr>
                            <th>Category</th>
                            <td>{category}</td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td>{gender}</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>

    )
}
export default DataSpecs