import PolicyLayout from '@/components/PolicyLayout';

const PrivacyPolicy = () => {
  return (
    <PolicyLayout 
      title="Privacy Policy"
      description="Your Privacy is Our Priority"
    >
        
        <p className="mb-6">
          At K R Pathavan Trading Company, we value the trust you place in us when choosing our premium teas, nuts, and dry fruits. 
          Protecting your personal information is as important to us as ensuring the quality and authenticity of the products we deliver.
          This Privacy Policy explains what information we collect, how we use it, how we safeguard it, and your rights when engaging 
          with our business—whether in-store, wholesale, or online.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p className="mb-4">When you interact with us, we may collect:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Full Name</li>
          <li>Email Address & Phone Number</li>
          <li>Billing & Shipping Address</li>
          <li>Order History & Purchase Preferences</li>
          <li>Payment Details (via secure third-party gateways; we do not store card details)</li>
          <li>Business/Wholesale Information (for B2B clients)</li>
          <li>Device & Browser Data (for website use and analytics)</li>
          <li>Cookies & Tracking Data (for performance improvement)</li>
        </ul>
        <p className="mb-8">We collect only the information necessary to provide you with safe, reliable, and efficient service.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why We Collect Your Information</h2>
        <p className="mb-4">We use your data solely for legitimate business purposes, including:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Processing and fulfilling orders</li>
          <li>Managing deliveries and providing shipment updates</li>
          <li>Offering customer service and support</li>
          <li>Sending optional promotional updates (only if you opt in)</li>
          <li>Improving our product offerings and customer experience</li>
          <li>Wholesale/B2B account management</li>
          <li>Meeting legal, regulatory, and tax compliance requirements</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Protect Your Information</h2>
        <p className="mb-4">We implement strict measures to ensure your data is secure and confidential:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>SSL Encryption for all online interactions</li>
          <li>Secure Payment Processing via PCI-compliant gateways</li>
          <li>Firewall & Access Controls on servers and systems</li>
          <li>Restricted Staff Access to sensitive data</li>
          <li>Regular Reviews of security and privacy practices</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights & Choices</h2>
        <p className="mb-4">As our valued customer, you have the right to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Access the personal data we hold about you</li>
          <li>Request corrections or updates to your information</li>
          <li>Ask for deletion of your data (subject to legal requirements)</li>
          <li>Withdraw consent from promotional communication at any time</li>
          <li>Raise concerns about data misuse or handling</li>
        </ul>
        <p className="mb-8">We aim to process all verified requests within 30 days.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Sharing</h2>
        <p className="mb-8">
          We do not sell or rent your personal information. Data may be shared only with:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Logistics partners (for delivery of orders)</li>
          <li>Payment processors (for secure transactions)</li>
          <li>Government or regulatory authorities (when legally required)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Policy Updates</h2>
        <p className="mb-8">
          This Privacy Policy may be updated periodically to reflect changes in law, technology, or business practices. 
          Updates will always be posted on our website with a revised "Last Updated" date.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">For questions, privacy requests, or concerns, please contact:</p>
        <p className="mb-2 font-medium">K R Pathavan Trading Company</p>
        <p className="mb-1">📍 No 148/85B, Viruthachalam Road, Jayankondam, Ariyalur, Tamil Nadu – 621802</p>
        <p className="mb-1">📞 Phone: +91 93604 28764</p>
        <p className="mb-1">📧 Email: info@krpathavan.com</p>
        <p className="mb-8">🌐 Website: krpathavan.com</p>

        <div className="pt-8 mt-8 border-t border-gray-200">
          <p className="text-sm text-muted-foreground">Last Updated: August 2025</p>
          <p className="text-sm text-muted-foreground">© 2025 K R Pathavan Trading Company. All Rights Reserved.</p>
        </div>
    </PolicyLayout>
  );
};

export default PrivacyPolicy;
