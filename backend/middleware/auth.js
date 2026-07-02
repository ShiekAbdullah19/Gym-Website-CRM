// backend/middleware/auth.js
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  try {
    // Frontend-ல இருந்து Headers-ல 'token' பாஸ் பண்ணுவோம்
    const { token } = req.headers;

    if (!token) {
      return res.json({ success: false, message: 'Not Authorized. Login Again! ❌' });
    }

    // Token-ஐ டீகோட் பண்ணி வெரிஃபை பண்றோம்
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    
    // வெரிஃபிகேஷன் சக்சஸ் ஆனா அடுத்த கன்ட்ரோலருக்கு பாஸ் பண்ணிடும்
    req.body.adminId = token_decode.id;
    next();
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: 'Invalid or Expired Token! ⚠️', error: error.message });
  }
};

module.exports = authMiddleware;