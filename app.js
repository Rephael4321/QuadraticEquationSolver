// Form Elements
const button = document.querySelector("button");
const inputA = document.querySelector("#a-value");
const inputB = document.querySelector("#b-value");
const inputC = document.querySelector("#c-value");

// Stage One Spans
const spanNumeratorOne = document.querySelector("#numerator-one");
const spanBOuterOne = document.querySelector("#b-coefficient-outer-one");
const spanBInnerOne = document.querySelector("#b-coefficient-inner-one");
const spanInnerNegativeOne = document.querySelector("#inner-negative-sign-one");
const spanAInner = document.querySelector("#a-coefficient-inner");
const spanC = document.querySelector("#c-coefficient");
const spanOuterNegativeOne = document.querySelector("#outer-negative-sign-one");
const spanAOuter = document.querySelector("#a-coefficient-outer");
// Stage One Bars
const fractionBarOne = document.querySelector(".fraction-bar-stage-one");
const denominatorBoxOne = document.querySelector(".denominator-box-stage-one");
const denominatorContentOne = document.querySelector(
  ".denominator-content-stage-one"
);

// Stage Two Spans
const spanNumeratorTwo = document.querySelector("#numerator-two");
const spanBOuterTwo = document.querySelector("#b-coefficient-outer-two");
const spanBInnerTwo = document.querySelector("#b-coefficient-inner-two");
const spanInnerNegativeTwo = document.querySelector("#inner-negative-sign-two");
const spanRightSideInner = document.querySelector("#right-side-inner");
const spanOuterNegativeTwo = document.querySelector("#outer-negative-sign-two");
const spanDenominatorTwo = document.querySelector("#denominator-two");
// Stage Two Bars
const fractionBarTwo = document.querySelector(".fraction-bar-stage-two");
const denominatorBoxTwo = document.querySelector(".denominator-box-stage-two");
const denominatorContentTwo = document.querySelector(
  ".denominator-content-stage-two"
);

// Stage Three Spans
const spanNumeratorThree = document.querySelector("#numerator-three");
const spanBThree = document.querySelector("#b-coefficient-three");
const spanDelta = document.querySelector("#delta");
const spanDenominatorThree = document.querySelector("#denominator-three");
// Stage Three Bars
const fractionBarThree = document.querySelector(".fraction-bar-stage-three");
const denominatorBoxThree = document.querySelector(
  ".denominator-box-stage-three"
);
const denominatorContentThree = document.querySelector(
  ".denominator-content-stage-three"
);

// Stage Four Spans
const spanBFour = document.querySelector("#b-coefficient-four");
const spanRootedDeltaFour = document.querySelector("#rooted-delta-four");
const spanDenominatorFour = document.querySelector("#denominator-four");
// Stage Five Spans
const spanBFive = document.querySelector("#b-coefficient-five");
const spanRootedDeltaFive = document.querySelector("#rooted-delta-five");
const spanDenominatorFive = document.querySelector("#denominator-five");
// Stage Six Spans
const spanBSix = document.querySelector("#b-coefficient-six");
const spanRootedDeltaSix = document.querySelector("#rooted-delta-six");
const spanDenominatorSix = document.querySelector("#denominator-six");

// Final Stage Spans and Bars
const spanNumeratorFinal = document.querySelectorAll(".final-numerator");
const finalFractionBar = document.querySelectorAll(".final-fraction-bar-stage");
const finalDenominatorBox = document.querySelectorAll(
  ".final-denominator-box-stage"
);
const finalDenominatorContent = document.querySelectorAll(
  ".final-denominator-content-stage"
);

// Final Answers
const firstAnswer = document.querySelector("#final-answer-one");
const secondAnswer = document.querySelector("#final-answer-two");

// Initialized Data - Delete on Production
inputA.value = "1";
inputB.value = "-6";
inputC.value = "8";

button.addEventListener("click", (e) => {
  let a = parseInt(inputA.value);
  let b = parseInt(inputB.value);
  let c = parseInt(inputC.value);

  if (!a) a = 0;
  if (!b) b = 0;
  if (!c) c = 0;

  // Set Spans One
  spanBOuterOne.innerHTML = b * -1;
  spanBInnerOne.innerHTML = b;
  spanInnerNegativeOne.innerHTML = a * c < 0 ? "+" : "-";
  spanAInner.innerHTML = a < 0 ? a * -1 : a;
  spanC.innerHTML = c < 0 ? c * -1 : c;
  spanOuterNegativeOne.innerHTML = a < 0 ? "-" : "";
  spanAOuter.innerHTML = a < 0 ? a * -1 : a;
  // Set Bars One
  const fractionBarWidthOne = spanNumeratorOne.offsetWidth;
  fractionBarOne.style.width = `${fractionBarWidthOne}px`;
  denominatorBoxOne.style.width = `${fractionBarWidthOne}px`;
  denominatorContentOne.style.width = `${denominatorContentOne.offsetWidth}px`;
  denominatorContentOne.style.display = "block";

  // // Set Spans Two
  spanBOuterTwo.innerHTML = b * -1;
  spanBInnerTwo.innerHTML = b * b;
  spanInnerNegativeTwo.innerHTML = a * c < 0 ? "+" : "-";
  spanRightSideInner.innerHTML = b * c < 0 ? 4 * b * c * -1 : 4 * b * c;
  spanOuterNegativeTwo.innerHTML = a < 0 ? "-" : "";
  spanDenominatorTwo.innerHTML = a < 0 ? 2 * a * -1 : 2 * a;
  // Set Bars Two
  const fractionBarWidthTwo = spanNumeratorTwo.offsetWidth;
  fractionBarTwo.style.width = `${fractionBarWidthTwo}px`;
  denominatorBoxTwo.style.width = `${fractionBarWidthTwo}px`;
  denominatorContentTwo.style.width = `${denominatorContentTwo.offsetWidth}px`;
  denominatorContentTwo.style.display = "block";

  // Set Spans Three
  spanBThree.innerHTML = b * -1;
  spanDelta.innerHTML = b * b - 4 * a * c;
  spanDenominatorThree.innerHTML = 2 * a;
  // Set Bars Three
  const fractionBarWidthThree = spanNumeratorThree.offsetWidth;
  fractionBarThree.style.width = `${fractionBarWidthThree}px`;
  denominatorBoxThree.style.width = `${fractionBarWidthThree}px`;
  denominatorContentThree.style.width = `${denominatorContentThree.offsetWidth}px`;
  denominatorContentThree.style.display = "block";

  // Set Spans Four
  spanBFour.innerHTML = b * -1;
  spanRootedDeltaFour.innerHTML =
    b * b - 4 * a * c < 0
      ? Math.round(Math.sqrt(4 * a * c - b * b) * 1000) / 1000 + "i"
      : Math.round(Math.sqrt(b * b - 4 * a * c));
  spanDenominatorFour.innerHTML = 2 * a;

  // Set Spans Five
  spanBFive.innerHTML = b * -1;
  spanRootedDeltaFive.innerHTML =
    b * b - 4 * a * c < 0
      ? Math.round(Math.sqrt(4 * a * c - b * b) * 1000) / 1000 + "i"
      : Math.round(Math.sqrt(b * b - 4 * a * c));
  spanDenominatorFive.innerHTML = 2 * a;

  // Set Spans Six
  spanBSix.innerHTML = b * -1;
  spanRootedDeltaSix.innerHTML =
    b * b - 4 * a * c < 0
      ? Math.round(Math.sqrt(4 * a * c - b * b) * 1000) / 1000 + "i"
      : Math.round(Math.sqrt(b * b - 4 * a * c));
  spanDenominatorSix.innerHTML = 2 * a;

  // Set Final Bars
  for (let i = 0; i < 3; i++) {
    const finalFractionBarWidth = spanNumeratorFinal[i].offsetWidth;
    finalFractionBar[i].style.width = `${finalFractionBarWidth}px`;
    finalDenominatorBox[i].style.width = `${finalFractionBarWidth}px`;
    finalDenominatorContent[
      i
    ].style.width = `${finalDenominatorContent[i].offsetWidth}px`;
    finalDenominatorContent[i].style.display = "block";
  }

  // Set Final Answers
  if (b * b - 4 * a * c < 0) {
    firstAnswer.innerHTML = `(${Math.round((-b / (2 * a)) * 1000) / 1000}, ${
      Math.round((Math.sqrt(4 * a * c - b * b) / (2 * a)) * 1000) / 1000
    }i)`;
    secondAnswer.innerHTML = `(${Math.round((-b / (2 * a)) * 1000) / 1000}, ${
      Math.round(-(Math.sqrt(4 * a * c - b * b) / (2 * a)) * 1000) / 1000
    }i)`;
  } else {
    firstAnswer.innerHTML =
      Math.round(((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)) * 1000) / 1000;
    secondAnswer.innerHTML =
      Math.round(((-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)) * 1000) / 1000;
  }

  console.log(a, b, c);
  e.preventDefault();
});
