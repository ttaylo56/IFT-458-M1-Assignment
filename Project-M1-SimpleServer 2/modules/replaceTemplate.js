module.exports = (htmlStr, loan) => {
  let totalAmountOwed = loan.loanAmount * (1 + loan.interest * loan.loanTermYears);
  let output = htmlStr.replace(/{%ID%}/g, loan.Id);
  output = output.replace(/{%CUSTOMER_NAME%}/g, loan.customerName);
  output = output.replace(/{%PHONE_NUMBER%}/g, loan.phoneNumber);
  output = output.replace(/{%ADDRESS%}/g, loan.address);
  output = output.replace(/{%LOAN_AMOUNT%}/g, loan.loanAmount);
  output = output.replace(/{%INTEREST%}/g, loan.interest);
  output = output.replace(/{%LOAN_TERM_YEARS%}/g, loan.loanTermYears);
  output = output.replace(/{%LOAN_TYPE%}/g, loan.loanType);
  output = output.replace(/{%DESCRIPTION%}/g, loan.description);
  output = output.replace(/{%TOTAL_AMOUNT_OWED%}/g, totalAmountOwed);
  return output;
}

