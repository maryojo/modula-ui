"use client"

import React, { useState } from 'react';
import {
    Mic,
    MicOff,
    Video,
    VideoOff,
    PhoneOff,
    MoreVertical,
    Smile,
    Hand,
    Users,
    MessageSquare,
    ChevronLeft,
    Link as LinkIcon,
    UserPlus,
    Maximize2,
    Pin,
    ChevronDown
} from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoConferencePage() {
    const [isMicOn, setIsMicOn] = useState(true);
    const [isVideoOn, setIsVideoOn] = useState(true);
    const [activeTab, setActiveTab] = useState('participants');

    const participants = [
        { id: 1, name: "Ahmad Septimus (You)", email: "ahmd_septimus@mail.com", image: "https://i.pravatar.cc/150?u=1", isMuted: false, isVideoOn: true, isMe: true },
        { id: 2, name: "Lydia Stanton", email: "ldya_stant@mail.com", image: "https://i.pravatar.cc/150?u=2", isMuted: false, isVideoOn: true },
        { id: 3, name: "Maria Carder", email: "marcarder@mail.com", image: "https://i.pravatar.cc/150?u=3", isMuted: true, isVideoOn: true },
        { id: 4, name: "Jordyn Bergson", email: "jordynberg@mail.com", image: "https://i.pravatar.cc/150?u=4", isMuted: true, isVideoOn: true },
        { id: 5, name: "Maria Mango", email: "mariamango@mail.com", image: "https://i.pravatar.cc/150?u=5", isMuted: true, isVideoOn: true },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex h-screen w-full bg-[#1C1C1E] text-white overflow-hidden font-sans"
        >
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col p-4 gap-4">

                {/* Header */}
                <motion.header variants={itemVariants} className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-4">
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <ChevronLeft className="w-5 h-5 text-gray-400" />
                        </motion.button>
                        <div>
                            <h1 className="text-base font-semibold">Design Team Reporting</h1>
                            <p className="text-xs text-gray-400">09:45, 03 Sep 2025</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 bg-[#2C2C2E] px-3 py-1.5 rounded-full">
                        <motion.div
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 bg-red-500 rounded-full"
                        />
                        <span className="text-xs font-medium">40:12:32</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-[#2C2C2E] px-3 py-1.5 rounded-full text-xs text-gray-400 max-w-[200px] truncate">
                            <LinkIcon className="w-3 h-3" />
                            <span className="truncate">https://meet.us/j/123456789?pwd=abc123xyz...</span>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
                        >
                            <UserPlus className="w-4 h-4" />
                            Invite People
                        </motion.button>
                    </div>
                </motion.header>

                {/* Main Stage */}
                <main className="flex-1 flex flex-col gap-4 relative">
                    {/* Active Speaker */}
                    <motion.div variants={itemVariants} className="flex-1 relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 group">
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
                            alt="Active Speaker"
                            className="w-full h-full object-cover"
                        />

                        {/* Top Right Controls */}
                        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <motion.button whileHover={{ scale: 1.1 }} className="p-2 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white">
                                <Pin className="w-4 h-4" />
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.1 }} className="p-2 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white">
                                <Maximize2 className="w-4 h-4" />
                            </motion.button>
                        </div>

                        {/* Bottom Left Label */}
                        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                            <UserPlus className="w-3 h-3 text-white" /> {/* Placeholder for user icon */}
                            <span className="text-sm font-medium">Lydia Staton</span>
                        </div>

                        {/* Bottom Right Audio Visualizer (Mock) */}
                        <div className="absolute bottom-4 right-4 bg-[#8B5CF6] p-2 rounded-full">
                            <div className="flex gap-0.5 items-center h-4">
                                {[1, 2, 3, 2, 1].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: [h * 2, h * 6, h * 2] }}
                                        transition={{ duration: 0.5 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-0.5 bg-white rounded-full"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Participants Grid (Bottom) */}
                    <motion.div variants={itemVariants} className="h-40 grid grid-cols-4 gap-4">
                        {/* Participant 1 */}
                        <div className="relative rounded-2xl overflow-hidden bg-zinc-800 group">
                            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Participant" />
                            <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-medium">
                                Maria Mango
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/40 backdrop-blur-md p-1.5 rounded-full">
                                <MicOff className="w-3 h-3 text-red-400" />
                            </div>
                        </div>
                        {/* Participant 2 */}
                        <div className="relative rounded-2xl overflow-hidden bg-zinc-800 group">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Participant" />
                            <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-medium">
                                Jordyn Bergson
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/40 backdrop-blur-md p-1.5 rounded-full">
                                <MicOff className="w-3 h-3 text-red-400" />
                            </div>
                        </div>
                        {/* Participant 3 */}
                        <div className="relative rounded-2xl overflow-hidden bg-zinc-800 group">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Participant" />
                            <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-medium">
                                Maria Carder
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/40 backdrop-blur-md p-1.5 rounded-full">
                                <MicOff className="w-3 h-3 text-red-400" />
                            </div>
                        </div>
                        {/* Participant 4 (You) */}
                        <div className="relative rounded-2xl overflow-hidden bg-zinc-800 border-2 border-[#8B5CF6] group">
                            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Participant" />
                            <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-medium">
                                You
                            </div>
                            <div className="absolute bottom-2 right-2 bg-[#8B5CF6] p-1.5 rounded-full">
                                <div className="flex gap-0.5 items-center h-3">
                                    {[1, 2, 1].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: [h * 2, h * 5, h * 2] }}
                                            transition={{ duration: 0.4 + i * 0.1, repeat: Infinity }}
                                            className="w-0.5 bg-white rounded-full"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Control Bar */}
                    <motion.div
                        initial={{ y: 100, x: "-50%" }}
                        animate={{ y: 0, x: "-50%" }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                        className="absolute bottom-6 left-1/2 flex items-center gap-2 bg-[#2C2C2E]/90 backdrop-blur-xl px-4 py-2 rounded-full border border-white/5 shadow-2xl z-10"
                    >
                        <div className="flex items-center gap-1 pr-2 border-r border-white/10">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMicOn(!isMicOn)}
                                className={cn("p-3 rounded-full transition-colors", isMicOn ? "hover:bg-white/10 text-white" : "bg-red-500/20 text-red-500 hover:bg-red-500/30")}
                            >
                                {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                            </motion.button>
                            <button className="p-1 hover:bg-white/10 rounded-full text-gray-400">
                                <ChevronDown className="w-3 h-3" />
                            </button>
                        </div>

                        <div className="flex items-center gap-1 pr-2 border-r border-white/10">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsVideoOn(!isVideoOn)}
                                className={cn("p-3 rounded-full transition-colors", isVideoOn ? "hover:bg-white/10 text-white" : "bg-red-500/20 text-red-500 hover:bg-red-500/30")}
                            >
                                {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                            </motion.button>
                            <button className="p-1 hover:bg-white/10 rounded-full text-gray-400">
                                <ChevronDown className="w-3 h-3" />
                            </button>
                        </div>

                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="p-3 hover:bg-white/10 rounded-full text-white transition-colors">
                            <Smile className="w-5 h-5" />
                        </motion.button>

                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="p-3 hover:bg-white/10 rounded-full text-white transition-colors">
                            <Hand className="w-5 h-5" />
                        </motion.button>

                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="p-3 hover:bg-white/10 rounded-full text-white transition-colors">
                            <MoreVertical className="w-5 h-5" />
                        </motion.button>

                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="ml-2 p-3 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors">
                            <PhoneOff className="w-5 h-5" />
                        </motion.button>
                    </motion.div>
                </main>
            </div>

            {/* Right Sidebar */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-[380px] bg-[#F2F2F7] p-4 flex flex-col gap-4 text-black"
            >

                {/* AI Summary Card */}
                <motion.div variants={itemVariants} className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-bold text-lg">AI Summary</h2>
                    </div>

                    <div className="space-y-3">
                        <div>
                            <h3 className="text-sm font-semibold mb-2">Key Points Discussed:</h3>
                            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                                <li>Project timeline updates and milestones.</li>
                                <li>Budget allocation for Q4 marketing campaigns.</li>
                                <li>Client feedback on the latest product prototype.</li>
                                <li>Upcoming deadlines for design and development teams.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold mb-2">Decisions Made:</h3>
                            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                                <li>Approved additional budget for digital ads.</li>
                            </ul>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white py-2.5 rounded-xl font-medium transition-colors mt-2"
                    >
                        Send By Email
                    </motion.button>
                </motion.div>

                {/* Participants / Chat Card */}
                <motion.div variants={itemVariants} className="bg-white rounded-2xl p-5 shadow-sm flex-1 flex flex-col overflow-hidden">
                    {/* Tabs */}
                    <div className="flex bg-gray-100 p-1 rounded-xl mb-4">
                        <button
                            onClick={() => setActiveTab('participants')}
                            className={cn("flex-1 py-1.5 text-sm font-medium rounded-lg transition-all", activeTab === 'participants' ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-gray-700")}
                        >
                            Participants (5)
                        </button>
                        <button
                            onClick={() => setActiveTab('chat')}
                            className={cn("flex-1 py-1.5 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2", activeTab === 'chat' ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-gray-700")}
                        >
                            Chat
                            <span className="bg-[#8B5CF6] text-white text-[10px] px-1.5 py-0.5 rounded-full">24</span>
                        </button>
                    </div>

                    {/* List */}
                    <div className="flex-1 overflow-y-auto pr-2">
                        <AnimatePresence mode="wait">
                            {activeTab === 'participants' ? (
                                <motion.div
                                    key="participants"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-4"
                                >
                                    {participants.map((participant, index) => (
                                        <motion.div
                                            key={participant.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex items-center justify-between group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <Avatar className="w-10 h-10 border border-gray-100">
                                                    <AvatarImage src={participant.image} alt={participant.name} />
                                                    <AvatarFallback>{participant.name.substring(0, 2)}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-900">{participant.name}</p>
                                                    <p className="text-xs text-gray-500">{participant.email}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <button className={cn("p-1.5 rounded-full", participant.isMuted ? "text-gray-400" : "text-[#8B5CF6]")}>
                                                    {participant.isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                                                </button>
                                                <button className={cn("p-1.5 rounded-full", participant.isVideoOn ? "text-[#8B5CF6]" : "text-gray-400")}>
                                                    {participant.isVideoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="chat"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                    className="h-full flex items-center justify-center text-gray-400 text-sm"
                                >
                                    <p>Chat messages would go here...</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

            </motion.div>
        </motion.div>
    );
}
