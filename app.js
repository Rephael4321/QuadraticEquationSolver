// Warning Message #1
const warningMessage = document.querySelector(".warning-message");
const closeBtn = document.querySelector("#close-btn");

// Form Elements #2
const solveBtn = document.querySelector("#solve-btn");
const inputA = document.querySelector("#a-value");
const inputB = document.querySelector("#b-value");
const inputC = document.querySelector("#c-value");

// Wrapper Elements #3
const outerWrapperDives = document.querySelectorAll(".wrapper-outer");

// Stage One Numbers and Symbols #4
const spanBOuterOne = document.querySelector("#b-coefficient-outer-one");
const spanBInnerOne = document.querySelector("#b-coefficient-inner-one");
const spanInnerNegativeOne = document.querySelector("#inner-negative-sign-one");
const spanAInner = document.querySelector("#a-coefficient-inner");
const spanC = document.querySelector("#c-coefficient");
const spanOuterNegativeOne = document.querySelector("#outer-negative-sign-one");
const spanAOuter = document.querySelector("#a-coefficient-outer");

// Stage Two Numbers and Symbols #5
const spanBOuterTwo = document.querySelector("#b-coefficient-outer-two");
const spanBInnerTwo = document.querySelector("#b-coefficient-inner-two");
const spanInnerNegativeTwo = document.querySelector("#inner-negative-sign-two");
const spanRightSideInner = document.querySelector("#right-side-inner");
const spanOuterNegativeTwo = document.querySelector("#outer-negative-sign-two");
const spanDenominatorTwo = document.querySelector("#denominator-two");

// Stage Three Numbers and Symbols #6
const spanBThree = document.querySelector("#b-coefficient-three");
const spanDelta = document.querySelector("#delta");
const spanDenominatorThree = document.querySelector("#denominator-three");

// Stage Four Numbers and Symbols #7
const spanBFour = document.querySelector("#b-coefficient-four");
const spanRootedDeltaFour = document.querySelector("#rooted-delta-four");
const spanDenominatorFour = document.querySelector("#denominator-four");

// Stage Five Numbers and Symbols #8
const spanBFive = document.querySelector("#b-coefficient-five");
const spanRootedDeltaFive = document.querySelector("#rooted-delta-five");
const spanDenominatorFive = document.querySelector("#denominator-five");

// Stage Six Numbers and Symbols #9
const spanBSix = document.querySelector("#b-coefficient-six");
const spanRootedDeltaSix = document.querySelector("#rooted-delta-six");
const spanDenominatorSix = document.querySelector("#denominator-six");

// Visuals Width #10
const spanNumerator = document.querySelectorAll(".numerator");
const fractionBar = document.querySelectorAll(".fraction-bar");
const denominatorBox = document.querySelectorAll(".denominator-box");
const denominatorContent = document.querySelectorAll(".denominator-content");

// Final Answers #11
const firstAnswer = document.querySelector("#final-answer-one");
const secondAnswer = document.querySelector("#final-answer-two");

// Solve
solveBtn.addEventListener("click", (e) => {
  // Get input values
  let a = parseFloat(inputA.value);
  let b = parseFloat(inputB.value);
  let c = parseFloat(inputC.value);

  // If no input, set to 0
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

  // If input exceeds size, pop alert and fix size
  if (checkSize(a) || checkSize(b) || checkSize(c)) {
    warningMessage.style.visibility = "visible";
    warningMessage.style.position = "static";
    a = truncNumber(a);
    inputA.value = a;
    b = truncNumber(b);
    inputB.value = b;
    c = truncNumber(c);
    inputC.value = c;
  }

  // Fill numbers of stage one
  updateNumber(spanBOuterOne, b * -1);
  updateNumber(spanBInnerOne, b);
  spanInnerNegativeOne.innerHTML = a * c < 0 ? "+" : "-";
  updateNumber(spanAInner, a < 0 ? a * -1 : a);
  updateNumber(spanC, c < 0 ? c * -1 : c);
  spanOuterNegativeOne.innerHTML = a < 0 ? "-" : "";
  updateNumber(spanAOuter, a < 0 ? a * -1 : a);

  // Fill numbers of stage two
  updateNumber(spanBOuterTwo, b * -1);
  updateNumber(spanBInnerTwo, b * b);
  spanInnerNegativeTwo.innerHTML = a * c < 0 ? "+" : "-";
  updateNumber(spanRightSideInner, b * c < 0 ? 4 * b * c * -1 : 4 * b * c);
  spanOuterNegativeTwo.innerHTML = a < 0 ? "-" : "";
  updateNumber(spanDenominatorTwo, a < 0 ? 2 * a * -1 : 2 * a);

  // Fill numbers of stage three
  updateNumber(spanBThree, b * -1);
  updateNumber(spanDelta, b * b - 4 * a * c);
  updateNumber(spanDenominatorThree, 2 * a);

  // Fill numbers of stage four
  updateNumber(spanBFour, b * -1);
  spanRootedDeltaFour.innerHTML =
    b * b - 4 * a * c < 0
      ? Number(Math.sqrt(4 * a * c - b * b).toFixed(3)) + "i"
      : Number(Math.sqrt(b * b - 4 * a * c).toFixed(3));
  updateNumber(spanDenominatorFour, 2 * a);

  // Fill numbers of stage five
  updateNumber(spanBFive, b * -1);
  spanRootedDeltaFive.innerHTML =
    b * b - 4 * a * c < 0
      ? Number(Math.sqrt(4 * a * c - b * b).toFixed(3)) + "i"
      : Number(Math.sqrt(b * b - 4 * a * c).toFixed(3));
  updateNumber(spanDenominatorFive, 2 * a);

  // Fill numbers of stage six
  updateNumber(spanBSix, b * -1);
  spanRootedDeltaSix.innerHTML =
    b * b - 4 * a * c < 0
      ? Number(Math.sqrt(4 * a * c - b * b).toFixed(3)) + "i"
      : Number(Math.sqrt(b * b - 4 * a * c).toFixed(3));
  updateNumber(spanDenominatorSix, 2 * a);

  // Set visuals width
  for (let i = 0; i < 6; i++) {
    const finalFractionBarWidth = spanNumerator[i].offsetWidth;
    fractionBar[i].style.width = `${finalFractionBarWidth}px`;
    denominatorBox[i].style.width = `${finalFractionBarWidth}px`;
    denominatorContent[
      i
    ].style.width = `${denominatorContent[i].offsetWidth}px`;
  }

  // Fill final answers
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

  // Helper functions
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

  // Display sections after first solution
  for (let obj of outerWrapperDives) {
    obj.style.visibility = "visible";
  }

  e.preventDefault();
});

// Close warning message
closeBtn.addEventListener("click", (e) => {
  warningMessage.style.visibility = "hidden";
  warningMessage.style.position = "absolute";
});
