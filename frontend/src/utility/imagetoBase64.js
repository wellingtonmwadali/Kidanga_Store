{/*convert profile picture to base 64 so as to appear as profile pic*/}
function imagetoBase64(file){
    const reader= new FileReader()
    reader.readAsDataURL(file)

    const data = new Promise((resolve,reject)=>{
        reader.onload = () => resolve(reader.result)
        reader.onerror = err => reject(err)
    })
    return data
}

export {imagetoBase64}