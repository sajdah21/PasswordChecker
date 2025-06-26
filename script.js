document.addEventListener("DOMContentLoaded", function () {
    VANTA.FOG({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0x8298fa,
      midtoneColor: 0xaa1172,
      lowlightColor: 0xff5d9c,
      baseColor: 0x010955,
      blurFactor: 0.90,
      zoom: 0.40
    });
  });
  

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
