import { 
    MessageSquare, 
    MessageCircle, 
    Users, 
    Star, 
    Settings 
} from 'lucide-react';

export const data = {
    navItems: [
        {
            title: 'All Chats',
            url: '#',
            icon: MessageSquare,
            isActive: true,
        },
        {
            title: 'Direct Messages',
            url: '#',
            icon: MessageCircle,
            isActive: false,
        },
        {
            title: 'Groups',
            url: '#',
            icon: Users,
            isActive: false,
        },
        {
            title: 'Starred',
            url: '#',
            icon: Star,
            isActive: false,
        },
        {
            title: 'Settings',
            url: '#',
            icon: Settings,
            isActive: false,
        }
    ],
    chatList: [
        {
            id: 1,
            name: 'Sarah Johnson',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
            lastMessage: 'Hey! Did you see the new design mockups?',
            timestamp: '2m ago',
            unreadCount: 3,
            isOnline: true,
            isStarred: false,
        },
        {
            id: 2,
            name: 'Mike Chen',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
            lastMessage: 'Thanks for the help earlier!',
            timestamp: '15m ago',
            unreadCount: 0,
            isOnline: true,
            isStarred: true,
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
            lastMessage: 'Can we schedule a meeting for tomorrow?',
            timestamp: '1h ago',
            unreadCount: 1,
            isOnline: false,
            isStarred: false,
        },
        {
            id: 4,
            name: 'David Kim',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
            lastMessage: 'The project looks great! 🎉',
            timestamp: '2h ago',
            unreadCount: 0,
            isOnline: false,
            isStarred: true,
        },
        {
            id: 5,
            name: 'Lisa Anderson',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
            lastMessage: 'I\'ll send you the files in a bit',
            timestamp: '3h ago',
            unreadCount: 0,
            isOnline: true,
            isStarred: false,
        },
        {
            id: 6,
            name: 'James Wilson',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
            lastMessage: 'Let me know when you\'re free',
            timestamp: 'Yesterday',
            unreadCount: 2,
            isOnline: false,
            isStarred: false,
        },
        {
            id: 7,
            name: 'Anna Martinez',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna',
            lastMessage: 'Perfect, see you then!',
            timestamp: 'Yesterday',
            unreadCount: 0,
            isOnline: true,
            isStarred: false,
        },
        {
            id: 8,
            name: 'Tom Brown',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom',
            lastMessage: 'Got it, thanks!',
            timestamp: '2 days ago',
            unreadCount: 0,
            isOnline: false,
            isStarred: false,
        }
    ],
    groupChats: [
        {
            id: 1,
            name: 'Design Team',
            avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=DesignTeam',
            lastMessage: 'Sarah: The new color palette is ready',
            timestamp: '5m ago',
            unreadCount: 5,
            memberCount: 8,
            isStarred: true,
            members: ['Sarah Johnson', 'Mike Chen', 'Emily Rodriguez', 'David Kim', 'Lisa Anderson', 'James Wilson', 'Anna Martinez', 'Tom Brown'],
            messages: [
                { id: 1, sender: 'Sarah Johnson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', content: 'Hey team! I\'ve been working on the new color palette for the dashboard.', timestamp: '10:30 AM', isCurrentUser: false },
                { id: 2, sender: 'Mike Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike', content: 'Awesome! Can\'t wait to see it. What direction did you go with?', timestamp: '10:32 AM', isCurrentUser: false },
                { id: 3, sender: 'Sarah Johnson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', content: 'I went with a more vibrant set of colors. Think modern and energetic!', timestamp: '10:33 AM', isCurrentUser: false },
                { id: 4, sender: 'You', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You', content: 'That sounds great! I was hoping we\'d move away from the muted tones.', timestamp: '10:35 AM', isCurrentUser: true },
                { id: 5, sender: 'Emily Rodriguez', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily', content: 'I agree! The current palette feels too corporate. Fresh colors would be nice.', timestamp: '10:37 AM', isCurrentUser: false },
                { id: 6, sender: 'David Kim', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David', content: 'Just make sure we maintain accessibility standards for contrast ratios 👍', timestamp: '10:40 AM', isCurrentUser: false },
                { id: 7, sender: 'Sarah Johnson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', content: 'Definitely! I\'ve run all the combinations through the WCAG checker.', timestamp: '10:42 AM', isCurrentUser: false },
                { id: 8, sender: 'You', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You', content: 'Perfect! When can we see the final designs?', timestamp: '10:45 AM', isCurrentUser: true },
                { id: 9, sender: 'Sarah Johnson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', content: 'The new color palette is ready', timestamp: '10:48 AM', isCurrentUser: false }
            ]
        },
        {
            id: 2,
            name: 'Project Alpha',
            avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=ProjectAlpha',
            lastMessage: 'Mike: Meeting at 3 PM today',
            timestamp: '30m ago',
            unreadCount: 2,
            memberCount: 5,
            isStarred: false,
            members: ['Mike Chen', 'Emily Rodriguez', 'David Kim', 'Lisa Anderson', 'Tom Brown']
        },
        {
            id: 3,
            name: 'Marketing Squad',
            avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Marketing',
            lastMessage: 'Emily: Campaign results look promising!',
            timestamp: '1h ago',
            unreadCount: 0,
            memberCount: 6,
            isStarred: true,
            members: ['Emily Rodriguez', 'Sarah Johnson', 'Anna Martinez', 'James Wilson', 'Lisa Anderson', 'David Kim']
        },
        {
            id: 4,
            name: 'Dev Team',
            avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=DevTeam',
            lastMessage: 'David: Deployed to staging',
            timestamp: '2h ago',
            unreadCount: 1,
            memberCount: 10,
            isStarred: false,
            members: ['David Kim', 'Mike Chen', 'Tom Brown', 'James Wilson', 'Sarah Johnson', 'Emily Rodriguez', 'Lisa Anderson', 'Anna Martinez']
        },
        {
            id: 5,
            name: 'Weekend Plans',
            avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Weekend',
            lastMessage: 'Lisa: Who\'s up for hiking?',
            timestamp: '4h ago',
            unreadCount: 0,
            memberCount: 4,
            isStarred: false,
            members: ['Lisa Anderson', 'Anna Martinez', 'Sarah Johnson', 'Mike Chen']
        },
        {
            id: 6,
            name: 'Book Club',
            avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=BookClub',
            lastMessage: 'Anna: Next meeting is on Friday',
            timestamp: 'Yesterday',
            unreadCount: 0,
            memberCount: 7,
            isStarred: false,
            members: ['Anna Martinez', 'Emily Rodriguez', 'Lisa Anderson', 'Sarah Johnson', 'Tom Brown', 'James Wilson', 'David Kim']
        }
    ]
};