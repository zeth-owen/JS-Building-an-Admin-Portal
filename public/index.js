async function main() {
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()


    books.forEach(renderBook)

    let responseUpdate = await fetch('http://localhost:3001/updateBook' , {
    method: "PATCH",
    headers: { 
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify ({
        "id" : 3,
        "title": "Legends of Arathrae",

            }),
        });


    let updatedBook = await responseUpdate.json();
        console.log(updatedBook)

}

function renderBook(book) {
    let bookContainer = document.querySelector('.book-container')
    bookContainer.innerHTML += `
        <div class="col-sm-3">
            <div class="card" style="width: 100%;">
                ${book.imageURL ? `
                    <img class="card-img-top" src="${book.imageURL}" />
                `
                : ``}
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Available: ${book.quantity}</h6>
                    <p class="card-text">${book.description}</p>
                </div>
            </div>
        </div>
    `
}

main()
