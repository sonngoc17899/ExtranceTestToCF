const controller = {}
controller.okeAdd = (tacGia, tenSach, tinhTrang, img) =>{
    if(tenSach === ``){ view.setErrosMessage(`erros-tenSach`, `Vui lòng nhập tên sách`);
}else view.setErrosMessage(`erros-tenSach`, ``);
if(tacGia===``){
        view.setErrosMessage(`erros-tacGia`, `Vui lòng nhập tên tác giả`);
}else view.setErrosMessage(`erros-tacGia`, ``);
if(img===``){
    view.setErrosMessage(`erros-img`, `Vui lòng nhập link ảnh`);
}else view.setErrosMessage(`erros-img`, ``);
if(tacGia !== `` && tenSach !== `` && img !== ``){
model.okeAdd(tacGia, tenSach, tinhTrang, img)
}
}
