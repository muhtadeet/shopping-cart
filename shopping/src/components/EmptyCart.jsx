
export default function EmptyCart({ openCart }) {
    return (
        <div className="empty-cart">
          <img src="" alt="empty-cart" />
          <p>Your cart is empty</p>
          <button onClick={openCart}>Keep Browsing</button>
        </div>
      );
    }