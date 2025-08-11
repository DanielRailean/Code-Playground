
function main(){
  const years = 20
  const timesPerYear = 12
  const returnPerYear = 10
  const depositPerMonth = 1000
  const startingBalance = 0

  let balance = startingBalance

  for (let current = 1; current <= years; current++) {
    for (let return_period = 0; return_period < timesPerYear; return_period++) {
      const interest = (balance * (returnPerYear / timesPerYear)) / 100
      // console.log(interest)
      balance = deposit + interest + balance
    }
    const deposit = depositPerMonth * (12 / timesPerYear)
    console.log(balance)
  }
}

main()