import React from "react";
import { useCart } from "@/hooks/useCart";
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Minus, Plus, Trash2, ShoppingCart, CreditCard } from "lucide-react";

export const CartDrawer = () => {
  const { 
    items, 
    total, 
    itemCount, 
    isCartOpen, 
    closeCart, 
    updateQuantity, 
    removeFromCart, 
    clearCart,
    proceedToCheckout 
  } = useCart();

  if (itemCount === 0 && isCartOpen) {
    return (
      <Sheet open={isCartOpen} onOpenChange={closeCart}>
        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Your Cart
            </SheetTitle>
            <SheetDescription>
              Your shopping cart is empty
            </SheetDescription>
          </SheetHeader>
          
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">No items in your cart yet</p>
            <Button onClick={closeCart} className="bg-tea-green hover:bg-tea-green/90">
              Continue Shopping
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isCartOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Your Cart
            <Badge variant="secondary" className="ml-auto">
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </Badge>
          </SheetTitle>
          <SheetDescription>
            Review your items and proceed to checkout
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="flex-1 -mx-6 px-6">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 py-4">
                <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image || '/placeholder.svg'}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-sm">
                      {item.originalPrice && (
                        <span className="text-muted-foreground line-through mr-2">
                          ₹{item.originalPrice}
                        </span>
                      )}
                      <span className="font-medium">₹{item.price}</span>
                    </div>
                    <div className="text-sm font-medium">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="space-y-4 pt-4 border-t">
          <div className="flex justify-between text-base font-medium">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
          
          <div className="space-y-2">
            <Button 
              onClick={proceedToCheckout}
              className="w-full bg-primary hover:bg-primary/90"
              size="lg"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Proceed to Checkout
            </Button>
            
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="outline" 
                onClick={closeCart}
                size="sm"
              >
                Continue Shopping
              </Button>
              <Button 
                variant="outline" 
                onClick={clearCart}
                size="sm"
                className="text-destructive hover:text-destructive"
              >
                Clear Cart
              </Button>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground text-center">
            Free delivery available for orders above ₹500. Secure checkout powered by Razorpay.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};