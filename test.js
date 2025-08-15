
function main(){
  const years = 20
  const timesPerYear = 12
  const returnPerYear = 10
  const depositPerMonth = 1000
  const startingBalance = 0
  const yearlyTax = 15.3
  const earlyPenalty = 60

  let balance = startingBalance

  let totalTax = 0
  for (let current = 1; current <= years; current++) {
    let yearInterest = 0
    for (let return_period = 0; return_period < timesPerYear; return_period++) {
      const deposit = depositPerMonth * (12 / timesPerYear)
      const interest = (balance * (returnPerYear / timesPerYear)) / 100
      // console.log(interest)
      yearInterest = yearInterest + interest
      balance = deposit + interest + balance
    }

    console.log("interest: "+yearInterest)
    const tax = (yearInterest) * yearlyTax / 100
    totalTax = totalTax + tax
    balance = balance - tax
    console.log(tax)
    console.log("after tax: " + balance)
  }
  console.log(totalTax)
  console.log(`final: ${balance * (100 - earlyPenalty) / 100}`)
}

main()