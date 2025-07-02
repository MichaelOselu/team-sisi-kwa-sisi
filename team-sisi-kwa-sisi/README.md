# Team Sisi Kwa Sisi

## Project Overview
Team Sisi Kwa Sisi is a community-powered assistance platform designed to enable individuals to request, share, and support each other during critical times. The platform focuses on fostering a sense of community and providing timely assistance to those in need.

## Core Features
1. **Help Request System**
   - Users can submit urgent needs such as medical assistance, school fees, and rent.
   - Each request includes details like name, location, category, urgency level, story, and optional media.
   - All requests require admin approval before being publicly listed.

2. **Donation System**
   - Multiple donation methods including cash (M-Pesa API, PayPal, Stripe), in-kind support, and social media sharing.
   - Transaction records are maintained for transparency.
   - An option for anonymous donations and a real-time progress bar for each case.

3. **User Roles & Authentication**
   - Different user roles: Beneficiaries, Donors/Supporters, Volunteers, and Admins.
   - JWT authentication for secure login, with options for social login (Google, Facebook).

4. **Success Stories Section**
   - A dedicated section to showcase successfully helped cases, fostering trust and encouraging more donations.

5. **Location Tagging**
   - Integration with maps (React + Leaflet or Google Maps) to visualize where help is needed.
   - Ability to filter requests by county, ward, or region.

## Extended Features
6. **Community Uplift Projects**
   - Users can join and support group projects like school renovations and community farming.

7. **Emergency Alerts**
   - Highlight urgent cases that need immediate attention, with options for SMS/Email notifications.

8. **Verification Process**
   - A system to verify needs and add a "verified" badge after confirmation.

9. **Search & Filters**
   - Users can filter needs by category, urgency, location, and date posted.

10. **Blog or Awareness Articles**
    - A section for tips, stories, and information on available aid from government/NGOs.

11. **AI-Powered Recommendation**
    - Future feature to suggest cases to donors based on their past activity.

12. **Mobile Responsive Design**
    - A fully mobile-friendly React frontend with PWA capabilities for offline usage.

13. **Fraud Detection & Moderation Tools**
    - Tools to flag suspicious activities and maintain a secure platform.

## Tech Stack
- **Frontend:** React, Tailwind CSS, Axios, React Router
- **Backend:** Django, Django REST Framework
- **Database:** PostgreSQL
- **Authentication:** JWT (Djoser or SimpleJWT)
- **Payments:** M-Pesa Daraja API, Stripe, PayPal
- **Maps:** Leaflet.js, OpenStreetMap or Google Maps
- **File Uploads:** Django with Cloudinary or AWS S3
- **Deployment:** Render, Railway, Heroku, Vercel (frontend)
- **Logging/Monitoring:** Sentry, LogRocket (React)
- **SMS/Email:** Africa's Talking, Twilio, Beem Africa

## Getting Started
1. Clone the repository.
2. Set up the backend by installing the required packages listed in `requirements.txt`.
3. Configure the database settings in `settings.py`.
4. Run migrations and start the Django server.
5. Set up the frontend by installing dependencies using npm and start the React application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.