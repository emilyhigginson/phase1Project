const URL = 'http://localhost:3000/books'

//call functions here:
getBookData()
handleForm()

//get data from json
function getBookData() {
    fetch(URL)
    .then((res) => res.json())
    .then((bookData) => bookData.forEach(renderBookImg))
} 

function renderBookImg(bookObj) {
    const img = document.createElement('img')
    img.src = bookObj.image

    document.getElementById("book-shelf").appendChild(img)
            // click "mark as read" button and change to "read"

    //click book and reveal info
    img.addEventListener('click', function() {
        document.getElementById('book-picture').src = bookObj.image
        document.getElementById('title').innerText = bookObj.title
        document.getElementById('author').innerText= bookObj.author
        document.getElementById('description').innerText= bookObj.description
    }


    )}

let readButton = document.querySelector("#readButton")
readButton.addEventListener('click', function() {
    document.querySelector("#readButton").innerText = "Read!" })
    
    let likeButton = document.querySelector("#like")
    likeButton.addEventListener('click', function() {
        alert("Glad you liked this!")
    })

    let dislikeButton = document.querySelector("#dislike")
    dislikeButton.addEventListener('click', function() {
       alert("Sorry you weren't a fan!")
    })

  


    function handleForm(){

        const newBookForm = document.getElementById('add-book')
    
        newBookForm.addEventListener('submit', (event) => {
            event.preventDefault()
            
            const newTitle = event.target["new-title"].value
            const newAuthor = event.target["new-author"].value
            const newImage = event.target["new-image"].value
            const newDescription = event.target["new-description"].value

            const newBook = {
                title: newTitle,
                author: newAuthor,
                image: newImage,
                description: newDescription,
            }
            fetch(URL, {
                headers: {"Content-Type": "application/json"},
                method: "POST",
                body: JSON.stringify(newBook)
            })
            .then(resp => resp.json())
            .then(newEntity => renderBookImg(newEntity))
            .catch(error => console.error(error))

            event.target.reset()
        }  
        )}