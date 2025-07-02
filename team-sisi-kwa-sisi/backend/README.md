# Team Sisi Kwa Sisi - Backend Documentation

## Project Overview
Team Sisi Kwa Sisi is a community-powered assistance platform designed to enable individuals to request, share, and support each other during critical times. The platform focuses on facilitating help requests, donations, and community uplift projects.

## Core Features
1. **Help Request System**: Users can submit urgent needs, which require admin approval before being publicly listed.
2. **Donation System**: Multiple donation methods are available, including cash and in-kind support, with transaction records and an option for anonymous donations.
3. **User Roles & Authentication**: Different user roles (Beneficiaries, Donors, Volunteers, Admins) with JWT authentication and social login options.
4. **Success Stories Section**: A dedicated area to showcase successfully helped cases, fostering trust and encouraging more donations.
5. **Location Tagging**: Integration with mapping services to locate help requests and filter them by region.

## Extended Features
- Community uplift projects for group initiatives.
- Emergency alerts for urgent cases.
- Verification process for authentic needs.
- Search and filter capabilities for requests.
- Blog section for awareness and tips.
- AI-powered recommendations for donors.

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Django, Django REST Framework
- **Database**: PostgreSQL
- **Authentication**: JWT (Djoser or SimpleJWT)
- **Payments**: M-Pesa Daraja API, Stripe, PayPal
- **Maps**: Leaflet.js, Google Maps
- **File Uploads**: Cloudinary or AWS S3
- **Deployment**: Render, Railway, Heroku, Vercel
- **Logging/Monitoring**: Sentry, LogRocket
- **SMS/Email**: Africa's Talking, Twilio, Beem Africa

## Getting Started
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/team-sisi-kwa-sisi.git
   ```
2. Navigate to the backend directory:
   ```
   cd team-sisi-kwa-sisi/backend
   ```
3. Install the required packages:
   ```
   pip install -r requirements.txt
   ```
4. Run migrations:
   ```
   python manage.py migrate
   ```
5. Start the development server:
   ```
   python manage.py runserver
   ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.