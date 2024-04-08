import React from 'react'
import './Features.css'

const Features = () => {
    return (
        <div className='features-container'>
            <div className='features'>
                <div className="features-head">
                    <h1 className='features-title'><span>Everything</span> You Need.</h1>
                    <p>Software that has it all, and then some.</p>
                    <button>GET STARTED</button>
                </div>
                <div className="features-list">
                    <div className="features-content">
                        <h1>Website Builder</h1>
                        <p>Simple to use. Drag & Drop. Thousands of templates to use.</p>
                    </div>
                    <div className="features-content">
                        <h1>Ai-Booking Chatbot</h1>
                        <p>Train your Ai to nurture your leads & book you new appointments.</p>
                    </div>
                    <div className="features-content">
                        <h1>All-In-One Conversations</h1>
                        <p>Text, Email, WhatsApp, Social Media DMs… All in one spot.</p>
                    </div>
                    <div className="features-content">
                        <h1>Marketing Automations</h1>
                        <p>Schedule social media posts & use our 12-month drip campaigns.</p>
                    </div>
                    <div className="features-content">
                        <h1>Nurture Automations</h1>
                        <p>Keep your clients interested with automated follow up.</p>
                    </div>
                    <div className="features-content">
                        <h1>Sales Automations</h1>
                        <p>Automated follow up like you’ve never seen before.</p>
                    </div>
                    <div className="features-content">
                        <h1>Complete Business Setup</h1>
                        <p>1-on-1 Business Setup & Integration Done With You</p>
                    </div>
                    <div className="features-content">
                        <h1>24/7 Live Support</h1>
                        <p>Live Chat & Zoom Support With Our Experts</p>
                    </div>
                </div>
                <div className='banner'>
                    <div className="banner-content">
                        <h1>Collaboration and Sharing</h1>
                        <p>Share responsibilities, collaborate with team members, delegating tasks, leaving notes, and sharing files.</p>
                        <button>GET STARTED</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features