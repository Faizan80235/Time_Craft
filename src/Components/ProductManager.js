import React, { useState } from "react";
import { useSelector } from "react-redux";
export default function ProductManager() {
  const products = useSelector((state) => state.DashData);
//    const [addToCollection]=useAddToCollectionMutation();
   
  // Extract unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  // State for form fields
  const [selectedProduct, setSelectedProduct] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState("");

  const handleProductChange = (e) => {
    const productName = e.target.value;
    setSelectedProduct(productName);

    const selected = products.find((p) => p.name === productName);
    if (selected) {
      setPrice(selected.price);
      setCategory(selected.category || "");
      setImage(selected.image || "");
    } else {
      setPrice("");
      setCategory("");
      setImage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted:
Product: ${selectedProduct}
Price: $${price}
Category: ${category}
Color: ${color}
Quantity: ${quantity}
Image: ${image}`);
  };

  if (!products || products.length === 0) {
    return <div className="text-center mt-5">No products found.</div>;
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h3 className="text-center text-primary mb-4">Configure a Product</h3>
      <form onSubmit={handleSubmit} className="card shadow-sm p-4 bg-white rounded">
        
        {/* Product Name Dropdown */}
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <select
            className="form-select"
            value={selectedProduct}
            onChange={handleProductChange}
            required
          >
            <option value="">Select a product</option>
            {products.map((p, i) => (
              <option key={i} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        {/* Price (Read-Only) */}
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="text"
            className="form-control"
            value={price}
            readOnly
          />
        </div>


        {/* Color Dropdown */}
      


        {/* Image Dropdown */}
        <div className="mb-3">
          <label className="form-label">Image</label>
          <select
            className="form-select"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          >
            <option value="">Select image</option>
            {products.map((p, i) => (
              <option key={i} value={p.image}>
                {p.image}
              </option>
            ))}
          </select>
        </div>

        {/* Image Preview */}
        {image && (
          <div className="text-center mb-3">
            <img src={image} alt="Selected" style={{ maxWidth: "100%" }} />
          </div>
        )}

        <button type="submit" className="btn btn-success w-100">
          Submit
        </button>
      </form>
    </div>
  );
}
