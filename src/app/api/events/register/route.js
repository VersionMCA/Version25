import { getServerSession } from 'next-auth';
import { prisma } from '@/db/index.mjs';
import { authOptions } from "@/lib/auth.js";

export async function POST(req) {

    try {
        const session = await getServerSession(authOptions);
        if (!session || !session.user) {
            return new Response(JSON.stringify("Login to register the events", { status: 401 }));
        }
        const { eventId } = await req.json();

        if (!eventId) {
            return new Response(JSON.stringify("Event id is required", { status: 400 }));
        }

        const user = await prisma.user.findUnique({
            where: { email: session.user.email }
        })
        const event = await prisma.event.findUnique({
            where: { id: eventId }
        })
        // console.log(`userId: ${user.id} |||||||||||| eventId: ${event.id}`);
        if (eventId === event.id) {
            const newRegistration = await prisma.registration.create({
                data: {
                    userId: user.id,
                    eventId: event.id
                }
            })
            console.log(newRegistration);
            return new Response(JSON.stringify(newRegistration, { status: 201, message: "Successfully registered" }));
        }

    } catch (error) {
        console.log(error);   
        return new Response(JSON.stringify("Internal server error", { status: 500 }));
    }
}


