"use client"

import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from '@/components/ui/sidebar'
import React, { useState, useRef, useEffect } from 'react'
import { data } from './data'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send, MoreVertical, Phone, Video } from 'lucide-react'

const GroupChatCode = () => {
  const [activeNav, setActiveNav] = useState('All Chats')
  const [selectedChat, setSelectedChat] = useState(null)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [selectedChat])

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }

  // Parse timestamp strings into sortable values (lower = more recent)
  const parseTimestamp = (timestamp) => {
    if (timestamp.includes('m ago')) {
      return parseInt(timestamp) // minutes
    } else if (timestamp.includes('h ago')) {
      return parseInt(timestamp) * 60 // hours to minutes
    } else if (timestamp === 'Yesterday') {
      return 24 * 60 // 1 day in minutes
    } else if (timestamp.includes('days ago')) {
      return parseInt(timestamp) * 24 * 60 // days to minutes
    }
    return 999999 // fallback for unknown formats
  }

  // Combine and sort all chats for "All Chats" view
  const getAllChatsSorted = () => {
    const directMessages = data.chatList.map(chat => ({ ...chat, isGroup: false }))
    const groups = data.groupChats.map(chat => ({ ...chat, isGroup: true }))
    return [...directMessages, ...groups].sort((a, b) => parseTimestamp(a.timestamp) - parseTimestamp(b.timestamp))
  }

  const handleChatClick = (chat, isGroup = false) => {
    setSelectedChat({ ...chat, isGroup })
  }

  const ChatItem = ({ chat, isGroup = false, onClick }) => (
    <div
      className={`flex gap-3 items-center p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors ${selectedChat?.id === chat.id && selectedChat?.isGroup === isGroup ? 'bg-blue-50' : ''}`}
      onClick={() => onClick(chat, isGroup)}
    >
      <div className='relative'>
        <Avatar className='bg-gray-800'>
          <AvatarImage src={chat.avatar} alt={chat.name} />
          <AvatarFallback className='bg-gray-800 text-white'>{getInitials(chat.name)}</AvatarFallback>
        </Avatar>
        {!isGroup && chat.isOnline && (
          <div className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white' />
        )}
      </div>
      <div className='flex-1 min-w-0'>
        <div className='flex items-center justify-between mb-1'>
          <p className='font-semibold text-sm truncate'>{chat.name}</p>
          <span className='text-xs text-gray-500 ml-2 flex-shrink-0'>{chat.timestamp}</span>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-xs text-gray-600 truncate flex-1'>{chat.lastMessage}</p>
          {chat.unreadCount > 0 && (
            <Badge className='ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full h-5 min-w-5 flex items-center justify-center text-xs px-1.5'>
              {chat.unreadCount}
            </Badge>
          )}
        </div>
        {isGroup && (
          <p className='text-xs text-gray-400 mt-1'>{chat.memberCount} members</p>
        )}
      </div>
    </div>
  )

  const MessageBubble = ({ message }) => (
    <div className={`flex gap-3 mb-4 ${message.isCurrentUser ? 'flex-row-reverse' : ''}`}>
      {!message.isCurrentUser && (
        <Avatar className='w-8 h-8 bg-gray-800'>
          <AvatarImage src={message.avatar} alt={message.sender} />
          <AvatarFallback className='bg-gray-800 text-white'>{getInitials(message.sender)}</AvatarFallback>
        </Avatar>
      )}
      <div className={`max-w-[70%] ${message.isCurrentUser ? 'text-right' : ''}`}>
        {!message.isCurrentUser && (
          <p className='text-xs font-medium text-gray-700 mb-1'>{message.sender}</p>
        )}
        <div className={`rounded-2xl px-4 py-2 inline-block ${message.isCurrentUser ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
          <p className='text-sm'>{message.content}</p>
        </div>
        <p className='text-xs text-gray-400 mt-1'>{message.timestamp}</p>
      </div>
    </div>
  )

  return (
    <div className='flex w-full bg-white h-screen overflow-hidden'>
      <div className='flex-shrink-0 w-fit h-full flex flex-col'>
        <NavigationMenu>
          <NavigationMenuList>
            {data.navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  onClick={() => setActiveNav(item.title)}
                  isActive={activeNav === item.title}
                  className='w-full'
                >
                  <item.icon className='w-10 h-10' />
                  <span>{item.title}</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <SidebarProvider className="w-fit flex-1 overflow-hidden">
          <Sidebar className='border-r h-full w-fit'>
            <SidebarContent className='h-full'>
              {/* Chat Lists */}
              <ScrollArea className='h-full'>
                {activeNav === 'All Chats' && (
                  <div className='p-2'>
                    <h3 className='text-xs font-semibold text-gray-500 uppercase px-3 py-2'>
                      All Messages
                    </h3>
                    {getAllChatsSorted().map((chat) => (
                      <ChatItem key={`${chat.isGroup ? 'group' : 'dm'}-${chat.id}`} chat={chat} isGroup={chat.isGroup} onClick={handleChatClick} />
                    ))}
                  </div>
                )}

                {activeNav === 'Direct Messages' && (
                  <div className='p-2'>
                    <h3 className='text-xs font-semibold text-gray-500 uppercase px-3 py-2'>
                      Direct Messages
                    </h3>
                    {data.chatList.map((chat) => (
                      <ChatItem key={chat.id} chat={chat} onClick={handleChatClick} />
                    ))}
                  </div>
                )}

                {activeNav === 'Groups' && (
                  <div className='p-2'>
                    <h3 className='text-xs font-semibold text-gray-500 uppercase px-3 py-2'>
                      Groups
                    </h3>
                    {data.groupChats.map((chat) => (
                      <ChatItem key={chat.id} chat={chat} isGroup={true} onClick={handleChatClick} />
                    ))}
                  </div>
                )}

                {activeNav === 'Starred' && (
                  <div className='p-2'>
                    <h3 className='text-xs font-semibold text-gray-500 uppercase px-3 py-2'>
                      Starred Chats
                    </h3>
                    {data.chatList
                      .filter(chat => chat.isStarred)
                      .map((chat) => (
                        <ChatItem key={chat.id} chat={chat} onClick={handleChatClick} />
                      ))}
                    {data.groupChats
                      .filter(chat => chat.isStarred)
                      .map((chat) => (
                        <ChatItem key={chat.id} chat={chat} isGroup={true} onClick={handleChatClick} />
                      ))}
                  </div>
                )}

                {activeNav === 'Settings' && (
                  <div className='p-4'>
                    <h3 className='text-sm font-semibold mb-4'>Settings</h3>
                    <p className='text-xs text-gray-500'>Settings panel coming soon...</p>
                  </div>
                )}
              </ScrollArea>
            </SidebarContent>
          </Sidebar>
        </SidebarProvider>
      </div>

      {/* Main Chat Area */}
      <div className='flex-1 flex flex-col bg-gray-50 h-full overflow-hidden'>
        {selectedChat ? (
          <div className='flex flex-col h-full'>
            {/* Chat Header */}
            <div className='flex-shrink-0 flex items-center justify-between p-4 bg-white border-b'>
              <div className='flex items-center gap-3'>
                <Avatar className='bg-gray-800'>
                  <AvatarImage src={selectedChat.avatar} alt={selectedChat.name} />
                  <AvatarFallback className='bg-gray-800 text-white'>{getInitials(selectedChat.name)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className='font-semibold'>{selectedChat.name}</p>
                  {selectedChat.isGroup ? (
                    <p className='text-xs text-gray-500'>{selectedChat.memberCount} members</p>
                  ) : (
                    <p className='text-xs text-green-500'>{selectedChat.isOnline ? 'Online' : 'Offline'}</p>
                  )}
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <Button variant='ghost' size='icon'><Phone className='w-5 h-5' /></Button>
                <Button variant='ghost' size='icon'><Video className='w-5 h-5' /></Button>
                <Button variant='ghost' size='icon'><MoreVertical className='w-5 h-5' /></Button>
              </div>
            </div>

            {/* Messages Area */}
            <div className='flex-1 min-h-0 overflow-hidden'>
              <ScrollArea className='h-full p-4'>
                {selectedChat.messages && selectedChat.messages.length > 0 ? (
                  <>
                    {selectedChat.messages.map((message) => (
                      <MessageBubble key={message.id} message={message} />
                    ))}
                    <div ref={messagesEndRef} />
                  </>
                ) : (
                  <div className='flex items-center justify-center h-full text-gray-400'>
                    <p>No messages yet. Start the conversation!</p>
                  </div>
                )}
              </ScrollArea>
            </div>

            {/* Message Input */}
            <div className='p-4 bg-white border-t'>
              <div className='flex gap-2'>
                <Input
                  placeholder='Type a message...'
                  className='flex-1'
                />
                <Button size='icon'>
                  <Send className='w-4 h-4' />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex-1 flex items-center justify-center'>
            <div className='text-center text-gray-400'>
              <p className='text-lg font-medium'>Select a chat to start messaging</p>
              <p className='text-sm mt-2'>Choose a conversation from the sidebar</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GroupChatCode