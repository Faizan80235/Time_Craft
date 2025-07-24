import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(state => state.addtocart);

  return (
    <div className="container py-4">
      <h2 className="mb-4">
        <i className="bi bi-cart3 me-2"></i> {/* Bootstrap cart icon */}
        Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <div className="list-group">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center">
                <img
                  src={item.image_url}
                  alt={item.Product_name}
                  className="img-thumbnail me-3"
                  style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                />
                <div>
                  <h5 className="mb-1">{item.Product_name}</h5>
                  <p className="mb-1 text-muted small">{item.Description}</p>
                  <p className="mb-1 fst-italic text-secondary">{item.overview}</p>
                  <small className="text-primary fw-semibold">Price: ${(item.price ?? 0).toFixed(2)}</small>
                </div>
              </div>

              <div className="d-flex flex-column align-items-end">
                <span className="badge bg-primary rounded-pill mb-2">Qty: {item.quantity}</span>
                <span className="fw-bold fs-5">${((item.price ?? 0) * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
