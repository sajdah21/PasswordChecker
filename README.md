# Password Strength Analyzer 

An interactive password strength analyzer that uses Shannon entropy, character set analysis, and common password detection to give real-time feedback on password security. Built with HTML, CSS, and vanilla JavaScript.

### Features 

- Real-time password strength feedback

- Shannon entropy calculation

- Estimated crack time based on entropy

- Character set analysis (uppercase, lowercase, numbers, symbols)

- Visual strength meter with six levels (Very Weak to Very Strong)

- Common password detection (based on NordPass top 200 list)

- Password visibility toggle

- Animated fog background using Vanta.js

- Glassmorphism-style UI with custom fonts

### Demo 



https://github.com/user-attachments/assets/87a15c60-0cb8-40b4-974f-bd6f531f853d





### How it works 

- Entropy Calculation: Uses Shannon entropy to measure unpredictability
- Scoring: Based on password length, variety of characters, entropy, and whether it matches common passwords
- Crack Time Estimation: Estimates time to brute-force using a guess rate of 1 billion guesses per second
- Visual Feedback: Colour-coded strength bar and textual analysis update in real time

### Tech stack 

- HTML5
- CSS3
- JavaScript
- Vanta.js (for the background effect)

### Acknowledgements 

- University of Texas at Austin (Lecture 35) - Entropy model
- NordPass - Common passwords list
- Vanta.js - Background animation
