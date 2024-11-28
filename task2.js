function sendNotification(email) {
    let [userName, domainName] = email.split("@");
    let message = `${userName} Sent You An Email From ${domainName}`;

    return message;
};
let email = "zihad@gmail.com";
// let email = "farhan34@yahoo.com";
// let email = "nadim.naem5@outlook.com";
console.log(sendNotification(email));