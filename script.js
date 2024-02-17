const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight)) {
    resultDiv.textContent = 'Please enter valid height and weight.';
    return;
  }

  const bmi = weight / (height / 100) ** 2;

  const bmiInterpretation = interpretBMI(bmi);

  resultDiv.innerHTML = `
    <p>Your BMI is: ${bmi.toFixed(2)}</p>
    <p>${bmiInterpretation}</p>
  `;
});

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return 'boxtype hilda ja-ke';
  } else if (bmi < 25) {
    return 'You are in the normal weight range.';
  } else if (bmi < 30) {
    return 'You are overweight. Talk to your doctor or a registered dietitian about healthy weight management strategies.';
  } else {
    return 'You are obese. This can increase your risk of serious health problems. Talk to your doctor about a weight management plan.';
  }
}