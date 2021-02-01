function showNotification() {
    const notification = new Notification("New message from PNC !", {
        body: "Dear Students, Good luck on your exam!",
        icon: "../pn-logo.png"
    });

    notification.onclick = (e) => {
        window.location.href = "https://timetables2.pnc.passerellesnumeriques.org/calendar/students/"
    }
}


// default ,granted, denied

console.log(Notification.permission);

let checkPermission = Notification.permission;

if (checkPermission === "granted") {
    //alert("We have permission")
    showNotification()
}else if (checkPermission !== "denied") {
    Notification.requestPermission().then(permission => {
        // console.log(permission)
        if (permission === "granted") {
            showNotification()
        }
    });
}