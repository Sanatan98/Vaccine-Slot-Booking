function dispData(){
    var output=document.getElementById('print');
    JSON.parse(localStorage.getItem('formData')).array.forEach(data => {
        output.innerHTML +=`
        <h2>name${data.nam}</h2>
        <h2>age:${data.age}</h2>
        <h2>email:${data.pho}</h2>
        <h2>phone:${data.adh}</h2>
        <h2>adhaar:${data.add}</h2>
        <h2>address:${data.dat}</h2>
        `
    });

}
dispData();