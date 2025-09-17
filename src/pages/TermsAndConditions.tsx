import PolicyLayout from '@/components/PolicyLayout';

const TermsAndConditions = () => {
  return (
    <PolicyLayout 
      title="Terms & Conditions"
      description="Please read these terms carefully before using our services"
    >
      <p className="mb-6">
        Welcome to K R Pathavan Trading Company. By accessing our website, making a purchase, or engaging with our services, 
        you agree to comply with and be bound by the following Terms & Conditions. These terms govern all orders, sales, 
        and interactions with K R Pathavan Trading Company. If you do not agree with these terms, we request you to discontinue 
        using our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. General Use of Website & Services</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>By shopping with us, you confirm that you are at least 18 years old, or using our services under the supervision of a parent/guardian.</li>
        <li>You agree to provide accurate and complete details when placing orders.</li>
        <li>Any misuse, fraudulent activity, or violation of these terms may result in suspension of service.</li>
      </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Products & Pricing</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>We specialize in premium teas, nuts, and dry fruits.</li>
          <li>All product descriptions are provided as accurately as possible, but minor variations in color, taste, or texture may occur since products are natural and seasonal.</li>
          <li>Prices are listed in Indian Rupees (INR ₹) and may change due to seasonal availability, market fluctuations, or business policy.</li>
          <li>We reserve the right to correct any errors in product listings, descriptions, or pricing, and may cancel affected orders with refunds where applicable.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Orders & Payments</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Orders are confirmed only after successful payment.</li>
          <li>We accept UPI, debit/credit cards, net banking, and wallets via secure, PCI-compliant gateways.</li>
          <li>K R Pathavan Trading Company does not store your payment details.</li>
          <li>In the event of duplicate charges or transaction errors, customers should contact our support team immediately.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Shipping & Delivery</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Orders are shipped within India via trusted courier/logistics partners.</li>
          <li>Delivery timelines vary based on location and will be shared at checkout.</li>
          <li>Tracking details are provided once the order is dispatched.</li>
          <li>We are not liable for courier delays, force majeure events, or customer unavailability during delivery.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cancellations & Returns</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Orders may be cancelled within 2 hours of purchase, provided they have not been packed or shipped.</li>
          <li>Returns are accepted only in cases of:</li>
          <ul className="list-[circle] pl-6 mt-2 space-y-1">
            <li>Damaged or tampered products on delivery</li>
            <li>Wrong items shipped</li>
            <li>Verified quality concerns</li>
          </ul>
          <li>For details, please refer to our Cancellation & Refund Policy.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Customer Responsibilities</h2>
        <p className="mb-2">By engaging with us, you agree not to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Provide false or incomplete order/delivery details</li>
          <li>Resell our products without prior written approval</li>
          <li>Misuse our brand name or content</li>
          <li>Raise fraudulent claims or chargebacks</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Intellectual Property</h2>
        <p className="mb-6">
          All product images, content, designs, and branding are the intellectual property of K R Pathavan Trading Company. 
          Unauthorized use, reproduction, or distribution is strictly prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
        <p className="mb-2">K R Pathavan Trading Company shall not be liable for:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Natural variations in taste, texture, or appearance of products</li>
          <li>Delays caused by courier or logistics providers</li>
          <li>Indirect or incidental damages arising from product use beyond its intended purpose</li>
        </ul>
        <p className="mb-6">Our liability is limited strictly to the value of the product purchased.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law & Jurisdiction</h2>
        <p className="mb-6">
          These Terms & Conditions are governed by the laws of India. Any disputes shall fall under the jurisdiction of the courts in Ariyalur, Tamil Nadu.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
        <p className="mb-2">For assistance or queries, please contact:</p>
        <p className="mb-1 font-medium">K R Pathavan Trading Company</p>
        <p className="mb-1">📍 43/A, ULKOTTAI ROAD, PAAPANKULAM, JAYANKONDAM, ARIYALUR, TAMIL NADU - 621802</p>
        <p className="mb-1">📞 Phone: +91 93604 28764</p>
        <p className="mb-1">📧 Emails: info@krpathavan.com<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;krpathavantradingcompany@gmail.com</p>
        <p className="mb-8">🌐 Website: krpathavan.com</p>
    </PolicyLayout>
  );
};

export default TermsAndConditions;
