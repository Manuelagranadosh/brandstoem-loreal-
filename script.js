body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: #0c0c0c;
  color: white;
  text-align: center;
}

.app {
  min-height: 100vh;
}

.hero {
  padding: 120px 20px;
  background: radial-gradient(circle, #2b1c0f, #000);
}

.hero h1 {
  font-size: 3rem;
  letter-spacing: 2px;
}

.hero p {
  opacity: 0.8;
  margin-bottom: 30px;
}

button {
  background: linear-gradient(135deg, gold, #caa24c);
  border: none;
  padding: 15px 30px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  opacity: 0.85;
}

.hidden {
  display: none;
}

#quiz {
  padding: 80px 20px;
}

.options {
  display: grid;
  gap: 15px;
  max-width: 400px;
  margin: auto;
}

.option {
  background: #1c1c1c;
  color: white;
  border: 1px solid #333;
}

.option:hover {
  background: #2a2a2a;
}

#result {
  padding: 80px 20px;
}