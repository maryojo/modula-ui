"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ParticlesBackground } from "./particles-background"
import logo from "../../../public/logo_cloudsync.png"
import google from "../../../public/google.svg"
import Image from "next/image"

export default function LoginPage() {
    return (
        <div className="dark font-sans w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-end overflow-hidden bg-background text-foreground">
            <ParticlesBackground />

            <div className=" z-10 px-4 sm:px-6 md:px-20 py-6 md:py-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-28">
                <div className="hidden md:block space-y-4 w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={65}
                            height={65}
                        />
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">Secure, Scalable and Seamless</h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground">Empowering businesses with world-class cloud computing infrastructure and 99.9% uptime. Managed, monitored and optimized for your growth.</p>
                </div>
                <Card className="w-full sm:w-1/2 glass-dark">
                    <CardHeader className="space-y-1 ">
                        <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight">Welcome back</CardTitle>
                        <CardDescription className="text-sm sm:text-base text-muted-foreground/80">
                            Enter your email to sign in to your account
                        </CardDescription>
                    </CardHeader>
                    <div className="relative my-1">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-muted-foreground/20" />
                        </div>
                    </div>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm">Email</Label>
                            <Input id="email" placeholder="m@example.com" required type="email" className="bg-white/5 backdrop-blur-sm border-white/10 focus:bg-white/10 focus:border-white/20 transition-all text-sm" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm">Password</Label>
                            <Input id="password" required placeholder="********" type="password" className="bg-white/5 backdrop-blur-sm border-white/10 focus:bg-white/10 focus:border-white/20 transition-all text-sm" />
                        </div>
                        <Button className="w-full bg-cyan-500 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow text-sm sm:text-base" type="submit">
                            Sign In
                        </Button>

                        <div className="relative my-2 mb-3">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-muted-foreground/20" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-transparent px-2 text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <Button variant="outline" className="w-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:text-white text-sm sm:text-base" onClick={() => { }}>
                            <Image
                                src={google}
                                alt="Google"
                                width={16}
                                height={16}
                            />
                            Google
                        </Button>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2 text-center text-xs sm:text-sm text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors hover:underline">
                            Forgot your password?
                        </a>
                        <div className="text-xs">
                            Don't have an account?{" "}
                            <a href="#" className="font-medium text-primary hover:underline transition-colors">
                                Sign up for free
                            </a>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
