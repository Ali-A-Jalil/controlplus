import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Tab from "../../components/Tab"; // Tab component for reusability
import CustomerProfiles from "./CustomerProfiles";
import CustomerInquiries from "./CustomerInquiries";
import CustomerSupport from "./CustomerSupport";
import SpecialOffers from "./SpecialOffers";
import CustomerFeedback from "./CustomerFeedback";
import AddCustomer from "./AddCustomerWithInvoice";

const tabs = [
  { label: "Customer Profiles", component: CustomerProfiles },
  { label: "Customer Inquiries", component: CustomerInquiries },
  { label: "Customer Support", component: CustomerSupport },
  { label: "Special Offers", component: SpecialOffers },
  { label: "Customer Feedback", component: CustomerFeedback },
  { label: "Add Customer", component: AddCustomer },
];

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [customers, setCustomers] = useState([
    { id: 1, name: "Ali", email: "ali@example.com", phone: "123456789" },
    { id: 2, name: "Sara", email: "sara@example.com", phone: "987654321" },
  ]);
  const [inquiries, setInquiries] = useState([
    { id: 1, customer: "Ali", message: "Need assistance with my account." },
    { id: 2, customer: "Sara", message: "How can I reset my password?" },
  ]);

  const handleAddCustomer = (customer) => {
    setCustomers([...customers, customer]);
  };

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
      <h1 className="text-2xl font-bold mb-6">Customer Management Dashboard</h1>

      {/* Tabs Navigation */}
      <Tab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Animated Active Component */}
      <CSSTransition in={true} timeout={300} classNames="fade" unmountOnExit>
        <div className="mt-6 bg-white p-6 rounded shadow">
          {activeTab === 5 ? (
            <AddCustomer onAddCustomer={handleAddCustomer} />
          ) : activeTab === 1 ? (
            <CustomerInquiries
              inquiries={inquiries}
              onRespond={handleRespondInquiry}
            />
          ) : (
            <ActiveComponent
              customers={customers}
              inquiries={inquiries}
              onRespond={handleRespondInquiry}
            />
          )}
        </div>
      </CSSTransition>
    </div>
  );
};

export default CustomerDashboard;
