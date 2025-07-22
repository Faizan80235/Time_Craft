import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'James Oliver',
    title: 'CEO, Orion Ventures',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    feedback:
      'The Omega Speedmaster I purchased is more than a watch — it’s a legacy. Exceptional build and timeless elegance.',
  },
  {
    id: 2,
    name: 'Emma Richards',
    title: 'Luxury Blogger',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    feedback:
      'Absolutely love the Rolex Submariner. The service and packaging were just as premium as the product.',
  },
  {
    id: 3,
    name: 'Daniel Kim',
    title: 'Watch Collector',
    photo: 'https://randomuser.me/api/portraits/men/76.jpg',
    feedback:
      'Audemars Piguet Royal Oak exceeded all expectations. A powerful blend of precision and luxury.',
  },
];

const ClientTestimonials = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">What Our Clients Say</h2>
      <div className="row g-4">
        {testimonials.map((client) => (
          <div className="col-md-4" key={client.id}>
            <div className="card border-0 shadow-sm h-100 p-4">
              <div className="d-flex align-items-center mb-3">
                <img
                  src={client.photo}
                  alt={client.name}
                  className="rounded-circle me-3"
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
                <div>
                  <h6 className="mb-0 fw-bold">{client.name}</h6>
                  <small className="text-muted">{client.title}</small>
                </div>
              </div>
              <p className="text-muted fst-italic">“{client.feedback}”</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonials;
