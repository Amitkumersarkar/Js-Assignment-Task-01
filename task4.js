
function calculateFinalScore({ name, testScore, schoolGrade, isFamily }) {

    if (typeof name !== "string" || typeof testScore !== "number" || testScore >= 50 || typeof schoolGrade !== "number" || schoolGrade >= 30 || typeof isFamily !== "boolean") {

        return "Invalid Input";

    }
    let parentProfessionScore = isFamily ? 20 : 0;
    let totalScore = testScore + schoolGrade + parentProfessionScore;
    return totalScore >= 80;
}
let studentDetails = {
    name: 'Rajib',
    testScore: 45,
    schoolGrade: 25,
    isFamily: true,
};
console.log(calculateFinalScore(studentDetails));