const FormInvoice = () => {
    return ( 
        <form>
            <input type="number"  placeholder="amount" name="amount"/>
            <select>
                <option value="sending">Sending</option>
                <option value="cancel">Cancel</option>
                <option value="close">close</option>
            </select>
            <input type="submit" />
        </form>
     );
}
 
export default FormInvoice;