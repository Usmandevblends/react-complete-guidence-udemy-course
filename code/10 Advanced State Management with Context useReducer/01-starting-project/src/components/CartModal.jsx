import { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';
import { useState } from 'react';

const CartModal = forwardRef(function Modal(
  { cartItems, onUpdateCartItemQuantity, title, actions },
  ref
) {
  const dialog = useRef();

  // Track if modal is open
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
        setIsOpen(true);
      },
      close: () => {
        dialog.current.close();
        setIsOpen(false);
      }
    };
  });

  // This will run whenever isOpen changes
  useEffect(() => {
    if (isOpen) {
      alert('Modal is now open!');
      // You could also do other side effects here
    }
  }, []);

  return createPortal(
    <dialog 
      id="modal" 
      ref={dialog}
      onClose={() => setIsOpen(false)} // Track when modal closes
    >
      <h2>{title}</h2>
      <Cart items={cartItems} onUpdateItemQuantity={onUpdateCartItemQuantity} />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default CartModal;