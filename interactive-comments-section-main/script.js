    import Data from './Data.js'
    
    let upvote = document.querySelectorAll('.upvote')
    let downvote = document.querySelectorAll('.downvote')
    let voteCount = document.querySelectorAll('.vote-count')
    
    for (let index = 0; index < voteCount.length; index++) {
        voteCount[index].textContent = 0 
    }

    for (let index = 0; index < upvote.length; index++) {
        upvote[index].addEventListener('click', function(){
            voteCount[index].innerText = eval(parseInt(voteCount[index].innerText) + 1)
        })   
    }
    for (let index = 0; index < downvote.length; index++) {
        downvote[index].addEventListener('click', function(){
            if(voteCount[index].innerText > 0){
           voteCount[index].innerText = eval(parseInt(voteCount[index].innerText) - 1) 
        }   
    })
}






let replyImage = document.querySelectorAll('.reply-img')
let reply_ = document.querySelectorAll('#reply')
let chatWrapper = document.querySelectorAll('.chat-card-wrapper')

for (let index = 0; index < replyImage.length; index++) {
    let reply = document.getElementById('reply-cont')
    replyImage[index].addEventListener('click', function(){
        chatWrapper[index].appendChild(reply)
        reply.style.display = 'block'
    })
    reply_[index].addEventListener('click', function(){
        chatWrapper[index].append(reply)
        
        reply.style.display = 'block'
        reply.style.marginLeft = '13%'
    })
   
}

let input = document.querySelectorAll('input')


//Get data and populate the template

let data = new Data()
let avatar = document.querySelector('#avatar')
let user = document.querySelector('#user')
let date = document.querySelector('#date')
let chatContent = document.querySelector('#chat-content')

user.textContent = data.data.comments[0].user.username
avatar.setAttribute('src', data.data.comments[0].user.image.png)
date.textContent = data.data.comments[0].createdAt
chatContent.textContent = data.data.comments[0].content

let avatar2 = document.querySelector('#avatar2')
let user2 = document.querySelector('#user2')
let date2 = document.querySelector('#date2')
let chatContent2 = document.querySelector('#chat-content2')

user2.textContent = data.data.comments[1].user.username
avatar2.setAttribute('src', data.data.comments[1].user.image.png)
date2.textContent = data.data.comments[1].createdAt
chatContent2.textContent = data.data.comments[1].content

let avatar3 = document.querySelector('#avatar3')
let user3 = document.querySelector('#user3')
let date3 = document.querySelector('#date3')
let chatContent3 = document.querySelector('#chat-content3')

user3.textContent = data.data.comments[1].replies[0].user.username
avatar3.setAttribute('src', data.data.comments[1].replies[0].user.image.png)
date3.textContent = data.data.comments[1].replies[0].createdAt
chatContent3.innerHTML = `<b style='color='blue'>@</b>${data.data.comments[1].replies[0].replyingTo} 
  ${data.data.comments[1].replies[1].content}`

//Accept Data 

let avatar4 = document.querySelector('#avatar4')
let user4 = document.querySelector('#user4')
let date4 = document.querySelector('#date4')
let chatContent4 = document.querySelector('#chat-content4')

user4.textContent = data.data.comments[1].replies[1].user.username

avatar4.setAttribute('src', data.data.comments[1].replies[1].user.image.png)
date4.textContent = data.data.comments[1].replies[1].createdAt
chatContent4.textContent = data.data.comments[1].replies[1].content

// delete function

let delete_ = document.querySelector('#delete')
let cont = document.getElementById('chat-wrapper')
let cardDelete = document.getElementById('chat-card-delete')

delete_.addEventListener('click', function(){
    cont.style.backgroundColor = ''
    cardDelete.style.display = 'block'
})

window.onclick = function(e){
    if(e.target == cardDelete){
        cardDelete.style.display ='none'
    }
}

let cancelButton = document.getElementById('cancel-button')
let deleteButton = document.getElementById('delete-button')

cancelButton.addEventListener('click', function(){
    cardDelete.style.display = 'none'
})

deleteButton.addEventListener('click', function(){
    delete_.parentElement.parentElement.parentElement.style.display = 'none'
    cardDelete.style.display = 'none'
})

// edit function

let edit_ = document.querySelector('#edit')
let content4 = document.getElementById('content4')
edit_.addEventListener('click', function(){
    let div = document.createElement('div')
    div.setAttribute('id', 'updateCont')
    const button = document.createElement('button')
    let buttonText = document.createTextNode('Update')
    button.append(buttonText)
    let input = document.createElement('textarea')
    div.append(input)
    div.append(button)
    
    div.setAttribute("style", 
    "width: 80%; height: 80%; margin: 10px; margin-left: 20px;cursor: pointer; border-radius: 5px;border: 1px solid hsl(239, 57%, 85%);")

    input.setAttribute('style', 'width : 100%; height : 90%; margin-top: -10px;   cursor: pointer; border-radius: 5px;border: 1px solid hsl(239, 57%, 85%);')

    button.setAttribute('style', ` width: 10%;height: 40px; margin-top: 20px;
    color: #fff;
    background-color: hsl(238, 40%, 52%);
    border: none;
    position: relative;
    right: -600px;
    top : -100px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;`)

    localStorage.setItem(
        'currentContent',
        chatContent4.textContent
    )
    let currentContent = localStorage.getItem("currentContent")
    input.value  = currentContent
    content4.parentNode.replaceChild(div, content4)
    button.setAttribute('id', 'updateButton')
    
})

let updateButton = document.getElementById('updateButton')
let updateCont = document.getElementById('updateCont')

if(updateButton){
updateButton.addEventListener('click', function(){
    localStorage.setItem('currentContent', input.value)
    content4.textContent = localStorage.getItem('currentContent')
    updateCont.parentNode.replaceChild(updateCont, content4)
})
}

//reply 
const replyAvatar = document.querySelector('#reply-avatar')
replyAvatar.setAttribute('src', data.data.currentUser.image.png)

//send
let sendAvatar = document.getElementById('send-avatar')
sendAvatar.setAttribute('src', data.data.currentUser.image.png)
const sendText = document.getElementById('send-text').textContent
const userDiv = document.getElementById('currentUser')
const sendButton = document.querySelector('#send')
const mainChatWrapper = document.getElementById('chat-wrapper')

sendButton.onclick = function(){
    let userDiv2 = userDiv
    mainChatWrapper.append(userDiv2)
}