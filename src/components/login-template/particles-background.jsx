"use client"

import { useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

export function ParticlesBackground() {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => {
            setInit(true)
        })
    }, [])

    if (!init) {
        return null
    }

    const options = {
        particles: {
            number: {
                value: 30,
                density: {
                    enable: true,
                    width: 800,
                    height: 800
                }
            },
            color: {
                value: "#FFFEE0"
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 0.5,
                animation: {
                    enable: false
                }
            },
            size: {
                value: { min: 1, max: 3 },
            },
            links: {
                enable: true,
                distance: 150,
                color: "#00FFFF",
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.1,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                    default: "out"
                },
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: false,
                    mode: "repulse"
                },
                onClick: {
                    enable: false,
                    mode: "push"
                },
                resize: {
                    enable: false
                }
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    quantity: 4
                }
            }
        },
        retina_detect: true
    }

    return (
        <Particles
            id="tsparticles"
            className="absolute inset-0 pointer-events-none"
            options={options}
        />
    )
}
