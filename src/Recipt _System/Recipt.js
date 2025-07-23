import React, { useState, useRef, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../Assest/image/WhatsApp Image 2025-07-04 at 4.25.26 PM.jpeg"
import { Link } from 'react-router-dom';
import {
  FaClipboardList,
  FaFileInvoice,
  FaHome,
  FaUser,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRegClock,
} from 'react-icons/fa';

const Recipt = () => {
  const [data, setData] = useState({
    customerName: '',
    watchModel: '',
    quantity: 1,
    price: '',
    phone: '0318678900',
    address: 'Johat Town, Islamabad',
    orderId: uuidv4().slice(0, 8).toUpperCase(),
    date: new Date().toLocaleString(),
  });

  const [submitted, setSubmitted] = useState(false);
  const [receipts, setReceipts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReceipts, setFilteredReceipts] = useState([]);
  const [activeSection, setActiveSection] = useState('form');
  const receiptRef = useRef();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReceipt = {
      ...data,
      orderId: uuidv4().slice(0, 8).toUpperCase(),
      date: new Date().toLocaleString(),
    };
    setReceipts((prev) => [...prev, newReceipt]);
    setData(newReceipt);
    setSubmitted(true);
    setActiveSection('receipt'); // Show receipt immediately
  };

  const downloadPDF = () => {
    const opt = {
      margin: 0.2,
      filename: `Receipt_${data.orderId}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' },
    };
    html2pdf().set(opt).from(receiptRef.current).save();
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = receipts.filter(
      (r) =>
        r.customerName.toLowerCase().includes(term) ||
        r.phone.toLowerCase().includes(term)
    );
    setFilteredReceipts(filtered);
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <aside
        className="bg-dark text-white d-flex flex-column p-3 shadow-sm"
        style={{ width: '250px' }}
      >
        <div className="text-center mb-4">
          <img
            src={image}
            alt="Profile"
            className="rounded-circle mb-2"
            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
          />

          <h5>Faizan Ali</h5>
        </div>

        <nav className="nav flex-column gap-2">
          <button
            style={{ textDecoration: 'none' }}
            className={`btn btn-link text-white text-start d-flex align-items-center ${
              activeSection === 'form' ? 'fw-bold' : ''
            }`}
            onClick={() => setActiveSection('form')}
          >
            <FaHome className="me-2" /> Create Receipt
          </button>

          {submitted && (
            <button
              style={{ textDecoration: 'none' }}
              className={`btn btn-link text-white text-start d-flex align-items-center ${
                activeSection === 'receipt' ? 'fw-bold' : ''
              }`}
              onClick={() => setActiveSection('receipt')}
            >
              <FaFileInvoice className="me-2" /> View Receipt
            </button>
          )}

          <button
            style={{ textDecoration: 'none' }}
            className={`btn btn-link text-white text-start d-flex align-items-center ${
              activeSection === 'records' ? 'fw-bold' : ''
            }`}
            onClick={() => setActiveSection('records')}
          >
            <FaClipboardList className="me-2" /> Records
          </button>

          <button
            style={{ textDecoration: 'none' }}
            className={`btn btn-link text-white text-start d-flex align-items-center ${
              activeSection === 'contact' ? 'fw-bold' : ''
            }`}
            onClick={() => setActiveSection('contact')}
          >
            <FaPhoneAlt className="me-2" /> Contact Search
          </button>

          {/* Admin Dashboard button opening in new tab */}
        <Link
  to="/index/Analytics//Dashboard"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-link text-white text-start d-flex align-items-center"
  style={{ textDecoration: 'none' }}
>
  <FaUser className="me-2" /> Admin Dashboard
</Link>

        </nav>

        <div className="mt-auto text-center text-muted small pt-5">
          © 2025 Watchify
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-fill bg-light p-4 overflow-auto" style={{ scrollBehavior: 'smooth' }}>
        {/* Form Section */}
        {activeSection === 'form' && (
          <section id="form">
            <div className="container">
              <h2 className="mb-4">🧾 Create Watch Receipt</h2>
              <div className="card shadow border-0">
                <div className="card-body">
                  <form className="row g-4" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                      <label className="form-label">Customer Name</label>
                      <input
                        type="text"
                        name="customerName"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Watch Model</label>
                      <input
                        type="text"
                        name="watchModel"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Quantity</label>
                      <input
                        type="number"
                        name="quantity"
                        min="1"
                        className="form-control"
                        value={data.quantity}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Price (₨)</label>
                      <input
                        type="number"
                        name="price"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={data.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        value={data.address}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 text-end">
                      <button className="btn btn-dark">Generate Receipt</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Receipt Section */}
        {activeSection === 'receipt' && submitted && (
          <section id="receipt" className="container mt-5">
            <div
              ref={receiptRef}
              className="card mx-auto border-0 shadow-lg"
              style={{ maxWidth: '600px' }}
            >
              <div className="card-body">
                <h3 className="text-center mb-1">🧾 Watch Purchase Receipt</h3>
                <p className="text-center text-muted mb-4">
                  <FaRegClock /> {data.date}
                </p>

                <div className="d-flex justify-content-between small">
                  <span>
                    <strong>Order ID:</strong> {data.orderId}
                  </span>
                  <span>
                    <strong>Qty:</strong> {data.quantity}
                  </span>
                </div>

                <hr />
                <p>
                  <FaUser className="me-2" /> {data.customerName}
                </p>
                <p>
                  <FaPhoneAlt className="me-2" /> {data.phone}
                </p>
                <p>
                  <FaMapMarkerAlt className="me-2" /> {data.address}
                </p>
                <p>
                  <strong>Model:</strong> {data.watchModel}
                </p>
                <p>
                  <strong>Unit Price:</strong> ₨ {data.price}
                </p>

                <div className="d-flex justify-content-between mt-3">
                  <span>
                    <strong>Total Amount:</strong>
                  </span>
                  <span className="fw-bold fs-5 text-success">
                    ₨ {data.quantity * data.price}
                  </span>
                </div>

                <hr />
                <p className="text-center text-muted fst-italic mt-3">
                  Thank you for your purchase! <br />
                  For support, contact: <strong>0318678900</strong>
                </p>
              </div>
            </div>

            <div className="text-center mt-4">
              <button className="btn btn-success btn-lg" onClick={downloadPDF}>
                Download PDF
              </button>
            </div>
          </section>
        )}

        {/* Records Section */}
        {activeSection === 'records' && (
          <section id="records" className="container mt-5">
            <h3 className="mb-3">📚 Receipt Records</h3>
            <input
              type="text"
              placeholder="Search by name or phone..."
              className="form-control mb-3"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="row">
              {(searchTerm ? filteredReceipts : receipts).map((r, i) => (
                <div key={i} className="col-md-6 mb-3">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5>{r.customerName}</h5>
                      <p>
                        <strong>Phone:</strong> {r.phone}
                      </p>
                      <p>
                        <strong>Model:</strong> {r.watchModel}
                      </p>
                      <p>
                        <strong>Total:</strong> ₨ {r.quantity * r.price}
                      </p>
                      <p className="text-muted small">{r.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Search Section */}
        {activeSection === 'contact' && (
          <section id="contact" className="container mt-5">
            <h3 className="mb-3">📞 Search by Phone</h3>
            <input
              type="text"
              placeholder="Enter phone number..."
              className="form-control mb-3"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="row">
              {(searchTerm ? filteredReceipts : receipts).map((r, i) => (
                <div key={i} className="col-md-6 mb-3">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5>{r.customerName}</h5>
                      <p>
                        <strong>Phone:</strong> {r.phone}
                      </p>
                      <p>
                        <strong>Model:</strong> {r.watchModel}
                      </p>
                      <p>
                        <strong>Total:</strong> ₨ {r.quantity * r.price}
                      </p>
                      <p className="text-muted small">{r.date}</p>
                    </div>
                  </div>
                </div>
              ))}
              {searchTerm && filteredReceipts.length === 0 && (
                <p>No receipts found for that phone number.</p>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Recipt;
