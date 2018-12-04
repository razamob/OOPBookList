class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    addBookToList(book){
        const list = document.getElementById('book-list');
        //create TR
        const row = document.createElement('tr');
    
        row.innerHTML= `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="$" class="delete">X<a></td>
        `;
    
        list.appendChild(row);    
    }
    
    showAlert(message, className){
        const div = document.createElement('div');
        //Add classes
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
    
        //Get Parent
        const container = document.querySelector(`.container`);
       //GET form
        const form = document.querySelector(`#book-form`);
    
        container.insertBefore(div,form);
    
        //Timeout after 3 seconds
        setTimeout(function(){
            document.querySelector(`.alert`).remove();
        }, 3000);
    }

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
    }
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit',function(e){
    
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value

    //Instantiating book
    const book = new Book(title, author, isbn);

    //Instantiate UI
    const ui = new UI();


    if(title === '' || author === '' || isbn === ''){
        //Error alert
        ui.showAlert('Please fill in all fields', 'error');
    }
    else{
         //Add book to list
    ui.addBookToList(book);
    ui.showAlert('Booked Added!', 'success');
    ui.clearFields();
    }
    e.preventDefault();
   
});

document.getElementById('book-list').addEventListener('click', function(e){

    const ui = new UI;
    ui.deleteBook(e.target);

    //Show alert
    ui.showAlert('Book has been removed', 'success');

    e.preventDefault();
})