import React from "react";
import {
    Search,
    Bell,
    LayoutDashboard,
    MessageSquare,
    Users,
    BarChart2,
    Dumbbell,
    Settings,
    HelpCircle,
    ChevronLeft,
    MoreHorizontal,
    Calendar as CalendarIcon,
    Filter,
    Check,
    Eye,
    Link as LinkIcon,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Pie, PieChart, Label } from "recharts";

const chartData = [
    { browser: "chrome", visitors: 70, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 30, fill: "var(--color-safari)" },
]

const chartConfig = {
    visitors: {
        label: "Sessions",
    },
    chrome: {
        label: "Completed",
        color: "hsl(217, 91%, 60%)", // Blue-600
    },
    safari: {
        label: "Remaining",
        color: "hsl(210, 40%, 96%)", // Slate-100 (or similar light color for empty part)
    },
}

const FitnessPage = () => {
    return (
        <div className="flex min-h-screen bg-neutral-100 font-sans text-slate-900">
            {/* <Sidebar /> */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <DashboardHeader />
                <div className="flex-1 overflow-auto p-8">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            Good morning, Summer <span className="text-2xl">👋</span>
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">Saturday, 26 Oct 2024</p>
                    </div>

                    <div className="flex gap-4 mb-6">
                        <TotalClientCard />
                        <TrainingSessionsCard />
                        <TrainingSessionsCard />
                    </div>

                    <div className="flex gap-6">
                        <AppointmentCard />
                        <ClientProgressCard />
                        {/* <AISuggestionsCard /> */}
                    </div>
                </div>
            </main>
        </div>
    );
};

const Sidebar = () => (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col hidden md:flex">
        <div className="p-6 flex items-center gap-2">
            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                <Dumbbell size={16} />
            </div>
            <span className="text-xl font-bold tracking-tight">Fitrack</span>
            <Button variant="ghost" size="icon" className="ml-auto h-8 w-8 bg-gray-100 rounded-md">
                <ChevronLeft size={16} />
            </Button>
        </div>

        <div className="px-4 py-2">
            <p className="text-xs font-semibold text-gray-400 mb-4 px-2">MAIN</p>
            <nav className="space-y-1">
                <NavItem icon={LayoutDashboard} label="Today" active />
                <NavItem icon={MessageSquare} label="Weekly" />
                <NavItem icon={Users} label="Goals" />
                <NavItem icon={BarChart2} label="Activity" />
                <NavItem icon={Dumbbell} label="Trends" />
                <NavItem icon={Dumbbell} label="Settings" />
            </nav>
        </div>

        <div className="px-4 py-2 mt-auto mb-8">
            <p className="text-xs font-semibold text-gray-400 mb-4 px-2">SUPPORT</p>
            <nav className="space-y-1">
                <NavItem icon={Settings} label="Setting" />
                <NavItem icon={HelpCircle} label="Help" />
            </nav>
        </div>

        <div className="p-4 border-t border-gray-100">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SY</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">Summer Yuri</p>
                    <p className="text-xs text-gray-500 truncate">Trainer</p>
                </div>
                <ChevronLeft className="h-4 w-4 text-gray-400 rotate-270" />
            </div>
            <p className="text-[10px] text-gray-400 mt-4 text-center">
                ©2024 Fitrack. All right reserved.
            </p>
        </div>
    </aside>
);

const DashboardHeader = () => (
    <header className="bg-white border-b border-gray-100 h-16 flex items-center justify-between px-8">
        <div className="flex items-center text-sm text-gray-500">
            <span>Main</span>
            <span className="mx-2">/</span>
            <span className="font-medium text-gray-900">Dashboard</span>
        </div>

        <div className="flex items-center gap-4">
            <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                    type="search"
                    placeholder="Search"
                    className="pl-9 bg-gray-50 border-none focus-visible:ring-1"
                />
                <div className="absolute right-2.5 top-2.5 flex items-center gap-1">
                    <span className="text-[10px] text-gray-400 border border-gray-200 rounded px-1">⌘/</span>
                </div>
            </div>
            <Button variant="ghost" size="icon" className="text-gray-500">
                <Bell size={20} />
            </Button>
        </div>
    </header>
);

const TotalClientCard = () => (
    <Card className="w-full border-none shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500">
                    <Users size={16} />
                </div>
                <CardTitle className="text-base font-medium">Total Client</CardTitle>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal size={16} />
            </Button>
        </CardHeader>
        <CardContent>
            <div className="flex items-end gap-4 mb-8">
                <span className="text-4xl font-bold">2,000</span>
                <Badge variant="secondary" className="bg-green-50 text-green-600 hover:bg-green-100 mb-1">
                    <div className="h-3 w-3 rounded-full bg-green-500 flex items-center justify-center mr-1">
                        <Check size={8} className="text-white" />
                    </div>
                    25%
                </Badge>
                <span className="text-sm text-gray-500 mb-1">vs last month</span>
            </div>

            <div className="grid grid-cols-3 gap-8">
                <StatColumn label="Intermediate" value="750" percentage="37.5%" color="bg-blue-200" />
                <StatColumn label="Advanced" value="550" percentage="27.5%" color="bg-blue-600" />
            </div>
        </CardContent>
    </Card>
);

const TrainingSessionsCard = () => (
    <Card className="w-full border-none shadow-sm flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500">
                    <Dumbbell size={16} />
                </div>
                <CardTitle className="text-base font-medium">
                    Number of training sessions
                </CardTitle>
            </div>
            <Select defaultValue="week">
                <SelectTrigger className="w-[100px] h-8 text-xs">
                    <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
            </Select>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col items-center justify-center pb-6">
            <div className="flex-1 w-full min-h-[200px] flex items-center justify-center relative">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[200px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="browser"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-gray-400 text-xs"
                                                >
                                                    Total
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    16
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
                {/* Floating badge for 70% */}
                <div className="absolute top-1/4 right-1/4 transform translate-x-2 -translate-y-2 bg-white px-2 py-1 rounded-full shadow-sm border text-xs font-bold text-gray-700 z-10">
                    70%
                </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
                <Badge
                    variant="secondary"
                    className="bg-green-50 text-green-600 hover:bg-green-100"
                >
                    <div className="h-3 w-3 rounded-full bg-green-500 flex items-center justify-center mr-1">
                        <Check size={8} className="text-white" />
                    </div>
                    15%
                </Badge>
                <span className="text-gray-500">vs last week</span>
            </div>

            <div className="w-full mt-6 space-y-2">
                <div className="flex flex-col justify-between text-xs">
                    <span className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-chrome)]"></div>{" "}
                        Weekly session goals
                    </span>
                    <span className="font-medium text-green-600">
                        20 Sessions
                    </span>
                </div>
                <div className="flex justify-between text-xs">
                    <span className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-safari)]"></div>{" "}
                        Average sessions per client
                    </span>
                    <span className="font-medium text-green-600">
                        3 Sessions
                    </span>
                </div>
            </div>
        </CardContent>
    </Card>
);

const AppointmentCard = () => (
    <Card className="w-full border-none shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500">
                    <CalendarIcon size={16} />
                </div>
                <CardTitle className="text-base font-medium">Appointment</CardTitle>
            </div>
            <Button variant="outline" size="sm" className="h-8 text-xs font-normal text-gray-500">
                <CalendarIcon size={12} className="mr-2" />
                21 Oct 2024 - 27 Oct 2024
            </Button>
        </CardHeader>
        <CardContent>
            {/* Calendar Strip */}
            <div className="flex justify-between mb-6">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                    <div key={day} className={`flex flex-col items-center p-2 rounded-lg ${i === 5 ? 'bg-cyan-500 text-white' : 'hover:bg-gray-50'}`}>
                        <span className={`text-[10px] ${i === 5 ? 'text-white' : 'text-gray-400'}`}>{day}</span>
                        <span className="text-sm font-medium mt-1">{21 + i}</span>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-2 mb-4">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-3 w-3 text-gray-400" />
                    <Input placeholder="Search client" className="pl-8 h-9 text-xs bg-white" />
                </div>
                <Button variant="outline" size="sm" className="h-9 px-3">
                    <Filter size={14} className="mr-2" /> Filter
                </Button>
            </div>

            <div className="space-y-3">
                <AppointmentItem name="David Lee" time="08:30 AM" type="Exercise" status="On Schedule" image="https://github.com/shadcn.png" />
                <AppointmentItem name="Sarah Kim" time="03:00 PM" type="Consultation" status="Cancel" image="https://github.com/shadcn.png" />
                <AppointmentItem name="Ihan Dua" time="05:00 PM" type="Exercise" status="On Schedule" image="https://github.com/shadcn.png" />
            </div>
        </CardContent>
    </Card>
);

const ClientProgressCard = () => (
    <Card className="w-full border-none shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500">
                    <BarChart2 size={16} />
                </div>
                <CardTitle className="text-base font-medium">Client Progress</CardTitle>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal size={16} />
            </Button>
        </CardHeader>
        <CardContent>
            <div className="flex bg-gray-50 p-1 rounded-lg mb-6">
                <Button variant="ghost" className="flex-1 bg-white shadow-sm h-8 text-xs font-medium">Weekly Target</Button>
                <Button variant="ghost" className="flex-1 h-8 text-xs text-gray-500">Monthly Target</Button>
            </div>

            <div className="space-y-6">
                <ProgressItem name="Lucas Kim" status="On Track" value={75} color="bg-blue-600" />
                <ProgressItem name="Sophia Chen" status="Overachieving" value={88} color="bg-cyan-500" />
                <ProgressItem name="Ariana Lee" status="Below the target" value={40} color="bg-pink-500" />
            </div>
        </CardContent>
    </Card>
);

const AISuggestionsCard = () => (
    <Card className="col-span-1 border-none shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500">
                    <div className="relative">
                        <div className="absolute -top-1 -right-1 h-2 w-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <Users size={16} /> {/* Using Users as placeholder for sparkles/AI icon */}
                    </div>
                    <CardTitle className="text-base font-medium">AI Suggestions</CardTitle>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal size={16} />
                </Button>
            </div>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
                <SuggestionItem
                    text={<span>Suggest <span className="text-cyan-600 font-medium">Sarah Kim</span> to incorporate 10 minutes of stretching after each workout for better flexibility.</span>}
                />
                <SuggestionItem
                    text={<span>Remind <span className="text-cyan-600 font-medium">Amanda Ros</span> to take short breaks during long cardio sessions to maintain energy levels.</span>}
                />
                <SuggestionItem
                    text={<span>Recommend <span className="text-cyan-600 font-medium">Spring Alexander</span> foods like sweet potatoes, oats, and avocado.</span>}
                />
                <SuggestionItem
                    text={<span>Encourage <span className="text-cyan-600 font-medium line-through">David Lee</span> to increase protein intake to support muscle recovery.</span>}
                    checked
                />
            </div>
        </CardContent>
    </Card>
);

// Helper Components

const NavItem = ({ icon: Icon, label, active, badge }) => (
    <div
        className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer group ${active ? "bg-white shadow-sm border border-gray-100" : "hover:bg-gray-50"
            }`}
    >
        <div className="flex items-center gap-3">
            <Icon size={18} className={active ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"} />
            <span className={`text-sm font-medium ${active ? "text-gray-900" : "text-gray-500 group-hover:text-gray-900"}`}>
                {label}
            </span>
        </div>
        {badge && (
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">
                {badge}
            </span>
        )}
    </div>
);

const StatColumn = ({ label, value, percentage, color }) => (
    <div>
        <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold">{value}</span>
            <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-300">
                <Eye size={14} />
            </Button>
        </div>
        <p className="text-sm text-gray-500 mb-3">{label}</p>
        <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{percentage}</span>
            <div className={`h-2 w-full rounded-full bg-gray-100 overflow-hidden`}>
                <div className={`h-full ${color}`} style={{ width: percentage }}></div>
            </div>
        </div>
    </div>
);

const AppointmentItem = ({ name, time, type, status, image }) => (
    <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-white">
        <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
                <AvatarImage src={image} />
                <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div>
                <p className="text-sm font-semibold text-gray-900">{name}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{time}</span>
                    <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                    <span>{type}</span>
                </div>
            </div>
        </div>
        <Badge variant="secondary" className={`font-normal ${status === 'Cancel' ? 'bg-pink-50 text-pink-500' : 'bg-blue-50 text-blue-600'}`}>
            {status}
        </Badge>
    </div>
);

const ProgressItem = ({ name, status, value, color }) => (
    <div>
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900">{name}</span>
                <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                <span className="text-xs text-gray-500">{status}</span>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400">
                    <Eye size={14} />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400">
                    <LinkIcon size={14} />
                </Button>
            </div>
        </div>
        <div className="flex items-center gap-3">
            <Progress value={value} className="h-2" indicatorColor={color} />
            <span className="text-xs font-medium text-gray-500 w-8 text-right">{value}%</span>
        </div>
    </div>
);

const SuggestionItem = ({ text, checked }) => (
    <div className="flex items-start gap-3">
        <Checkbox id="terms" checked={checked} className="mt-1 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500" />
        <label
            htmlFor="terms"
            className={`text-sm leading-relaxed ${checked ? 'text-gray-400 line-through' : 'text-gray-600'}`}
        >
            {text}
        </label>
    </div>
);

export default FitnessPage;
