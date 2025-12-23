import { useNavigate } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Loader2, ArrowLeft, CreditCard, MapPin, User, Mail, Phone } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: 'cod' | 'online';
};

export const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'Tamil Nadu',
    pincode: '',
    paymentMethod: 'cod',
  });
  const [activeStep, setActiveStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentMethodChange = (method: 'cod' | 'online') => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: method
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (activeStep === 1) {
      setActiveStep(2);
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would process the payment here
      if (formData.paymentMethod === 'online') {
        // Integrate with Razorpay or other payment gateway
        console.log('Processing online payment...');
      }
      
      // Clear cart and navigate to success page
      clearCart();
      navigate('/order-confirmation', { 
        state: { 
          orderId: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
          items,
          total,
          shippingAddress: formData
        } 
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was an error processing your order. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping for now
  const tax = Math.round(subtotal * 0.18); // 18% GST
  
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Add some items to your cart before proceeding to checkout.</p>
        <Button onClick={() => navigate('/')}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-6" 
        onClick={() => activeStep === 1 ? navigate(-1) : setActiveStep(1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {activeStep === 1 ? 'Back to Cart' : 'Back to Delivery'}
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                {activeStep === 1 ? 'Delivery Information' : 'Payment Method'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {activeStep === 1 ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleInputChange} 
                            className="pl-10"
                            required 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={formData.email} 
                            onChange={handleInputChange}
                            className="pl-10"
                            required 
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="phone" 
                          name="phone" 
                          type="tel" 
                          value={formData.phone} 
                          onChange={handleInputChange}
                          className="pl-10"
                          required 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="address" 
                          name="address" 
                          value={formData.address} 
                          onChange={handleInputChange}
                          className="pl-10"
                          required 
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input 
                          id="city" 
                          name="city" 
                          value={formData.city} 
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input 
                          id="state" 
                          name="state" 
                          value={formData.state} 
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pincode">Pincode</Label>
                        <Input 
                          id="pincode" 
                          name="pincode" 
                          value={formData.pincode} 
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div 
                      className="border rounded-lg p-4 cursor-not-allowed opacity-50 border-muted bg-muted/20"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full border border-muted">
                        </div>
                        <div>
                          <h4 className="font-medium">Online Payment <span className="text-xs text-muted-foreground ml-2">(Temporarily Unavailable)</span></h4>
                        </div>
                        <div className="ml-auto">
                          <CreditCard className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${formData.paymentMethod === 'cod' ? 'border-primary bg-primary/5' : 'border-muted'}`}
                      onClick={() => handlePaymentMethodChange('cod')}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`flex items-center justify-center h-6 w-6 rounded-full border ${formData.paymentMethod === 'cod' ? 'border-primary bg-primary text-primary-foreground' : 'border-muted'}`}>
                          {formData.paymentMethod === 'cod' && (
                            <div className="h-2 w-2 rounded-full bg-current" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium">Cash on Delivery</h4>
                        </div>
                        <div className="ml-auto">
                          <span className="text-sm font-medium">+₹50</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-8">
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : activeStep === 1 ? (
                      'Continue to Payment'
                    ) : (
                      `Pay ₹${(total + (formData.paymentMethod === 'cod' ? 50 : 0)).toLocaleString()}`
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
              </div>
              
              <Separator />
              
              <div className="space-y-2">
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
                {formData.paymentMethod === 'cod' && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">COD Charges</span>
                    <span>₹50</span>
                  </div>
                )}
                
                <Separator />
                
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹{(total + (formData.paymentMethod === 'cod' ? 50 : 0)).toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
