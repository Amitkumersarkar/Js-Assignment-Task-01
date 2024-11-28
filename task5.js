function waitingTime(interviewTime, serialNumber) {
    if (!Array.isArray(interviewTime) || typeof serialNumber !== "number") {
        return "Invalid Input";
    }
    let totalTime = interviewTime.reduce((sum, time) => sum + time, 0);
    let avgTime = Math.round(totalTime / interviewTime.length);
    let finishedInterview = interviewTime.length;
    let candidateLeft = serialNumber - finishedInterview;
    let waitingTime = avgTime * (candidateLeft > 0 ? candidateLeft : 0);
    return `${waitingTime}`;
}
let interviewTime = [3, 5, 7, 11, 6];
let serialNumber = 10;
console.log(waitingTime(interviewTime, serialNumber));