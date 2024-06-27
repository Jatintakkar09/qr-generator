// const reqUrl=`https://api.qrserver.com/v1/create-qr-code/?data=${value}&amp;size=100x100`

const image=document.querySelector(".image")
const input=document.querySelector("input")
const button=document.querySelector("button")



button.addEventListener("click",()=>{
    fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${input.value}&amp;size=100x100'`)
    .then((Response)=>{
        return Response.blob();
    })
    .then((blob)=>{
        const ObjectURL=URL.createObjectURL(blob)
        input.innerHTML=" ";
        image.innerHTML=`<img src="${ObjectURL}">`
    }).catch()
     
})