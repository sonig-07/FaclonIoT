# Node.js Dev IoT Sensor – Internship Assessment


Build a Node.js backend service that ingests IoT sensor temperature readings, stores them in MongoDB, and exposes APIs to retrieve the latest reading for a device.

---

## Tech Stack

- Node.js (v20)
- Express.js
- MongoDB

---

## Functional Features

- POST API to ingest sensor readings
- GET API to fetch latest reading per device
- Input validation for required fields
- Automatic timestamp generation
- MongoDB persistence

---

## Project Setup

### 1. Clone Repository

```bash
git clone https://github.com/sonig-07/FaclonIoT

```
---

### 2. Install Dependencies 

```bash
npm install
```
---

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=mongodb+srv://....
PORT=5000
```

---

### 4. Run Server

```bash
npm run dev
```

---

### Expected Output

```bash
Mongo Connected
Server running on port 5000
```

---

## API Endpoints

### Ingest Sensor Reading

```
POST /api/sensors
```

**Request Body:**

```json
{
  "deviceId": "device_001",
  "temperature": 32.5
}
```

---

### Get Latest Reading for a Device

```
GET /api/sensors/:deviceId/latest
```

---

## Note

* Designed for real-world IoT data ingestion
* Clean and scalable backend structure

---

## Author

SONY GUPTA  [GitHub Profile](https://github.com/sonig-07)

