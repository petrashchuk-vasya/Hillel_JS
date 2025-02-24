var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" 
    },
];

var trustedEmails = arr
    .map(function(obj) {
        return obj.email;
    })
    .filter(function(email) {
        return /^\w+(\.\w+)?@(gmail\.com|yahoo\.com)$/.test(email);
    }); 

console.log(trustedEmails);
