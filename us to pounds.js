// money conversion to pounds
function UStoPounds(dollarsUSP) {
    let conversionRatePoundsUSP = 0.87;
    let changeUSP = dollarsUSP * conversionRatePoundsUSP;
    return changeUSP
}
console.log(UStoPounds(10.20))
function PoundstoUS(poundsUs) {
    let conversionrateUSP = 1.15;
    let changePUS = poundsUs * conversionrateUSP;
    return changePUS
}
console.log(PoundstoUS(20.10))
function us2poundsundtax(dollarsUSPt) {
    let US2UKLrate = 0.87;
    let uklconvert = dollarsUSPt * US2UKLrate
    let TaxRateInLondon = .20;
    let taxUKL = TaxRateInLondon * uklconvert;
    return uklconvert + taxUKL;
}
console.log(us2poundsundtax(500.99))