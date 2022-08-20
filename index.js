const myEmojis = ["📚","👩🏻‍💻", "😴"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const randomEmoji = document.getElementById("random-emoji")
const emojiArr= ["🥳", "👾", "👋", "🎃", "🦊", "🦋", "🌞", "😴", "💩", "👻", "👩🏻‍💻", "👨🏻‍💻", "🐶", "🐱", "🐭", "🐹",
"🐰", "🐼", "🎂", "🐻", "🐨", "🐯", "🦁", "🐠", "🐳", "🍀", "🌺", "⛄️", "🍔", "🍟", "🍕", "🍩", "⚽️", "🏀",
"🏈", "🏆", "🥇", "📚", "🦄"]
const message = document.getElementById("message")

function deleteMessage() {
    if (message.textContent) {
        message.textContent = ""
    }  
}
 
randomEmoji.addEventListener("click", function(){
    for (let i = 0; i < emojiArr.length; i++) {
        let randomEmojiItem = Math.floor(Math.random() * emojiArr.length)
        emojiInput.value = emojiArr[randomEmojiItem]
        deleteMessage()
    }
    if (emojiInput.value === "🦄") {
        message.textContent = "Woohoo! That's a special one!"
    }
})

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement("span")
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function(){
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function(){
    myEmojis.shift()
    renderEmojis()
})



