const patchItemOpt = {
    method: "patch",
    cache: "no-cache",
    headers: {
        "Content-Type": "application/json"
    }
} 

var onchange = async (event) => {
    console.log(event);
    /*const url = "/" + event.target.defaultValue;
    patchItemOpt.body = JSON.stringify({
        completed: event.target.checked
    });
    console.log(patchItemOpt);
    const response = await fetch(url, patchItemOpt);
    console.log(response);
    if(!response.ok) {
        alert("someshit goes wrong!");
    }*/
    document.getElementById("formItems").submit();
}

const checkboxes = document.querySelectorAll("input[type=checkbox][name=item-checkbox]");
    
checkboxes.forEach(doc => {
    doc.addEventListener("change", onchange);
});