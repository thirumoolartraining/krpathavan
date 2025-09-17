import PolicyLayout from '@/components/PolicyLayout';

const CancellationRefundPolicy = () => {
  return (
    <PolicyLayout 
      title="Cancellation & Refund Policy"
      description="Simple, Fair & Transparent"
    >
      <p className="mb-6">
        At K R Pathavan Trading Company, we take pride in providing high-quality teas, nuts, and dry fruits sourced with care. 
        While we strive to ensure that every order reaches you fresh and intact, we understand that cancellations or issues may 
        occasionally arise. This policy outlines how we handle cancellations, returns, and refunds.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Order Cancellations</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Cancellation Window:</strong> Orders may be cancelled within 2 hours of purchase, provided they have not yet been packed or dispatched.</li>
        <li>Once an order is processed or handed over to the courier, cancellations are no longer possible due to the nature of food products.</li>
        <li>Customers must share their Order ID when requesting cancellation.</li>
      </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Returns & Replacements</h2>
        <p className="mb-2">Returns are accepted only in the following cases:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Products are damaged or tampered during delivery.</li>
          <li>The wrong product was delivered.</li>
          <li>There is a verified quality or packaging defect.</li>
        </ul>
        <p className="font-medium mb-2">Conditions:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Return requests must be raised within 48 hours of delivery.</li>
          <li>The product must remain sealed, unused, and in original packaging.</li>
          <li>Customers must share clear photos/videos of the issue for verification.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Non-Returnable Items</h2>
        <p className="mb-2">For reasons of food safety and hygiene, we cannot accept returns for:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Opened or partially consumed tea, nuts, or dry fruits.</li>
          <li>Products damaged due to improper storage after delivery.</li>
          <li>Items returned without authorization.</li>
          <li>Bulk/wholesale orders, unless a verified defect is confirmed.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Refunds</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Once a claim is verified and approved, refunds are initiated within 3–5 business days.</li>
          <li>Refunds are processed via the original payment method (UPI, card, bank transfer, etc.).</li>
          <li>Depending on the payment provider, refunds may take 5–10 business days to reflect in your account.</li>
          <li>Customers may also choose store credit or product replacement instead of a refund.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Exceptions</h2>
        <p className="mb-2">Refunds and cancellations will not apply in cases where:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Delivery is delayed due to courier or logistics issues beyond our control.</li>
          <li>Incorrect or incomplete delivery details were provided by the customer.</li>
          <li>Natural variations in taste, color, or size occur (as products are natural and seasonal).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Need Help?</h2>
        <p className="mb-2">For cancellation or refund support, please contact:</p>
        <p className="mb-1 font-medium">K R Pathavan Trading Company</p>
        <p className="mb-1">📍 No 148/85B, Viruthachalam Road, Jayankondam, Ariyalur, Tamil Nadu – 621802</p>
        <p className="mb-1">📞 Phone: +91 93604 28764</p>
        <p className="mb-1">📧 Email: info@krpathavan.com</p>
        <p className="mb-8">🌐 Website: krpathavan.com</p>
    </PolicyLayout>
  );
};

export default CancellationRefundPolicy;
