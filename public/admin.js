async function retrieve() {
    let response = await fetch ('http://localhost:3001/listBooks',{
       method: 'GET' 
    })
    let books = await response.json()
    console.log (books)
    books.forEach(display)
}



function display(books) {
    let mainRoot = document.getElementById('root');
    let bookList = document.createElement('li');
    bookList.textContent = books.title;
    mainRoot.append(bookList);

    let input = document.createElement('input');
    input.type = 'number';
    bookList.append(input);

    let submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'submit';
    bookList.append(submit);

    submit.addEventListener('click', async () => {
        
    let responseBook = await fetch('http://localhost:3001/updateBook' , {
        method: "PATCH",
        headers: { 
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify ({
            "id" : books.id,
            'quantity' : input.value
    
    
                }),
            });
            let bookQuantity = await responseBook.json()
            console.log(bookQuantity)
    } )

}

retrieve()