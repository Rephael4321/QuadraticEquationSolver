// Warning Message
const warningMessage = document.querySelector(".warning-message");
const closeBtn = document.querySelector("#close-btn");

// Form Elements
const solveBtn = document.querySelector("#solve-btn");
const inputA = document.querySelector("#a-value");
const inputB = document.querySelector("#b-value");
const inputC = document.querySelector("#c-value");

// Wrapper Elements
const outerWrapperDives = document.querySelectorAll(".wrapper-outer");

// Stage One Numbers
const spanBOuterOne = document.querySelector("#b-coefficient-outer-one");
const spanBInnerOne = document.querySelector("#b-coefficient-inner-one");
const spanInnerNegativeOne = document.querySelector("#inner-negative-sign-one");
const spanAInner = document.querySelector("#a-coefficient-inner");
const spanC = document.querySelector("#c-coefficient");
const spanOuterNegativeOne = document.querySelector("#outer-negative-sign-one");
const spanAOuter = document.querySelector("#a-coefficient-outer");
// Stage Two Numbers
const spanBOuterTwo = document.querySelector("#b-coefficient-outer-two");
const spanBInnerTwo = document.querySelector("#b-coefficient-inner-two");
const spanInnerNegativeTwo = document.querySelector("#inner-negative-sign-two");
const spanRightSideInner = document.querySelector("#right-side-inner");
const spanOuterNegativeTwo = document.querySelector("#outer-negative-sign-two");
const spanDenominatorTwo = document.querySelector("#denominator-two");
// Stage Three Numbers
const spanBThree = document.querySelector("#b-coefficient-three");
const spanDelta = document.querySelector("#delta");
const spanDenominatorThree = document.querySelector("#denominator-three");
// Stage Four Numbers
const spanBFour = document.querySelector("#b-coefficient-four");
const spanRootedDeltaFour = document.querySelector("#rooted-delta-four");
const spanDenominatorFour = document.querySelector("#denominator-four");
// Stage Five Numbers
const spanBFive = document.querySelector("#b-coefficient-five");
const spanRootedDeltaFive = document.querySelector("#rooted-delta-five");
const spanDenominatorFive = document.querySelector("#denominator-five");
// Stage Six Numbers
const spanBSix = document.querySelector("#b-coefficient-six");
const spanRootedDeltaSix = document.querySelector("#rooted-delta-six");
const spanDenominatorSix = document.querySelector("#denominator-six");

// Visuals Width
const spanNumerator = document.querySelectorAll(".numerator");
const fractionBar = document.querySelectorAll(".fraction-bar");
const denominatorBox = document.querySelectorAll(".denominator-box");
const denominatorContent = document.querySelectorAll(".denominator-content");

// Final Answers
const firstAnswer = document.querySelector("#final-answer-one");
const secondAnswer = document.querySelector("#final-answer-two");

// Delete on prod
inputA.value = 1;
inputB.value = 1;
inputC.value = 1;

solveBtn.addEventListener("click", (e) => {
  let a = parseFloat(inputA.value);
  let b = parseFloat(inputB.value);
  let c = parseFloat(inputC.value);

  console.log(a, b, c);

  if (!a) {
    a = 0;
    inputA.value = 0;
  }
  if (!b) {
    b = 0;
    inputB.value = 0;
  }
  if (!c) {
    c = 0;
    inputC.value = 0;
  }

  if (checkSize(a) || checkSize(b) || checkSize(c)) {
    warningMessage.style.visibility = "visible";
    warningMessage.style.position = "static";
    a = truncNumber(a);
    console.log(a);
    inputA.value = a;
    b = truncNumber(b);
    inputB.value = b;
    c = truncNumber(c);
    inputC.value = c;
  }

  if (a === 0) {
    firstAnswer.innerHTML = Number((-c / b).toFixed(3));
    secondAnswer.innerHTML = Number((-c / b).toFixed(3));
  }

  // Set Number of Stage One
  updateNumber(spanBOuterOne, b * -1);
  updateNumber(spanBInnerOne, b);
  spanInnerNegativeOne.innerHTML = a * c < 0 ? "+" : "-";
  updateNumber(spanAInner, a < 0 ? a * -1 : a);
  updateNumber(spanC, c < 0 ? c * -1 : c);
  spanOuterNegativeOne.innerHTML = a < 0 ? "-" : "";
  updateNumber(spanAOuter, a < 0 ? a * -1 : a);

  // // Set Number of Stage Two
  updateNumber(spanBOuterTwo, b * -1);
  updateNumber(spanBInnerTwo, b * b);
  spanInnerNegativeTwo.innerHTML = a * c < 0 ? "+" : "-";
  updateNumber(spanRightSideInner, b * c < 0 ? 4 * b * c * -1 : 4 * b * c);
  spanOuterNegativeTwo.innerHTML = a < 0 ? "-" : "";
  updateNumber(spanDenominatorTwo, a < 0 ? 2 * a * -1 : 2 * a);

  // Set Number of Stage Three
  updateNumber(spanBThree, b * -1);
  updateNumber(spanDelta, b * b - 4 * a * c);
  updateNumber(spanDenominatorThree, 2 * a);

  // Set Number of Stage Four
  updateNumber(spanBFour, b * -1);
  spanRootedDeltaFour.innerHTML =
    b * b - 4 * a * c < 0
      ? Number(Math.sqrt(4 * a * c - b * b).toFixed(3)) + "i"
      : Number(Math.sqrt(b * b - 4 * a * c).toFixed(3));
  updateNumber(spanDenominatorFour, 2 * a);

  // Set Number of Stage Five
  updateNumber(spanBFive, b * -1);
  spanRootedDeltaFive.innerHTML =
    b * b - 4 * a * c < 0
      ? Number(Math.sqrt(4 * a * c - b * b).toFixed(3)) + "i"
      : Number(Math.sqrt(b * b - 4 * a * c).toFixed(3));
  updateNumber(spanDenominatorFive, 2 * a);

  // Set Number of Stage Six
  updateNumber(spanBSix, b * -1);
  spanRootedDeltaSix.innerHTML =
    b * b - 4 * a * c < 0
      ? Number(Math.sqrt(4 * a * c - b * b).toFixed(3)) + "i"
      : Number(Math.sqrt(b * b - 4 * a * c).toFixed(3));
  updateNumber(spanDenominatorSix, 2 * a);

  // Set Visuals width
  for (let i = 0; i < 6; i++) {
    const finalFractionBarWidth = spanNumerator[i].offsetWidth;
    fractionBar[i].style.width = `${finalFractionBarWidth}px`;
    denominatorBox[i].style.width = `${finalFractionBarWidth}px`;
    denominatorContent[i].style.display = "inline";
    denominatorContent[
      i
    ].style.width = `${denominatorContent[i].offsetWidth}px`;
    denominatorContent[i].style.display = "block";
  }

  // Set Final Answers
  if (b * b - 4 * a * c < 0) {
    firstAnswer.innerHTML = `(${Number((-b / (2 * a)).toFixed(3))}, ${Number(
      (Math.sqrt(4 * a * c - b * b) / (2 * a)).toFixed(3)
    )}i)`;
    secondAnswer.innerHTML = `(${Number((-b / (2 * a)).toFixed(3))}, ${Number(
      (-Math.sqrt(4 * a * c - b * b) / (2 * a)).toFixed(3)
    )}i)`;
  } else {
    firstAnswer.innerHTML = Number(
      ((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)).toFixed(3)
    );
    secondAnswer.innerHTML = Number(
      ((-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)).toFixed(3)
    );
  }

  // Helper Function
  function updateNumber(obj, num) {
    num = Number(num.toFixed(3));
    obj.innerHTML = num;
  }

  function checkSize(num) {
    if (num > 99999 || num < -9999) {
      return true;
    }
  }

  function truncNumber(num) {
    if (num > 99999) {
      return 99999;
    } else if (num < -9999) {
      return -9999;
    } else {
      return num;
    }
  }

  // Display Sections after first solution
  for (let obj of outerWrapperDives) {
    obj.style.visibility = "visible";
  }

  e.preventDefault();
});

closeBtn.addEventListener("click", (e) => {
  warningMessage.style.visibility = "hidden";
  warningMessage.style.position = "absolute";
});
