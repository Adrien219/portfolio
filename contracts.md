# Contracts & Integration Protocol - Portfolio Adriel Mulongoy

## 1. Frontend Mocked Data (À remplacer)

### 1.1 Contact Form
**Location:** `frontend/src/components/Contact.jsx`

**Mock Behavior:**
- Form submission simulates success with setTimeout(1500ms)
- Shows toast notification "Message envoyé avec succès"
- Resets form after submission

**What needs backend:**
- POST request to `/api/contact`
- Real email sending functionality
- Form validation backend-side
- Error handling

---

## 2. Backend API Endpoints to Implement

### 2.1 Contact Form Submission

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string (required, min: 2, max: 100)",
  "email": "string (required, valid email format)",
  "message": "string (required, min: 10, max: 1000)"
}
```

**Response Success (200):**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Response Error (400):**
```json
{
  "success": false,
  "error": "Validation error message"
}
```

**Backend Logic:**
1. Validate incoming data (name, email, message)
2. Store message in MongoDB collection `contact_messages`
3. Send email notification to adriellubabila219@gmail.com
4. Return success/error response

**MongoDB Model:**
```python
class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    status: str = "unread"  # unread, read, replied
```

---

## 3. Frontend Integration Changes

### 3.1 Contact Component Updates

**File:** `frontend/src/components/Contact.jsx`

**Changes Required:**
1. Replace mock submission with real API call
2. Update API endpoint to `${BACKEND_URL}/api/contact`
3. Handle real error responses from backend
4. Add loading state during submission
5. Improve error messaging based on backend response

**Before (Mock):**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  // Mock submission
  setTimeout(() => {
    toast({ title: t.contact.success });
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  }, 1500);
};
```

**After (Real API):**
```javascript
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
    
    if (response.data.success) {
      toast({ title: t.contact.success });
      setFormData({ name: '', email: '', message: '' });
    }
  } catch (error) {
    const errorMsg = error.response?.data?.error || t.contact.error;
    toast({ 
      title: errorMsg,
      variant: 'destructive'
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## 4. Backend Implementation Details

### 4.1 Dependencies to Install
```bash
cd /app/backend
pip install python-multipart aiosmtplib
pip freeze > requirements.txt
```

### 4.2 Email Configuration
- Use environment variables for email credentials
- Add to `.env`: EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD
- For production: Use service like SendGrid, Mailgun, or SMTP relay

### 4.3 Rate Limiting (Optional but recommended)
- Implement basic rate limiting to prevent spam
- Max 5 submissions per IP per hour

---

## 5. Testing Protocol

### 5.1 Backend Testing
1. Test POST `/api/contact` with valid data
2. Test validation errors (missing fields, invalid email)
3. Verify MongoDB storage
4. Check email sending (if configured)

### 5.2 Frontend Testing
1. Fill and submit contact form
2. Verify success toast appears
3. Check form resets after submission
4. Test error handling with invalid data
5. Verify loading state during submission

### 5.3 Integration Testing
1. Submit form from frontend
2. Verify data reaches backend
3. Confirm MongoDB storage
4. Check email notification received (if configured)

---

## 6. Assets Integration Status

### 6.1 Images
- ✅ Profile photos downloaded: `profile1.jpeg`, `profile2.jpg`
- ⏳ Project images: To be added later
- ⏳ Certification badges: To be added later

### 6.2 Documents
- ⏳ CV PDF: To be added later

---

## 7. Known Limitations & Future Enhancements

### Current Limitations
1. Spline 3D not integrated (using CSS gradient animation instead)
2. No email service configured yet (will store in DB only)
3. No file upload for CV yet
4. Project images are placeholders

### Future Enhancements
1. Add Spline 3D scene to Hero section
2. Configure email service (SendGrid/SMTP)
3. Add CV download functionality
4. Upload and display project screenshots
5. Add admin panel to view contact messages
6. Implement newsletter subscription
7. Add blog/articles section
8. Analytics integration

---

## 8. Environment Variables

### Frontend (.env)
```
REACT_APP_BACKEND_URL=<configured_automatically>
```

### Backend (.env)
```
MONGO_URL=<configured_automatically>
DB_NAME=portfolio_db

# Email Configuration (Optional for now)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=adriellubabila219@gmail.com
EMAIL_PASSWORD=<app_password>
```

---

## 9. Deployment Checklist

Before deployment:
- [ ] All environment variables configured
- [ ] Backend API tested and working
- [ ] Frontend integrated with backend
- [ ] Contact form tested end-to-end
- [ ] Profile images displaying correctly
- [ ] All translations working (FR/EN)
- [ ] Mobile responsive verified
- [ ] Cross-browser testing done
- [ ] Performance optimization complete

---

**Document Version:** 1.0  
**Last Updated:** 2025-12-22  
**Contact:** adriellubabila219@gmail.com
