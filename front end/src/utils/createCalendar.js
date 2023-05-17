

function createCalendar(year,month){
    let k =[];
    let monthNumber = month - 1;
    let date = new Date(year,monthNumber);

    for (let i = 0; i < getDay(date); i++){
       let m = {
           "id": "empty",
           "day": 0
        }

        k.push(m);
    }
    while (date.getMonth() == monthNumber){
        
        //k.push(date.getDate());
        //date.setDate(date.getDate() + 1);
        
       
       let j = {
            "id": "day",
            "day": date.getDate(),
            "profit": ""
       }
       k.push(j);
       date.setDate(date.getDate() + 1);
       
    }
    if(getDay(date) != 0){
        for (let i = getDay(date); i < 7; i++){
            //k.push(0);
            
            let m = {
                "id": "empty",
                "day": 0
            }
            k.push(m);
            
        }
    }

    return k;
    
    
}
function getDay(dat){
    let day = dat.getDay();
    if (day == 0){
        day = 7;
    }
    return day;
}

export function create(){
    createCalendar(2023,5)
}


export default createCalendar;