// button status
const buttonsStatus = document.querySelectorAll("[button-status]");
if (buttonsStatus.length > 0) {
  let url = new URL(window.location.href);
  buttonsStatus.forEach((button) => {
    button.addEventListener("click", () => {
      const status = button.getAttribute("button-status");

      if (status) {
        url.searchParams.set("status", status);
      } else {
        url.searchParams.delete("status");
      }
      window.location.href = url.href;
    });
  });
}
//End button status
// Form search
const formSearch = document.querySelector("#form-search");
if (formSearch) {
    let url = new URL(window.location.href);
  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    const keyword = e.target.elements.keyword.value;
    if (keyword) {
      url.searchParams.set("keyword", keyword);
    } else {
      url.searchParams.delete("keyword");
    }
    window.location.href = url.href;
  });
}
// End Form search
// pagination
const buttonsPagination = document.querySelectorAll("[button-pagination]");
if(buttonsPagination){
  let url = new URL(window.location.href);
  buttonsPagination.forEach((button) => {
    button.addEventListener("click", () => {
      const page = button.getAttribute("button-pagination");
      console.log(page);
      if (page) {
        url.searchParams.set("page", page);
      } else {
        url.searchParams.delete("page");
      }
      window.location.href = url.href;
    });
  });
}
// End pagination
// checkbox Multi
const checkboxMulti = document.querySelector("[checkbox-multi]");
if(checkboxMulti) {
  const inputCheckAll = checkboxMulti.querySelector("input[name='checkall']");
  const inputsId = document.querySelectorAll("input[name='id']");
  inputCheckAll.addEventListener("click",()=>{
    console.log(inputCheckAll.checked);
    if(inputCheckAll.checked ){
        inputsId.forEach(item =>{
          item.checked = true;
        })
    }else{
      inputsId.forEach(item =>{
        item.checked = false;
      });
    }
  });
  inputsId.forEach(input =>{
     input.addEventListener("click",()=>{
      const countChecked = checkboxMulti.querySelectorAll("input[name='id']:checked").length;
      if(inputsId.length == countChecked) {
        inputCheckAll.checked = true;
      }else{
        inputCheckAll.checked = false;
      }
     }) ;
  });
}
// End checkbox Multi

// Form Change Multi
const formChangeMulti = document.querySelector("[form-change-multi]");
if(formChangeMulti){
  formChangeMulti.addEventListener("submit",(e)=>{
   e.preventDefault();

   const checkboxMulti = document.querySelector("[checkbox-multi]");
   const inputsChecked = checkboxMulti.querySelectorAll("input[name='id']:checked");
  
   if(inputsChecked.length > 0){
    let ids =[];
    const inputIds = formChangeMulti.querySelector("input[name='ids']");
   
    inputsChecked.forEach(input=>{
      const id = input.value;
      ids.push(id);
    });
    
    console.log(ids.join(", "));
    inputIds.value = ids.join(", ");
    formChangeMulti.submit();
   }else{
    alert("vui long chon it nhat 1 ban ghi")
   }
  });
}
// End Form Change Multi
