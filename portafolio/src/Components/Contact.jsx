import { useNavigate } from 'react-router-dom'

let Contact = () =>
{
    let Navigate = useNavigate();//Redirect
    let handleSubmit = () =>
    {
        Navigate("/");
    }
    
    return(
        <>
         <h1>Contact Me</h1>
         <p>Sebastian Velasco Telf 437 607 1036</p>
         <p>Email seguvega@hotmail.com </p>
         <p>Toronto Scarborough</p>
        <form onSubmit={handleSubmit} className='FormContact'>

            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />

            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />

            <label for="contactNumber">Contact Number</label>
            <input type="tel" id="contactNumber" name="contactNumber" required />

            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" required />

            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Submit</button>
        </form>
        </>
    );
}

export default Contact;