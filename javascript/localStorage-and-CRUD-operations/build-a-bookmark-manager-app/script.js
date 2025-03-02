const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const categoryName = document.querySelector(".category-name");

const addBookmarkBtn = document.getElementById("add-bookmark-button");
const viewCategoryBtn = document.getElementById("view-category-button");

const closeFormBtn = document.getElementById("close-form-button");
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form");

const closeListBtn = document.getElementById("close-list-button");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");

addBookmarkBtn.addEventListener("click", () => {
  const category = document.getElementById("category-dropdown").value;
  categoryName.innerText = category;
  displayOrCloseForm();
});

addBookmarkBtnForm.addEventListener("click", () => {
  const name = formSection.querySelector("#name").value;
  const category = categoryName.innerText;
  const url = formSection.querySelector("#url").value;
  const bookmarks = getBookmarks();
  const bookmark = {
    name: name,
    category: category,
    url: url,
  };
  
  bookmarks.push(bookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  formSection.querySelector("#name").value = '';
  formSection.querySelector("#url").value = '';
  displayOrCloseForm();
})

viewCategoryBtn.addEventListener("click", () => {
  const category = document.getElementById("category-dropdown").value;
  const categoryName = bookmarkListSection.querySelector(".category-name");
  const categoryList = document.getElementById("category-list");
  const bookmarks = getBookmarks().filter(bookmark => bookmark.category === category);
  categoryName.innerText = category;
  categoryList.innerHTML = '';

  if (!bookmarks.length) {
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
  } else {
    bookmarks.forEach(bookmark => {
      categoryList.innerHTML += 
`<div>
  <input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="${bookmark.category}">
  <label for="${bookmark.name}">
    <a href="${bookmark.url}">${bookmark.name}</a>
  </label>
</div>`;
    })
  }
  displayOrHideCategory();
});

deleteBookmarkBtn.addEventListener("click", () => {
  const categoryList = document.getElementById("category-list");
  const inputs = categoryList.querySelectorAll("input");
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  inputs.forEach(input => {
    if (input.checked) {
      const index = bookmarks.findIndex(bookmark => bookmark.name === input.id && bookmark.category === input.name);
      bookmarks.splice(index, 1);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      input.parentElement.remove();
    }
  });
  if (categoryList.innerHTML === '') {
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
  }
});

closeFormBtn.addEventListener("click", () => {
  displayOrCloseForm();
});

closeListBtn.addEventListener("click", () => {
  displayOrHideCategory();
});

const getBookmarks = () => {
  try {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    if (Array.isArray(bookmarks) && bookmarks.every(item => item.hasOwnProperty("name") && item.hasOwnProperty("category") && item.hasOwnProperty("url"))) {
      return bookmarks;
    }
    return [];
  } catch (error) {
    return [];
  }
}

const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

// localStorage.removeItem("bookmarks");