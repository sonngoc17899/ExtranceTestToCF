const components = {}
components.home = `
<div class="title">
        <ul>
            <li><h2>Book</h2></li>
            <li><div class="addBook" onclick="themSach()">Thêm sách</div><li>
        </div>
        <div class="container">
            <div class="sach-da-doc">
            <h2>Sách đã đọc</h2>
        <table class="table-borderless">
            <tbody id="show">
        </tbody>
    </table>
    <div class="sach-chua-doc">
                <h2>Sách chưa đọc</h2>
                <table class="table-borderless">
                    <tbody id="show1">
                </tbody>
            </table>
            </div>
        </div>
            </div>
            `
let item = `<div class="item">
<div class="img"></div>
<div class="info-seller">
  <h3 class="name"></h3>
  <div class="price"></div>
</div>
</div>`
components.addBook = `
<div class="addBook-container">
    <h2>Thêm sách</h2>
    <div>Tên sách</div>
    <input id="tenSach" type="text" placeholder="Nhập tên sách">
    <div class="erros" id="erros-tenSach"></div>
    <div>Tác Giả</div>
    <input id="tacGia" type="text" placeholder="Nhập tên tác giả">
    <div class="erros" id="erros-tacGia"></div>
      <div class="notify">
      <label>Tình Trạng:</label>
      <select id="notify">
      <option value="Đã đọc">Đã đọc</option>
      <option value="Chưa đọc">Chưa đọc</option>
  </select>
      </div>
      <div>Thêm ảnh(điền vào link ảnh html://...)</div>
      <input id="link" type="text" placeholder="Link image">
      <div class="erros" id="erros-img"></div>
      <div class="okAdd">
        <button class="btn" onclick="okeAdd()">Xác nhận thêm</button>
        <button class="btn" onclick="okeCancer()">Hủy</button>
      </div>
    </div>`;
