"use client"

import { useAppData, User } from "@/src/context/appContext"
import { useRouter } from "next/navigation"

import { useEffect, useState } from "react"

export interface Message {
  _id: string;
  chatId: string;
  sender: string;
  text?: string;
  image?: {
    url: string;
    publicId: string;
  };
  messageType: "text" | "image";
  seen: boolean;
  seenAt?: string;
  createdAt: string;
}

const ChatApp = () => {

  const{isAuth,loading,logoutUser,chats,user:loggedInUser,users,fetchChats,setChats}=useAppData()
  const router=useRouter()
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [siderbarOpen, setSiderbarOpen] = useState(false);
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [showAllUser, setShowAllUser] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingTimeOut, setTypingTimeOut] = useState<NodeJS.Timeout | null>(
    null
  );
  useEffect(()=>{
    if(!isAuth && !loading){
      router.push("/login")
    }
  },[isAuth,loading,router])
  return (
    <div>
     Chatapp
    </div>
  )
}

export default ChatApp
