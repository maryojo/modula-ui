"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ParticlesBackground } from "./particles-background"
import logo from "../../../public/logo_cloudsync.png"
import Image from "next/image"

export default function LoginPage() {
    return (
        <div className="dark font-sans relative w-full h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-end overflow-hidden bg-background text-foreground">
            <ParticlesBackground />

            <div className="relative z-10 w-full px-4 sm:px-6 md:px-20 py-6 md:py-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-28">
                <div className="hidden md:block max-w-xs 2xl:max-w-lg space-y-4">
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
                <Card className="w-full sm:w-[450px] glass-dark">
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
                        {/* <div className="relative flex justify-center text-xs uppercase">
              </div> */}
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
                            <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                            </svg>
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
