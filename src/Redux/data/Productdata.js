import watch1 from "../../Assest/image/image4.jpg"
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    product: [
        {
            Product_name: `Green Lion Kids 1.85" Smart Watch with GPS Tracking, 3-4 Days Working Time, SOS Call, Video Call, & Voice Chat, HD Camera, 1GB RAM, 2-Way Phone Call - Pink`,
            Product_namees: "Aquanaut Travel Time 40 MM",
            details: `
        Patek Philippe Aquanaut Travel Time – Dream Watch boutique sells and buys
        luxury Swiss watches and jewelry. We provide high-quality services in the
        field of valuation, maintenance and repair of watches.
      `,
            image_url: watch1,
            model: "GN4GKDPROPK",
            price: "2400",
            contact: "+92 3161435800",
            overview: "       The Green Lion Kids 1.85Smart Watch is a full-featured device meant to keep children connected and safe.It guarantees that parents are always aware of their child's location thanks to its GPS tracking and exactositioning features.For peace of mind, the smartwatch offers plenty of communication options, including voice chat, video calls, and SOS calling.Kids can use its HD camera to record entertaining moments or make visual connections during video conversations.The watch is dependable for daily use.Its 920mAh battery gives3-4 days of work time and 5-7 days of standby.With a 240x280 resolution, its 1.85-inch IPS display providesa bright and clean user interface.The 1GB RAM and 8GB ROM provide fast performance and plenty of storage forapps and media.The smartwatch is for active kids.It's IP67 waterproof. It can resist splashes and light waterexposure. 4G VoLTE is also supported for dependable and quick connectivity.With a 2-hour charge time, the GreenLion Kids 1.85Smart Watch is prepared to keep up with kidseveryday activities while maintaining constant communication and safety."
    },
        {
            Product_name: `Green Lion Kids 1.85" Smart Watch with GPS Tracking, 3-4 Days Working Time, SOS Call, Video Call, & Voice Chat, HD Camera, 1GB RAM, 2-Way Phone Call - Pink`,
            Product_namees: "Aquanaut Travel Time 40 MM",
            details: `
        Patek Philippe Aquanaut Travel Time – Dream Watch boutique sells and buys
        luxury Swiss watches and jewelry. We provide high-quality services in the
        field of valuation, maintenance and repair of watches.
      `,
            image_url: watch1,
            model: "GN4GKDPROPK",
            price: "2400",
            contact: "+92 3161435800",
            overview: "       The Green Lion Kids 1.85Smart Watch is a full-featured device meant to keep children connected and safe.It guarantees that parents are always aware of their child's location thanks to its GPS tracking and exactositioning features.For peace of mind, the smartwatch offers plenty of communication options, including voice chat, video calls, and SOS calling.Kids can use its HD camera to record entertaining moments or make visual connections during video conversations.The watch is dependable for daily use.Its 920mAh battery gives3-4 days of work time and 5-7 days of standby.With a 240x280 resolution, its 1.85-inch IPS display providesa bright and clean user interface.The 1GB RAM and 8GB ROM provide fast performance and plenty of storage forapps and media.The smartwatch is for active kids.It's IP67 waterproof. It can resist splashes and light waterexposure. 4G VoLTE is also supported for dependable and quick connectivity.With a 2-hour charge time, the GreenLion Kids 1.85Smart Watch is prepared to keep up with kidseveryday activities while maintaining constant communication and safety."
    }
    ]
};


const productdata = createSlice({
    name: 'product',
    initialState,
    reducer: {
        updateproductdetails: (state, action) => {
            return action.payload
        }
    }
})
export const { updateproductdetails } = productdata.actions
export default productdata.reducer