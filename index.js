let tb = document.getElementById("tb")



function changename() {

    let nname = prompt("pless inputyour name")
    console.log(nname)
    document.getElementById("hname").innerHTML = nname

}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    document.body.style.background = bgColor;
}


function showdata() {


    let addskill = prompt("pless inputyour skill")
    let row = tb.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = addskill;
    let btn = document.createElement('button');
    btn.textContent = "ลบข้อมูล";
    let i = 8;
    btn.setAttribute("id", i)
    i++;
    cell2.appendChild(btn);

    btn.addEventListener('click', (e) => {
        let btnid = e.target.getAttribute('id')
        // document.getElementById(btnid).innerHTML=''
        document.getElementById("tb").deleteRow(btnid);

    })

}

function deleteRow(id) {
    console.log(id)
    document.getElementById("tb").deleteRow(id);

}