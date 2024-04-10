import React from 'react'
import './Billing.css'
import tick from '../Assets/tick.svg'

const MonthlyBilling = () => {
  return (
    <div className='billing monthly'>
      <div className="billing-card essentials">
        <div className="billing-head">
          <p className='billing-plan'>Essentials</p>
          <h1 className='billing-pricing'>$97</h1>
          <p className='billing-content'>Software Included</p>
        </div>
        <div className="billing-list">
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Business Setup & Integration</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>CRM & Pipeline</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Website Builder</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Course Builder</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Automation Builder</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>All-In-One Conversations</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Task Management</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Calendar Management</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>24/7 Live Chat & Zoom Support  </p>
          </div>
        </div>
        <button>Get Started</button>
      </div>
      <div className="billing-card professional">
        <div className="billing-head">
          <p className='billing-plan'>Professional</p>
          <h1 className='billing-pricing'>$297</h1>
          <p className='billing-content'>Software, AI & Automations Included</p>
        </div>
        <div className="billing-list">
          <div className="billing-item">
            <img src={tick} alt="" />
            <p><b>Everything in Essentials +</b></p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Ai-Booking Chatbot</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Ai Integration for Automations</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Automatic SEO Optimization Tool</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>WhatsApp Integration</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Website Integration & Hosting</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Sales & Marketing Automations</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Lead Generation Automations</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Affiliate Program & Management</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Memberships & Community Builder</p>
          </div>
        </div>
        <button>Get Started</button>
      </div>
      <div className="billing-card custom">
        <div className="billing-head">
          <p className='billing-plan'>Enterprise</p>
          <h1 className='billing-pricing'>Custom</h1>
          <p className='billing-content'>Personalized Solutions</p>
        </div>
        <div className="billing-list">
          <div className="billing-item">
            <img src={tick} alt="" />
            <p><b>Everything in Professional +</b></p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Custom Lead Follow Up</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Custom Sales Process</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Custom Marketing Automation</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Custom Task Delegation</p>
          </div>
          <div className="billing-item">
            <img src={tick} alt="" />
            <p>Optimization Calls After Setup</p>
          </div>
        </div>
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default MonthlyBilling