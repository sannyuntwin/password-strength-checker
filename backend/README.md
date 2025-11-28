# Password Strength Checker Backend

This backend is built with **FastAPI** and provides an API to evaluate password strength based on various criteria including length, character variety, entropy, and checks against common passwords and dictionary words.

## Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the FastAPI server:
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 10000
   ```

4. The API will be available at `http://localhost:10000`

5. For interactive API documentation, visit `http://localhost:10000/docs`

## API Endpoints

- `GET /`: Root endpoint with welcome message
- `POST /check_password`: Check password strength

Example request to `/check_password`:
```json
{
  "password": "YourPassword123!"
}
```

Response:
```json
{
  "strength": "Strong",
  "entropy_bits": 75.81,
  "score": 4,
  "feedback": ["Consider using a longer password for extra security."]
}
```