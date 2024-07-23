//change-status
const buttonsChangeStatus = document.querySelectorAll("[button-change-status]");
if(buttonsChangeStatus.length > 0){
      const formChangeStatus = document.querySelector("#form-change-status");
      const path = formChangeStatus.getAttribute("data-path");
     buttonsChangeStatus.forEach( button=>{
         button.addEventListener("click",()=>{
              const statusCurrent = button.getAttribute("data-status");
              const id = button.getAttribute("data-id");
              let statusChange = statusCurrent == "active"?"inactive":"active";
            // console.log(statusChange);
             const action = path +`/${statusChange}/${id}?_method=PATCH`;
             formChangeStatus.action = action;
             formChangeStatus.submit();
         })
   })
}
//End change-status
// Delete Item
const buttonDelete = document.querySelectorAll("[button-delete]");
if(buttonDelete.length > 0){
      const formDeleteItem = document.querySelector("#form-delete-item");
      const path = formDeleteItem.getAttribute("data-path");

    buttonDelete.forEach(button =>{
      button.addEventListener("click",()=>{
       
       const isConfirm = confirm("ban co muon xoa khong?");
       if(isConfirm){
        const id = button.getAttribute("data-id");
        console.log(id);
       const action = `${path}/${id}?_method=DELETE`;
       formDeleteItem.action = action;
       formDeleteItem.submit();}
   })

})
}
// End Delete Item
// update Item
const buttonUpdate = document.querySelectorAll("[button-update]");
if(buttonUpdate.length > 0){
      const formDeleteItem = document.querySelector("#form-update-item");
      const path = formDeleteItem.getAttribute("data-path");

      buttonUpdate.forEach(button =>{
      button.addEventListener("click",()=>{
       
       const isConfirm = confirm("ban co muon thay doi khong khong?");
       if(isConfirm){
        const id = button.getAttribute("data-id");
        console.log(id);
       const action = `${path}/${id}?_method=UPDATE`;
       formDeleteItem.action = action;
       formDeleteItem.submit();}
   })

})
}