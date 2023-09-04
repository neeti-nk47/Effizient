#EFFIZIENT

Prerequisites:  <br />  
Node.js and npm installed on your machine.  <br />  
 <br />
Setup:  <br />
1.BACKEND-  <br />
Clone the repository to your local machine using the following command: git clone https://github.com/neeti-nk47/effizient.git  <br />
Navigate to the backend directory: cd backend  <br />
Create a .env file in the backend directory and configure the following environment variables:  <br />
PORT= 3000  <br />
OPENAI_API_KEY = "Your OpenAI API key"   <br />
MONGODB_URL = " URI for your MongoDB database."  <br />
EMAIL="Your Email for SMTP"  <br />
PASSWORD="Your password of Email"  <br />
Install dependencies using npm: npm install  <br />
Start the backend server: npm start  <br />
The backend will be accessible, and it's ready to receive user data and send mail for SOP generation.  <br />
2. FRONTEND-   <br />
Navigate to the frontend directory: cd frontend   <br />
Install dependencies using npm: npm install   <br />
Start the frontend server: npm run dev   <br />
The frontend will be accessible at http://localhost:5173   <br />
 <br /> 
Overview:  <br />
Access the web-based UI for the SOP Generation Tool    <br />
Fill out the form with the required information.   <br />
Upon submission, the data will be sent to the backend for processing.   <br />
An email will be generated and sent to the provided email address with a personalised Statement of Purpose (SOP) and all the information entered in the form.   <br />
 
