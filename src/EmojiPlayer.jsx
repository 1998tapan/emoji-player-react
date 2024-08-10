import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import "./EmojiPlayer.css";


export default function EmojiPlayer() {
    const getRandomEmoji = () => {
        const emojis = ["😊", "😂", "😍", "😁", "😎", "😉", "😜"];
        return emojis[Math.floor(Math.random() * emojis.length)];
    }
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: getRandomEmoji() }]);

    const addEmojis = () => setEmojis((currEmojis) => [...currEmojis, { id: uuid(), emoji: getRandomEmoji() }]);
    const deleteEmojis = (id) => setEmojis((currEmojis) => {
        return currEmojis.filter(e => e.id != id)
    })
    const updateAllToHeart = () => setEmojis((currEmojis) => {
        return currEmojis.map(e => ({ ...e, emoji: "❤" }))
    })

    return (
        <div className='container'>
            <div className='emoji-container'>
                {emojis.map((e) => (
                    <div className='emoji' onClick={() => deleteEmojis(e.id)} key={e.id}>{e.emoji}</div>
                ))}
            </div >

            <button onClick={addEmojis}>Add Emoji</button>
            <button onClick={updateAllToHeart}>Spread ❤</button>

        </div>
    );
}