function CartTotal(props) {
    return (
        <div className="table-responsive">
        <table className="table card-total">
            <thead>
                <tr>
                    <th colspan="2"> Cart Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>
                        Subtotals
                    </th>
                    <td className="sub-total">Rs {props.cost}</td>
                </tr>
                <tr>
                    <th>Total</th>
                    <td className="total">{props.cost >=1500 ? props.cost : props.cost + 150}</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}
export default CartTotal