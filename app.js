// //  1 Таблица с массивами не получилось , а так одиночные ссылки работают
// function doTable (DOMelement,jsonURL = ""){
//     function tableConstructor(DOMelement){
//         var table = document.createElement("table")
//         table.id = "table"
//         DOMelement.appendChild(table)
//         table.appendChild(document.createElement("thead"))
//         table.appendChild(document.createElement("tbody")) 
//         table.border = 1
//         table.style.fontSize = '10px'
//         var headers = document.getElementById("table").getElementsByTagName("thead")[0]
//         var rowHead = headers.insertRow()
//         var values = document.getElementById("table").getElementsByTagName("tbody")[0]
//         var rowValues = headers.insertRow()
//         fetch(jsonURL).then( json => json.json()).then(luke => {
//             var keys = Object.keys(luke)
//             console.log(keys)  
//             for(var i = 0 ; i < keys.length; i++){
//                 var cell = rowHead.insertCell(i)
//                 cell.innerHTML = keys[i]
//             }
//             for(var i = 0 ; i < keys.length; i++){
//                 var cell = rowValues.insertCell(i)
//                 cell.innerHTML = luke[keys[i]]
//                 if(cell.innerHTML.startsWith("https:")){
//                     cell.onclick = function(){
//                         document.body.removeChild(table)
//                         doTable(document.body, this.innerHTML)
//                      }
//                      if(Array.isArray(cell.innerHTML)){
//                          for(var i = 0; i < cell.innerHTML.length; i++  ){
//                              cell.innerHTML[i].onclick = function(){
//                                 document.body.removeChild(table)
//                                 doTable(document.body, this.innerHTML)
//                              }
//                          }
//                      }
//                 }
//             }
//         })
//     }
//     tableConstructor(DOMelement)
// }
// doTable(document.body,"https://swapi.co/api/people/1/")

// 2
function myfetch(url){
    return new Promise(function (resolve, reject){
        const xhr = new XMLHttpRequest()
        xhr.open("GET", url , true)
        xhr.onload = function() {
            if (this.status == 200) {
              resolve(this.response);
            } else {
              var error = new Error(this.statusText);
              error.code = this.status;
              reject(error);
            }
          }
        xhr.send()
    })
}
const delay = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(console.log('Задержка', t),  t)
  })
}
// 3
Promise.race([myfetch('https://swapi.co/api/people/1/'), delay(500)]).then(res => console.log(res))