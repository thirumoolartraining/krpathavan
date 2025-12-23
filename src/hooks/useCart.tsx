import { useCartContext, CartItem } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

export const useCart = () => {
  const { state, dispatch } = useCartContext();
  const { toast } = useToast();

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const removeFromCart = (productId: string) => {
    const item = state.items.find(item => item.id === productId);
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
    
    if (item) {
      toast({
        title: "Removed from Cart",
        description: `${item.name} has been removed from your cart.`,
      });
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const openCart = () => {
    dispatch({ type: 'SET_CART_OPEN', payload: true });
  };

  const closeCart = () => {
    dispatch({ type: 'SET_CART_OPEN', payload: false });
  };

  const getCartTotal = () => {
    return state.total;
  };

  const getCartItemCount = () => {
    return state.itemCount;
  };

  const isInCart = (productId: string) => {
    return state.items.some(item => item.id === productId);
  };

  const getItemQuantity = (productId: string) => {
    const item = state.items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  const proceedToCheckout = () => {
    if (state.items.length === 0) {
      toast({
        title: "Empty Cart",
        description: "Please add some items to your cart first.",
        variant: "destructive"
      });
      return false;
    }
    
    // Navigate to the checkout page
    window.location.href = '/checkout';
    return true;
  };

  return {
    items: state.items,
    total: state.total,
    itemCount: state.itemCount,
    isCartOpen: state.isOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    getCartTotal,
    getCartItemCount,
    isInCart,
    getItemQuantity,
    proceedToCheckout,
  };
};