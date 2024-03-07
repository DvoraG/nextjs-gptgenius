'use client';

import { useState } from "react";
import styles from '@/styles/chat.module.css';
import { useMutation } from "@tanstack/react-query";
import { generateChatResponse } from "@/utils/action";

const Chat = () => {
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');
    const {mutate} = useMutation({
      mutationFn: (message) => generateChatResponse(message)
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(text);
    };
  return (
    <div className={styles.container}>
      <div>
        <h2>messages</h2>
      </div>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <input 
          id='message'
          type='text' 
          placeholder='Message GeniusGpt' 
          className={styles.textInput} 
          value={text} 
          required
          onChange={(e) => setText(e.target.value)} />
          <button className={`btn btn-primary ${styles.submit}`} type='submit'>ask question</button>
      </form>
    </div>
  );
}

export default Chat;