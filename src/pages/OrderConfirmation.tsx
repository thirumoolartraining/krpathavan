import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Home, Package, Truck, Clock } from 'lucide-react';

type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type ShippingAddress = {
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
};

type OrderConfirmationProps = {
  orderId: string;
  items: OrderItem[];
  total: number;
  shippingAddress: ShippingAddress;
};

export const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Default values in case of direct navigation
  const { 
    orderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`, 
    items = [], 
    total = 0, 
    shippingAddress = {
      name: 'John Doe',
      address: '123 Main St',
      city: 'Ariyalur',
      state: 'Tamil Nadu',
      pincode: '621704',
      phone: '+91 9876543210',
      email: 'customer@example.com'
    } 
  } = (location.state as OrderConfirmationProps) || {};
  
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const tax = Math.round(subtotal * 0.18); // 18% GST
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-green-100 p-4">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-muted-foreground mb-8">
          Thank you for your order. We've received it and we're getting it ready to be shipped.
        </p>
        
        <div className="bg-muted/50 rounded-lg p-6 mb-8">
          <p className="text-sm text-muted-foreground mb-2">Order Number</p>
          <p className="font-mono font-medium text-lg">{orderId || 'N/A'}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Order Received</h3>
              <p className="text-sm text-muted-foreground">We've received your order</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Processing</h3>
              <p className="text-sm text-muted-foreground">We're preparing your order</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-muted p-3 rounded-full mb-3">
                <Truck className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-medium mb-1">On the way</h3>
              <p className="text-sm text-muted-foreground">Your order is on the way</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p>₹{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (18% GST)</span>
                    <span>₹{tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Shipping Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Shipping Address</h4>
                  <p className="text-muted-foreground">
                    {shippingAddress.name || 'N/A'}<br />
                    {shippingAddress.address || 'N/A'}<br />
                    {shippingAddress.city || 'N/A'}, {shippingAddress.state || 'N/A'}<br />
                    {shippingAddress.pincode || 'N/A'}<br />
                    {shippingAddress.phone || 'N/A'}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Contact Information</h4>
                  <p className="text-muted-foreground">
                    {shippingAddress.email || 'N/A'}<br />
                    {shippingAddress.phone || 'N/A'}
                  </p>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-medium mb-2">Need Help?</h4>
                  <p className="text-sm text-muted-foreground">
                    If you have any questions about your order, please contact our customer service at 
                    <a href="mailto:support@krtrading.com" className="text-primary hover:underline ml-1">
                      support@krtrading.com
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            variant="outline" 
            className="w-full sm:w-auto"
            onClick={() => navigate('/')}
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <Button 
            className="w-full sm:w-auto"
            onClick={() => navigate('/orders')} // You'll need to implement this route
          >
            View Order Status
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
