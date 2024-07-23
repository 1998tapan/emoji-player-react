import { useState } from 'react';
import "./EmojiPlayer.css";

export default function EmojiPlayer() {
    const [emojis, setEmojis] = useState(['😊']);

    const addEmojis = () => setEmojis((currEmojis) => [...currEmojis, '😁']);

    return (
        <div className='container'>
            <div className='emoji-container'>
                {emojis.map((e) => (
                    <div>{e}</div>
                ))}
            </div >

            <button onClick={addEmojis}>Add Emoji</button>

        </div>
    );
}