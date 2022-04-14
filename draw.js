function draw(arr){
    var output = "<table>"
    for(i=0;i<arr.length;i++){
        output += "<tr>"
        for(j=0;j<arr[0].length;j++){
            output += "<td>"
            output += `<div style="background:hsl(0deg 0% ${arr[i][j]*100}%);width:1em;height:1em;"></div>`
            output += "</td>"
        }
        output += "</tr>"
    }
    output += "<table>"
    return output
}