function calculateLoan() {
  const amount = parseFloat(document.getElementById('amount').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const years = parseFloat(document.getElementById('years').value);
  const errorDiv = document.getElementById('error');
  const resultDiv = document.getElementById('result');

  // Reset outputs
  errorDiv.textContent = '';
  resultDiv.classList.add('hidden');

  // Input validation
  if (isNaN(amount) || isNaN(rate) || isNaN(years)) {
    errorDiv.textContent = 'Please fill in all fields with numbers.';
    return;
  }

  if (amount <= 0 || rate <= 0 || years <= 0) {
    errorDiv.textContent = 'All values must be greater than zero.';
    return;
  }

  const monthlyRate = rate / 100 / 12;
  const n = years * 12;

  const x = Math.pow(1 + monthlyRate, n);
  const monthly = (amount * x * monthlyRate) / (x - 1);

  const total = monthly * n;
  const interest = total - amount;

  document.getElementById('monthly').textContent = monthly.toFixed(2);
  document.getElementById('total').textContent = total.toFixed(2);
  document.getElementById('interest').textContent = interest.toFixed(2);

  resultDiv.classList.remove('hidden');
}
