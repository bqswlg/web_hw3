function showPhishingAlert() {
    alert("⚠️ 注意！這是一個反詐騙釣魚網頁模擬作業，請勿輸入任何真實帳號密碼！");
}

function toggleLoginButtonState() {
    const inputs = document.querySelectorAll('.login-box input');
    const button = document.querySelector('.login-box button');
    const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
    
    if (allFilled) {
        button.classList.add('enabled');
        button.disabled = false;
    } else {
        button.classList.remove('enabled');
        button.disabled = true;
    }
}

// 監聽輸入框的輸入事件
document.querySelectorAll('.login-box input').forEach(input => {
    input.addEventListener('input', toggleLoginButtonState);
});
