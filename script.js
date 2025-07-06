document.addEventListener("DOMContentLoaded", function () {
    VANTA.FOG({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0xfb9062,
      midtoneColor: 0xee5d6c,
      lowlightColor: 0xce4993,
      baseColor: 0x6a0d83,
      blurFactor: 0.90,
      zoom: 0.40
    });
  });
  

  function togglePassword() {
    const input = document.getElementById('passwordInput');
    const button = document.querySelector('.toggle-btn');
    
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '🙈';
    } else {
        input.type = 'password';
        button.textContent = '👁️';
    }
}

//pulled from University of Texas at Austin Lecture 35: Entropy of English
  const letterFreq = {
    'a': 0.08167, 'b': 0.01492, 'c': 0.02782, 'd': 0.04253, 'e': 0.12702,
    'f': 0.02228, 'g': 0.02015, 'h': 0.06094, 'i': 0.06966, 'j': 0.00153,
    'k': 0.00772, 'l': 0.04025, 'm': 0.02406, 'n': 0.06749, 'o': 0.07507,
    'p': 0.01929, 'q': 0.00095, 'r': 0.05987, 's': 0.06327, 't': 0.09056,
    'u': 0.02758, 'v': 0.00978, 'w': 0.02360, 'x': 0.00150, 'y': 0.01974,
    'z': 0.00074
};

//Pulled from NordPass top 200 passwords
const commonPasswords = [
    '123456', '123456789', '12345678', 'password', 'qwerty123', 'qwerty1', '111111', '12345', 'secret', '123123','1234567890', '1234567', '000000', 'qwerty', 'abc123', 'password1', 'iloveyou','dragon','monkey','123123123','123321','qwertyuiop','Password', '654321','target123','tinkle','1q2w3e4r5t','121212','abcd1234','aaaaaa','princess','football','sunshine','computer','letmein'

];


function calculateShannonEntropy(password) {
  if (!password) return 0;
  
  const charCount = {};
  const totalLength = password.length;
  
  for (let char of password.toLowerCase()) {
      charCount[char] = (charCount[char] || 0) + 1;
  }
  
  let entropy = 0;
  for (let char in charCount) {
      const frequency = charCount[char] / totalLength;
      if (frequency > 0) {
          entropy -= frequency * Math.log2(frequency);
      }
  }
  
  return entropy * totalLength; 
}

