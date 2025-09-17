import PolicyLayout from '@/components/PolicyLayout';

const ShippingPolicy = () => {
  return (
    <PolicyLayout 
      title="Shipping Policy"
      description="Freshness Delivered with Care"
    >
      <p className="mb-6">
        At K R Pathavan Trading Company, we are committed to ensuring that your premium teas, nuts, and dry fruits 
        reach you in perfect condition. This Shipping Policy explains how we process orders, handle packaging, and 
        manage deliveries for both retail and wholesale customers.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Order Processing Time</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Orders are processed within 2–4 business days of payment confirmation.</li>
        <li>Orders placed on Sundays or public holidays will be processed on the next working day.</li>
        <li>Bulk/wholesale orders may require longer preparation time depending on quantity and product availability. Customers will be informed in advance.</li>
      </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping Destinations & Delivery Timelines</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Domestic Shipping (India)</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Metro Cities:</strong> 3–6 business days after dispatch</li>
          <li><strong>Non-Metro Cities & Semi-Urban Areas:</strong> 5–10 business days after dispatch</li>
          <li><strong>Remote/Rural Areas:</strong> 7–12 business days after dispatch</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">International Shipping</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>International delivery may be available for wholesale/B2B orders.</li>
          <li>Timelines depend on the destination country, customs clearance, and shipping partner schedules.</li>
          <li>Customers will be informed of estimated timelines during order confirmation.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping Charges</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Charges are calculated based on order weight, packaging type, and delivery location.</li>
          <li>Shipping costs will be displayed clearly at checkout before payment.</li>
          <li>Free shipping offers may apply during promotions or for orders above a certain value.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Packaging & Handling</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Products are packed in airtight, food-grade, tamper-proof packaging to ensure freshness.</li>
          <li>Nuts and dry fruits are sealed to maintain shelf life and avoid contamination.</li>
          <li>Tea is packed in moisture-proof containers to preserve aroma and quality.</li>
          <li>Bulk/wholesale orders are carefully palletized and secured for safe long-distance transit.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Tracking Your Order</h2>
        <p className="mb-2">Once dispatched, customers will receive:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>A tracking ID via SMS/email</li>
          <li>A real-time tracking link to monitor shipment progress</li>
        </ul>
        <p className="mb-6">Please allow 24–48 hours for tracking details to update after dispatch.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Delays & Exceptions</h2>
        <p className="mb-2">While we strive for timely delivery, certain factors may cause delays, including:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Courier or logistics partner disruptions</li>
          <li>Extreme weather conditions</li>
          <li>Regional holidays or strikes</li>
          <li>Customs delays for international orders</li>
        </ul>
        <p className="mb-6">In such cases, our support team will provide updates and assistance.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Need Help?</h2>
        <p className="mb-2">For shipping-related questions or support, please contact:</p>
        <p className="mb-1 font-medium">K R Pathavan Trading Company</p>
        <p className="mb-1">📍 43/A, ULKOTTAI ROAD, PAAPANKULAM, JAYANKONDAM, ARIYALUR, TAMIL NADU - 621802</p>
        <p className="mb-1">📞 Phone: +91 93604 28764</p>
        <p className="mb-1">📧 Emails: info@krpathavan.com<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;krpathavantradingcompany@gmail.com</p>
        <p className="mb-8">🌐 Website: krpathavan.com</p>
    </PolicyLayout>
  );
};

export default ShippingPolicy;
