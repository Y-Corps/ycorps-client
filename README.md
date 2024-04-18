# Project Documentation: Next.js IoT Dashboard

### Introduction:

The Next.js IoT Dashboard is a web application designed to interact with IoT devices, specifically Arduino NodeMCU, via WebSocket communication. The main goal is to provide real-time monitoring of temperature, humidity, gas concentration, and light intensity from the Arduino device. Additionally, the dashboard offers automation features based on user-defined threshold values for environmental parameters.

### Key Features:

- **Authentication**:
    - Next-auth v5 for secure authentication.
    - Support for credentials provider, OAuth provider (Google & GitHub), and email/password authentication.
    - Forgot password functionality with email verification.
    - Two-factor authentication (2FA) for enhanced security.
    - User roles (Admin & User) with role-based access control.
- **Components**:
    - Login, Register, Forgot password, Verification, and Error components.
    - Login and Logout buttons for easy navigation.
    - Role Gate component to render content based on user roles.
    - Example components with server and client-side rendering.
- **Hooks and Utilities**:
    - Custom hooks such as useCurrentUser and useRole.
    - Utility functions to retrieve current user and role information.
- **Extensibility**:
    - Explore Next.js middleware for additional functionality.
    - Extend and explore Next-auth session and callbacks.
    - Protect API routes and server actions for admin-only access.
- **Settings Page**:
    - Change email with new verification.
    - Change password with old password confirmation.
    - Enable/disable two-factor authentication.
    - Change user role (for development purposes only).

### Technologies Used:

- **Next.js** : React framework for building server-side rendered applications.
- **Prisma and PostgreSQL**: Database management system for user authentication and role-based access control.
- **MongoDB**: NoSQL database for storing Arduino sensor data.
- **Shadcn UI**: Customizable component library for building user interfaces with modern design system.
- **React Icons**: Icon library for UI elements.
- **[Socket.io](https://socket.io/) or WebSocket**: Real-time communication between the frontend and IoT devices.
- **Zod**: Library for server actions and form validation.

### Installation and Setup:

1. Clone the repository from GitHub: `git clone https://github.com/Y-Corps/ycorps-client`
2. Navigate to the project directory: `cd ycorps-client`
3. Install dependencies: `npm install`
4. Set up environment variables:
    - Create a `.env` file based on the provided `.env.example` file.
    - Configure authentication providers (Google, GitHub, etc.) and database connection URLs.
5. Initialize Prisma schema: `npx prisma generate`
6. Start the development server: `npm run dev`

### Usage:

1. **Authentication**:
    - Sign up or log in using Google, GitHub, or email/password authentication.
    - Verify your email address and set up two-factor authentication if enabled.
2. **Dashboard**:
    - View real-time data from Arduino sensors (temperature, humidity, gas concentration, light intensity).
    - Enable automation mode to control devices based on threshold values.
    - Manually control devices (fan, light, vent) if automation mode is disabled.
3. **IOT Settings**:
    - Enable or disable automation features.
    - Configure threshold values for automation.
4. Settings
    - Manageable user profile settings.

### API Documentation:

- **WebSocket API**:
    - Endpoint: `/`
    - Description: Bidirectional communication between the frontend and Arduino devices for real-time data updates and device control.

### Deployment:

1. Configure deployment settings for your preferred hosting platform (Vercel, Heroku, etc.).
2. Deploy the application using the provided deployment script or manual deployment steps.

### Troubleshooting:

- If you encounter any issues during installation or setup, refer to the troubleshooting section in the project repository or contact the project maintainer for assistance.

### Contributing:

- Right now we are NO Contribution!

### License:

- This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the LICENSE file for more details.

### Additional Resources:

- NA