// تشغيل الكاميرا عند تسجيل الدخول
const loginBtn = document.getElementById('login-btn');
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

loginBtn.addEventListener('click', () => {
  // تشغيل الكاميرا
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
      video.style.display = 'block'; // الكاميرا تشتغل

      // التقاط الصورة بعد 3 ثواني
      setTimeout(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        alert("تم التقاط صورتك كجزء من التجربة! 😜");
        video.style.display = 'none';
      }, 3000);
    })
    .catch(err => {
      console.error("تعذر تشغيل الكاميرا:", err);
      alert("لم نستطع الوصول إلى الكاميرا!");
    });
});
