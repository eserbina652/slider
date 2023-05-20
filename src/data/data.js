let data = []
for (let i = 1; i <=4; i++) {
    data.push(i)
}

export {data}

let dropdownDataDefault = [10, 20, 50, 100]
let dropdownData = []

for (let num of dropdownDataDefault) {
    if ((data.length/num)>=1){
        dropdownData.push(num)
    } else {
        break;
    }
}

if (dropdownData.length===0){
    dropdownData.push(data.length)
}


export {dropdownData}