const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Checks if both dividend and divider are empty
  if (!dividend && !divider) {
    result.innerText = "No calculation performed";
    result.style.display = "block";
    return;
  }

  // Check if either dividend or divider is empty
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    result.style.display = "block";
    return;
  }

    // Store both values from a string to an integer 
  const numDividend = parseFloat(dividend);
  const numDivider = parseFloat(divider);

    // Checks if a dividend is a number and divider is equal to zero 
    if (!isNaN(numDividend) && numDivider === 0){
    result.innerText = "Division not performed. Invalid number provided. Try again";
    result.style.display = "block";
    console.error("Division error: Divider is zero, which is not allowed.");
    return;
  } 

  // Checks if both dividend and divider is a number 
  if (!isNaN(dividend) && !isNaN(divider)) {
    result.innerText = Math.round(dividend / divider);
    result.style.display = "block";
  } else {
    result.innerText = "Something critical went wrong. Please reload the page";
    result.style.display = "block"; 
    console.error("Critical error: No numbers where entered");
  }



});