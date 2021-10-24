const data = Object.freeze([1, 2, 3, 4]);
const addEmoji = (val) => val.toString() + "<3";
const emojiData = data.map(addEmoji);
console.log(emojiData);
