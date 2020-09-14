var updateButton = document.getElementById('update');
// updateButton.addEventListener('click', function () {
//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open('GET', 'https://sportsapi.froshtiet.com/');
//     ourRequest.onload = function () {
//         var ourData = JSON.parse(ourRequest.responseText);
//         updateData(ourData);
//         // console.log(ourData.poolA);

//     }
//     ourRequest.send();
// })
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://esportsmania.froshtiet.com/api/');
ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    updateData(ourData);
    // console.log(ourData.poolA);

}
ourRequest.send();
setInterval(function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://esportsmania.froshtiet.com/api/');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        updateData(ourData);
        // console.log(ourData.poolA);

    }
    ourRequest.send();
}, 5000);

function updateData(data) {
    var pools = document.getElementById('pools');
    pools.innerHTML = "";
    var alpha = ['A', 'B', 'C', 'D', 'E', 'F'];
    var pool = ['Round 1 - Pool A', 'Round 1 - Pool B', 'Round 1 - Pool C', 'Round 2'];
    for (var i = 0; i < 4; i++) {
        pools.innerHTML += `<h1 style="padding-top:40px">${pool[i]}</h1>
        <div class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Sr. NO.</th>
                <th>TEAM</th>
                <th>POINTS</th>
    
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
                <td>1</td>
                <td>${data[pool[i]][0].title}</td>
                <td>${data[pool[i]][0].score}</td>   
              </tr>
              <tr>
                <td>2</td>   
                <td>${data[pool[i]][1].title}</td>
                <td>${data[pool[i]][1].score}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>${data[pool[i]][2].title}</td>
                <td>${data[pool[i]][2].score}</td>   
              </tr>
              <tr>
                <td>4</td>
                <td>${data[pool[i]][3].title}</td>
                <td>${data[pool[i]][3].score}</td>   
              </tr>
           </tbody>
          </table>
    
        </div>`
    }
}
