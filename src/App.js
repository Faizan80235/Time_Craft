import React from 'react';
import Routing from './Route/Routing';
import NewsletterPopup from './Components/Newletterpopup';  // Make sure the path & name are correct

export default function App() {
  return (
    <div>
      {/* Newsletter popup shown globally */}
      <NewsletterPopup />

      {/* Your routing component */}
      <Routing />
    </div>
  );
}
