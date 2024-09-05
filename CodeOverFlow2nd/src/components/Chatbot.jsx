import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
      scroll.current?.scrollIntoView({ behavior: "smooth" });
    });
    return () => unsubscribe();
  }, []);

  return (
    <main className="flex flex-col h-screen bg-gray-100 p-4">
      <div className="flex-grow overflow-y-auto bg-white p-4 shadow-lg rounded-lg">
        <div className="messages-wrapper space-y-4">
          {messages?.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          <span ref={scroll}></span>
        </div>
      </div>
      <div className="mt-4">
        <SendMessage scroll={scroll} />
      </div>
    </main>
  );
};

export default ChatBox;
