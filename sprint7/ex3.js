function getDay(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "luni";
         case 2:
            return "marti";
         case 3:
            return "miercuri";
         case 4:
            return "joi";
         case 5:
            return "vieri";
         case 6:
            return "sambata";
         case 7:
                return "duminica";
    
    }
}

console.log(getDay(4))