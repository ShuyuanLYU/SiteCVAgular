exports.calculTime = function(currentTme, creatTime) {
    var timeDiff = parseInt(currentTme.getTime() - creatTime.getTime()) / 1000; //calculation different seconds

    var yearDiff = Math.floor(timeDiff / (365 * 24 * 3600)); //calculate year(s)
    if (yearDiff) {
        return "Il y a " + (yearDiff > 0 ? yearDiff + " année" : "") + (yearDiff > 1 ? "s" : "")
    }

    var leaveYear = timeDiff % (365 * 24 * 3600) // rest of month after year
    var monthDiff = Math.floor(leaveYear / (30 * 24 * 3600)); // calculate month
    if (monthDiff) {
        return "Il y a " + (monthDiff > 0 ? monthDiff + " mois " : "")
    }

    var leaveMonth = timeDiff % (30 * 24 * 3600) // rest of day(s) after month
    var dayDiff = Math.floor(leaveMonth / (24 * 3600)); //calculate day(s)
    if (dayDiff) {
        return "Il y a " + (dayDiff > 0 ? dayDiff + " jour " : "") + (dayDiff > 1 ? "s" : "")
    }

    var leaveDay = timeDiff % (24 * 3600) //rest of hour(s) after day
    var hoursDiff = Math.floor(leaveDay / 3600) //calculate hour(s)
    if (hoursDiff) {
        return "Il y a " + (hoursDiff > 0 ? hoursDiff + " heure" : "") + (hoursDiff > 1 ? "s" : "")
    }

    var leaveHour = timeDiff % (3600) //rest of minuth(s) after hour
    var minutesDiff = Math.floor(leaveHour / (60)) //calculate minuth(s)
    if (minutesDiff > 2) {
        return "Il y a " + minutesDiff + " minutes";
    } else {
        return "Tout à l'heure"
    }
}