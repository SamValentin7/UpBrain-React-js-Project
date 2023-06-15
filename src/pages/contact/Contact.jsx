import Navbar from '../../common/navbar/Navbar'
import Footer from '../../common/footer/Footer'
import './contact.css'
import './comments/comments.css'
import ContactTools from './ContactTools'
import Comments from "./comments/Comments";
import CommentSection from './Comment Section/CommentSection'


const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="contact-us ">
                <h2 className="contact-title">Let's Stay Connected: Contact Us Today!</h2>
                <ContactTools />
                {/* <Comments currentUserId="1" /> */}
                <CommentSection />


            </div>
            <Footer />
        </div>
    )
}

export default Contact