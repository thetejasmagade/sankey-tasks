async function fetchData() {
    const res = await fetch('https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817')
    return res.json()
}

window.onload = async (event) => {
    let data = await fetchData()
    data = data.data

    let table = document.querySelector('table')
    table.style.display = 'block'

    let loading = document.querySelector('h1')
    loading.style.display = 'none'

    for (x of data) {
        let tbody = document.getElementById('tbody');
        let newtr = document.createElement("tr")
        newtr.innerHTML = `
            <td id="t-name">${x.name}</td>
            <td id="t-office">${x.office}</td>
            <td id="t-pos">${x.position}</td>
            <td id="t-sal">${x.salary}</td>`
        tbody.appendChild(newtr)
    }

    console.log(data)

};