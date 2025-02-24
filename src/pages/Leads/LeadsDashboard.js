import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Tab from "../../components/Tab"; // Tab component for reusability
import LeadProfiles from "./LeadProfiles";
import LeadInquiries from "./LeadInquiries";
import LeadSupport from "./LeadSupport";
import SpecialOffers from "./SpecialOffers";
import LeadFeedback from "./LeadFeedback";
import AddLead from "./AddLead";

const tabs = [
  { label: "Lead Profiles", component: LeadProfiles },
  { label: "Lead Inquiries", component: LeadInquiries },
  { label: "Lead Support", component: LeadSupport },
  { label: "Special Offers", component: SpecialOffers },
  { label: "Lead Feedback", component: LeadFeedback },
  { label: "Add Lead", component: AddLead },
];

const LeadsDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [leads, setLeads] = useState([]);
  const [inquiries, setInquiries] = useState([]);

  // Fetch leads when component mounts
  useEffect(() => {
    fetch("/api/leads")
      .then((response) => response.json())
      .then((data) => setLeads(data));
  }, []);

  // Fetch inquiries when component mounts
  useEffect(() => {
    fetch("/api/leads/inquiries")
      .then((response) => response.json())
      .then((data) => setInquiries(data));
  }, []);

  // Function to add a new lead
  const handleNewLead = (newLead) => {
    setLeads((prevLeads) => [...prevLeads, newLead]);
  };

  // Function to respond to an inquiry
  const handleRespondInquiry = (id, response) => {
    setInquiries((prevInquiries) =>
      prevInquiries.map((inquiry) =>
        inquiry.id === id ? { ...inquiry, response } : inquiry
      )
    );
  };

  const ActiveComponent = tabs[activeTab]?.component;

  return (
    <div className="bg-gray-100 p-6 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Leads Management Dashboard</h1>

      {/* Tabs Navigation */}
      <Tab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Animated Active Component */}
      <CSSTransition in={true} timeout={300} classNames="fade" unmountOnExit>
        <div className="mt-6 bg-white p-6 rounded shadow">
          {activeTab === 5 ? (
            <AddLead onLeadAdded={handleNewLead} />
          ) : activeTab === 1 ? (
            <LeadInquiries
              inquiries={inquiries}
              onRespond={handleRespondInquiry}
            />
          ) : (
            <ActiveComponent
              leads={leads}
              inquiries={inquiries}
              onRespond={handleRespondInquiry}
            />
          )}
        </div>
      </CSSTransition>
    </div>
  );
};

export default LeadsDashboard;
