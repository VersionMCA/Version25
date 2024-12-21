import getSession from 'next-auth/react';
import prisma from "@/db/index.mjs";
import toast from 'react-hot-toast';

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const session = await getSession();
    if (!session || !session.user) {
        return res.status(401).json({ message: "Login to register the events" });
    }
    
    

    const { eventId, teamName, participants } = req.body;

    if (!eventId) {
        return res.status(400).json({ message: "Event has finished!" });
    }

    try {
        const existingRegistration = await prisma.registration.findUnique({
            where: {
                userEmail_eventId: {
                    email: session.user.email,
                    eventId: eventId
                }
            }
        })

        if (existingRegistration) {
            return res.status(400).json({ message: "You have already registered for this event" })
        }

        const newRegistration = await prisma.registration.create({
            data: {
                userId: session.userId,
                eventId: eventId,
                teamName: teamName,
                participants: participants
            }
        })
        toast.success("Successfully registered");
        return res.status(201).json({ message: "Successfully registered", registration: newRegistration });
    } catch (error) {
        console.error(error);
        toast.error("Somthing went wrong");
        return res.status(500).json({ message: "Internal server error" });
    }
}

