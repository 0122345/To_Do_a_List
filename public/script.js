const date = document.getElementById('date')

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

function dating() {
    const dato = new Date();
     const day = dato.getDay();
     const months = dato.getMonth();
     const yr = dato.getFullYear();

    date.innerHTML = `${month[months]} ${days[day]},${yr}`
}

dating();