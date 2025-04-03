import emailjs from "emailjs-com";
import { useState, useRef } from "react";

export default function Contact() {
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        if (formRef.current) {
            // Create a new FormData object to manipulate form data before sending
            const formDataObject = new FormData(formRef.current);
            
            // Modify the message field to include name and email
            const modifiedMessage = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
            formDataObject.set("message", modifiedMessage); 

            emailjs
                .sendForm(
                    "service_iuzw96o",  
                    "template_ptgh57t",  
                    formRef.current,  
                    "CMevXQW5LnhTaXrOx"
                )
                .then(() => {
                    setStatus("✅ Message sent successfully!");
                    setFormData({ name: '', email: '', message: '' }); // Clear form after submission
                })
                .catch(() => setStatus("❌ Error sending message. Please try again."));
        }
    };

    return (
        <main className="min-h-screen bg-gray-900 text-white py-12 px-6">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg mb-8">Have questions, feedback, or suggestions? We'd love to hear from you!</p>

                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg max-w-md mx-auto">
                    <form 
                        ref={formRef} 
                        onSubmit={sendEmail} 
                        className="flex flex-col gap-4"
                    >
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            value={formData.name}
                            onChange={(event) => setFormData({ ...formData, name: event.target.value })} 
                            className="p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            name="user_name"
                            required
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            value={formData.email}  
                            onChange={(event) => setFormData({ ...formData, email: event.target.value })} 
                            className="p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            name="user_email"
                            required
                        />
                        <textarea 
                            placeholder="Your Message" 
                            value={formData.message}
                            onChange={(event) => setFormData({ ...formData, message: event.target.value })} 
                            className="p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            name="message"
                            required
                        ></textarea>
                        <button 
                            type="submit" 
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-all"
                        >
                            Submit
                        </button>
                        {status && <p className={`mt-4 text-center ${status.includes("Error") ? "text-red-500" : "text-green-500"}`}>{status}</p>}
                    </form>
                </div>

                <div className="mt-6 text-sm">
                    For any inquiries, please contact us at 
                    <a 
                        href="mailto:david.chesa.it@gmail.com" 
                        className="text-blue-500 hover:text-blue-700 ml-1"
                    >david.chesa.it@gmail.com</a>
                </div>
            </div>
        </main>
    );
}
