function calculate() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
      alert("Please enter your birthdate!");
      return;
    }
  
    const birthDate = new Date(birthdate);
    const today = new Date();
  
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }
  
    if (days < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
      months--;
    }
  
    document.getElementById('result').innerText = `Your age is ${years} years, ${months} months, and ${days} days.`;
  }