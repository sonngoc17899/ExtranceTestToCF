const model = {}
model.collectionName = `Book`;
model.books = undefined;
model.showBook = () =>{
    firebase.firestore().collection(`Book`).get().then(res => {
        const data = utils.getDataFromDocs(res.docs)
        model.books = data;
        console.log(data[0].data);
        view.showBook(data[0].data);
      })
}
model.okeAdd= (tacGia, tenSach, tinhTrang, img) =>{
    let push = {
        tenSach: tenSach,
        tacGia: tacGia,
        img: img,
        tinhTrang: tinhTrang
    }
    const dataToUpdate = {
        data: firebase.firestore.FieldValue.arrayUnion(push),
      }
      firebase.firestore()
      .collection(model.collectionName)
      .doc(`VfYHKcEa0V1AWtHsCf0F`)
      .update(dataToUpdate)
    view.setActiveScreen(`home`);
    firebase.firestore().collection(`Book`).get().then(res => {
        const data = utils.getDataFromDocs(res.docs)
        model.books = data;
        console.log(data[0].data);
        view.showBook(data[0].data);
      })
}