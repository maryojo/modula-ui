"use client"
import React from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarProvider,
    SidebarInset,
    SidebarFooter,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Search,
    SlidersHorizontal,
    Home,
    Grid,
    CalendarCheck,
    Heart,
    MapPin,
    Plus,
    Star,
    Coffee,
    Beer,
    Pizza,
    Soup,
    Sandwich,
    Martini,
    Carrot,
    Fish,
} from "lucide-react";

const categories = [
    { name: "Italian", icon: Pizza, color: "bg-gray-100" },
    { name: "Asian", icon: Soup, color: "bg-gray-100" },
    { name: "Bars", icon: Martini, color: "bg-red-50" },
    { name: "Burgers", icon: Sandwich, color: "bg-gray-100" },
    { name: "Cafe", icon: Coffee, color: "bg-gray-100" },
    { name: "Pubs", icon: Beer, color: "bg-gray-100" },
    { name: "Vegan", icon: Carrot, color: "bg-gray-100" },
    { name: "Seafood", icon: Fish, color: "bg-green-50" },
    { name: "More", icon: Plus, color: "bg-gray-100" },
];

const restaurants = [
    {
        id: 1,
        name: "Molon Lave",
        type: "Asian Kitchen",
        rating: 4.7,
        price: 30,
        distance: 0.2,
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop",
        bgColor: "bg-pink-50",
    },
    {
        id: 2,
        name: "Lureme",
        type: "Cocktail Bar",
        rating: 4.8,
        reviews: 50,
        price: 50,
        distance: 1.2,
        image: "https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=1000&auto=format&fit=crop",
        isSpecial: true,
        bgColor: "bg-orange-50",
    },
    {
        id: 3,
        name: "Boston Seafood",
        type: "SeaFood",
        rating: 3.9,
        price: 89,
        distance: 3.1,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop",
        bgColor: "bg-green-50",
    },
    {
        id: 4,
        name: "Powerhouse",
        type: "Vegan",
        rating: 4.2,
        price: 28,
        distance: 0.6,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop",
        bgColor: "bg-yellow-50",
    },
];

export default function ReservationsOverviewPage() {
    return (
        // <SidebarProvider>
            <div className="flex h-screen w-full bg-gray-50 overflow-hidden">

                {/* <SidebarInset className="flex-1 bg-white p-8 overflow-y-auto"> */}
                    <header className="flex items-center justify-between gap-8 mb-12">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            <Input
                                placeholder="Enter your search request..."
                                className="border-0 border-b border-gray-200 bg-transparent pl-8 rounded-none focus-visible:ring-0 px-0 placeholder:text-gray-400"
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <Button variant="ghost" size="icon">
                                <SlidersHorizontal className="h-5 w-5" />
                            </Button>
                            <Button className="bg-[#1a1a1a] text-white hover:bg-[#333] rounded-xl px-6">
                                Go to Premium
                            </Button>
                        </div>
                    </header>

                    {/* Title Section */}
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h1 className="text-4xl font-bold text-[#1a1a1a] mb-2">
                                Find the best place
                            </h1>
                            <p className="text-gray-500">
                                <span className="font-semibold text-[#1a1a1a]">249 restaurants</span>,
                                choose yours
                            </p>
                        </div>
                        <div className="flex gap-8">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-[#1a1a1a]">94</p>
                                <p className="text-sm text-gray-400">Specials</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-[#1a1a1a]">23</p>
                                <p className="text-sm text-gray-400">Delivery</p>
                            </div>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide mb-8">
                        {categories.map((category, index) => (
                            <div key={index} className="flex flex-col items-center gap-3 min-w-[80px] cursor-pointer group">
                                <div className={`flex h-16 w-16 items-center justify-center rounded-full ${category.color} transition-transform group-hover:scale-110`}>
                                    <category.icon className="h-6 w-6 text-[#1a1a1a]" />
                                </div>
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide group-hover:text-[#1a1a1a]">
                                    {category.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* New Restaurants & Slider */}
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-[#1a1a1a]">New restaurants</h2>
                        <div className="flex flex-col items-end gap-2 w-48">
                            <span className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded-full shadow-sm border border-gray-100">4 km</span>
                            <Slider defaultValue={[33]} max={100} step={1} className="w-full" />
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {restaurants.map((restaurant) => (
                            <Card
                                key={restaurant.id}
                                className={`border-0 shadow-none ${restaurant.bgColor} rounded-3xl overflow-hidden group cursor-pointer transition-all hover:shadow-lg`}
                            >
                                <CardContent className="p-4 pb-0">
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                                        <img
                                            src={restaurant.image}
                                            alt={restaurant.name}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {restaurant.isSpecial && (
                                            <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-bold shadow-sm">
                                                <Avatar className="h-4 w-4">
                                                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" />
                                                    <AvatarFallback>U</AvatarFallback>
                                                </Avatar>
                                                <span>{restaurant.rating}</span>
                                                <Star className="h-3 w-3 fill-black text-black" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-center mb-4">
                                        <h3 className="font-bold text-lg text-[#1a1a1a] mb-1">
                                            {restaurant.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">{restaurant?.type}</p>
                                    </div>
                                </CardContent>
                                {/* <CardFooter className="flex justify-between px-8 pb-6"> */}
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-1 mb-1">
                                        {restaurant.isSpecial ? (
                                            <Star className="h-3 w-3 fill-black text-black" />
                                        ) : (
                                            <Star className="h-3 w-3 fill-black text-black" />
                                        )}
                                    </div>
                                    <p className="text-lg font-bold text-[#1a1a1a]">{restaurant.isSpecial ? restaurant.rating : restaurant.rating}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xs text-gray-400 mb-1">$$$</p>
                                    <p className="text-lg font-bold text-[#1a1a1a]">{restaurant.price}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xs text-gray-400 mb-1">km</p>
                                    <p className="text-lg font-bold text-[#1a1a1a]">{restaurant.distance}</p>
                                </div>
                                {/* </CardFooter> */}
                            </Card>
                        ))}
                    </div>
                {/* </SidebarInset> */}
            </div>
        // </SidebarProvider>
    );
}
