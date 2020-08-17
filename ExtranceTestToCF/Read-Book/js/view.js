const view = {}
view.setActiveScreen = (screenName)=>{
    switch(screenName){
        case `home`: 
        document.getElementById(`app`).innerHTML = components.home;
        model.showBook();
        break;
        case `addBook`:
        document.getElementById(`app`).innerHTML = components.addBook;
        break;
    }
}
view.showBook = (data) =>{
    let b = data.filter(function(v, i, a){
        return v.tinhTrang === `Đã đọc`
    })
    console.log(data);
    let tboby = document.getElementById("show");
    tboby.innerHTML = "";
    for(let i=0;i<b.length;i++){
        let html = `<tr onclick="showDetail(${b[i].tenSach});">
        <td style="border: 1px soild black">
        <img src="${b[i].img}" alt="" width="200px" height="150px">
        </td>
        <td><label><h4 style="margin-left: 20px">${b[i].tenSach}</h4></label>
        <br><p style="color: #8f8f8f; margin-left: 20px"">Tác giả: ${b[i].tacGia}</br>
        <br><p style="color: #8f8f8f; margin-left: 20px"">Tình Trạng: ${b[i].tinhTrang}</p></br>
        </td>
        <span class="hover" style="color: white; font-size: 0px; line-height: 0;">Khoảng trắng</span>
        `
        tboby.innerHTML += html;
    }
    let c = data.filter(function(v, i, a){
        return v.tinhTrang === `Chưa đọc`
    })
    let tboby1 = document.getElementById("show1");
    tboby1.innerHTML = "";
    for(let i=0;i<c.length;i++){
        let html = `<tr onclick="showDetail(${c[i].tenSach});">
        <td style="border: 1px soild black">
        <img src="${c[i].img}" alt="" width="200px" height="150px">
        </td>
        <td><label><h4 style="margin-left: 20px">${c[i].tenSach}</h4></label>
        <br><p style="color: #8f8f8f; margin-left: 20px"">Tác giả: ${c[i].tacGia}</br>
        <br><p style="color: #8f8f8f; margin-left: 20px"">Tình Trạng: ${c[i].tinhTrang}</p></br>
        </td>
        <span class="hover" style="color: white; font-size: 0px; line-height: 0;">Khoảng trắng</span>
        `
        tboby1.innerHTML += html;
    }
}
view.setErrosMessage = (elementId, message) => {
    document.getElementById(elementId).innerText = message;
};
function themSach(){
    view.setActiveScreen(`addBook`);
}
function okeAdd(){
    let tacGia = document.getElementById(`tacGia`).value;
    let tenSach = document.getElementById(`tenSach`).value;
    let tinhTrang = document.getElementById(`notify`).value;
    let img = document.getElementById(`link`).value;
    controller.okeAdd(tacGia, tenSach, tinhTrang, img);
}
function okeCancer(){
    view.setActiveScreen(`home`);
}