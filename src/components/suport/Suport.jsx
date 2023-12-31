import './suport.css'

const Suport = () => {

    return (
        <div className="suport-container">
            <form className="payment--form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="88KT54PZ7X794" />
                <table className="payment-options-container">
                    <label htmlFor="payment-options">Choose your monthly payment option:</label>
                    <tr>
                        <td><input type="hidden" name="on0" value="Payment options" />Payment options</td>
                    </tr>
                    <tr>
                        <td><select name="os0">
                            <option value="Option 1">Option 1 : $5.00 USD - monthly</option>
                            <option value="Option 2">Option 2 : $2.00 USD - monthly</option>
                            <option value="Option 3">Option 3 : $1.00 USD - monthly</option>
                        </select></td>
                    </tr>
                </table>
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </div>
    )
}
export default Suport
