"use client"
import { useSession } from "next-auth/react";
import { React, useState, useEffect } from "react";

const EventCard = ({ event, isRegistered }) => {
    const { data: session, } = useSession();
    const [registered, setRegistered] = useState(isRegistered);

    useEffect(() => {
        setRegistered(isRegistered);
    }, [isRegistered]);


    const registerEvent = async () => {
        try {
            if (!session) {
                console.log("Login to register the events");
                return;
            }
            const res = await fetch('/api/events/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    eventId: event.id,
                })
            })
            const data = await res.json();
            // console.log(data);
            if (res.ok) {
                setRegistered(true);
            }
            else {
                console.log(data.message);
            }
        } catch (error) {
            console.log("Something went wrong. Please try again.");
        }
    }
    return (
        <div className="event-card bg-slate-400 flex flex-col items-center justify-center text-sz-2xl text-white p-4 w-1/4 h-[250px]">
            <img src='/profile_images/Chirag.jpg' alt="This is event image" className='overflow-hidden' />
            <h1>{event.title}</h1>
            <p>{event.description}</p>
            {
                (!registered) ? <button
                    className="mt-4 bg-blue-500 text-white p-2 rounded"
                    onClick={registerEvent}
                >
                    Register
                </button>
                    : <button className="mt-4 bg-gray-500 text-white p-2 rounded" disabled>
                        Registered
                    </button>
            }
        </div>
    );
}
export default EventCard;