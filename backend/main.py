from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import math

app = FastAPI(
    title="Password Strength Checker API",
    description="An API to evaluate the strength of passwords based on length and character variety.",
    version="1.0.0"
)

# ---- CORS Configuration (FIXED) ----
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://*.vercel.app",  # For production
        "*"  # Allow all origins as fallback
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
    expose_headers=["*"]
)

# ---- Load dictionary words ----
try:
    with open("dictionary.txt", "r", encoding="utf-8") as file:
        dictionary_words = set(word.strip().lower() for word in file.readlines())
except FileNotFoundError:
    dictionary_words = set()  # Handle missing file gracefully
    print("Warning: dictionary.txt not found")

common_passwords = {
    "123456", "password", "123456789", "12345", "12345678", "qwerty",
    "abc123", "football", "monkey", "letmein", "shadow", "master",
    "666666", "qwertyuiop", "123321", "mustang"
}

# ---- Request Model ----
class PasswordRequest(BaseModel):
    password: str

# ---- Utility Functions ----
def calculate_entropy(password: str) -> float:
    charset_size = 0

    if any(c.islower() for c in password):
        charset_size += 26 
    if any(c.isupper() for c in password):
        charset_size += 26
    if any(c.isdigit() for c in password):
        charset_size += 10
    if any(not c.isalnum() for c in password):
        charset_size += 32  # approximation for special characters

    if charset_size == 0:
        return 0.0

    entropy = len(password) * math.log2(charset_size)
    return entropy

# ---- Strength Checker ----
def analyze_password(password: str):
    feedback = []
    score = 0

    # Length Check
    if len(password) < 8:
        feedback.append("Password is too short; consider using at least 8 characters.")
    else:
        score += 1

    # Character types
    if any(c.islower() for c in password):
        score += 1
    else:
        feedback.append("Add lowercase letters to increase strength.")

    if any(c.isupper() for c in password):
        score += 1
    else:
        feedback.append("Add uppercase letters to increase strength.")

    if any(c.isdigit() for c in password):
        score += 1
    else:
        feedback.append("Add digits to increase strength.")

    if any(not c.isalnum() for c in password):
        score += 1
    else:
        feedback.append("Add special characters to increase strength.")

    # Common password check
    if password.lower() in common_passwords:
        feedback.append("This password is too common; choose a more unique password.")
        score = 0

    # Dictionary word check
    if password.lower() in dictionary_words:
        feedback.append("Avoid using dictionary words in your password.")
        score -= 1

    # Entropy calculation
    entropy = calculate_entropy(password)

    # Strength label
    if score <= 1: 
        strength = "Very Weak"
    elif score == 2:
        strength = "Weak"
    elif score == 3:
        strength = "Moderate"
    elif score == 4:
        strength = "Strong"
    else:
        strength = "Very Strong"

    return {
        "strength": strength,
        "entropy_bits": round(entropy, 2),
        "score": score,
        "feedback": feedback
    }

# ---- API Endpoints ----
@app.get("/", summary="API Root")
async def root():
    return {
        "message": "Welcome to the Password Strength Checker API",
        "endpoints": {
            "/check_password": "POST - Evaluate password strength",
            "/docs": "GET - API documentation"
        }
    }

@app.post("/check_password", summary="Check Password Strength")
async def check_password(request: PasswordRequest):
    result = analyze_password(request.password) 
    return result

# Add a health check endpoint
@app.get("/health", summary="Health Check")
async def health():
    return {"status": "healthy"}