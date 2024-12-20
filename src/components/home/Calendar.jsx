'use client'
import React,{useState} from "react";

function Calendar(){
    const [model , setModel] = useState(false);

    const openModel = ()=>{
        setModel(true);
    }
    const closeModel = ()=>{
        setModel(false);
    }

    const D1Events = [
        {
            time: "10:00 am - 5:00 pm",
            duration: "Day 1/3",
            name : "Saturnalia Carnival",
            location : "SBOP Lawns"
        },
        {
            time: "10:00 am - 5:00 pm",
            duration: "Day 1/3",
            name : "Gel Blaster",
            location : "GR-1"
        },
        {
            time: "10:00 am - 5:00 pm",
            duration: "Day 1/3",
            name : "Laser Tag",
            location : "NOX Room"
        },
        {
            time: "10:00 am - 5:00 pm",
            duration: "Day 1/3",
            name : "Bullet Echo(Krafton Experience Zone)",
            location : "Acticity Space 2"
        }
    ]

    const D2Events = [
        {
            time: "10:00 am - 5:00 pm",
            duration: "Day 1/3",
            name : "Saturnalia Carnival",
            location : "SBOP Lawns"
        },
        {
            time: "10:00 am - 5:00 pm",
            duration: "Day 1/3",
            name : "Gel Blaster",
            location : "GR-1"
        },
        {
            time: "10:00 am - 5:00 pm",
            duration: "Day 1/3",
            name : "Laser Tag",
            location : "NOX Room"
        },
        {
            time: "10:00 am - 5:00 pm",
            duration: "Day 1/3",
            name : "Bullet Echo(Krafton Experience Zone)",
            location : "Acticity Space 2"
        }
    ]

    const D3Events = [
        {
            time: "10:00 am - 5:00 pm",
            duration: "Day 1/3",
            name : "Saturnalia Carnival",
            location : "SBOP Lawns"
        },
        {
            time: "10:00 am - 5:00 pm",
            duration: "Day 1/3",
            name : "Gel Blaster",
            location : "GR-1"
        },
        {
            time: "10:00 am - 5:00 pm",
            duration: "Day 1/3",
            name : "Laser Tag",
            location : "NOX Room"
        },
        {
            time: "10:00 am - 5:00 pm",
            duration: "Day 1/3",
            name : "Bullet Echo(Krafton Experience Zone)",
            location : "Acticity Space 2"
        }
    ]
    return(
        <>
            <button onClick={openModel} className=" text-[#BFF205] px-4 py-2 rounded mt-2" style={{background:'#0D0C0C'}}> 
                Calender</button>
            {model &&
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center w-full"
                onClick={() => setTimeout(closeModel,10)}
                >
                <div className="bg-white rounded-lg h-[96vh] shadow-lg w-3/5 " style={{background:'#0D0C0C'}}
                onClick={(e) => e.stopPropagation()}>
                  <div className="flex flex-col justify-center items-center p-4 border-b">
                    <h2 className="text-4xl font-bold mb-10 mt-4" style={{color:'#BFF205'}}>Calender</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="584" height="80" viewBox="0 0 584 70" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M99.2707 14.8496V53.9196H114.343V42.7776H153.607V27.8016H114.343V15.7056H163.111V0.729589H114.421V14.8496H99.2707ZM568.421 0.729589H567.972L544.644 28.6656L521.22 0.729589H520.421V23.8496H505.86V69.8496H520.74V23.5776L544.644 51.8976L568.421 23.518V0.729589ZM568.452 23.8496V69.8496H583.428V0.729589H583.421V23.8496H568.452ZM301.421 0.729589H261.407C258.847 0.729589 256.479 1.36959 254.303 2.64959C252.127 3.92959 250.399 5.65759 249.119 7.83359C247.839 9.94559 247.199 12.3136 247.199 14.9376V54.8496H261.421V69.8496H302.111C304.671 69.8496 307.007 69.2096 309.119 67.9296C311.295 66.6496 313.023 64.9216 314.303 62.7456C315.647 60.5696 316.319 58.2016 316.319 55.6416V15.8496H301.421V0.729589ZM326.891 54.8496V15.8496H341.421V0.729589H395.819V15.7056H344.939C343.915 15.7056 343.115 15.9616 342.539 16.4736C342.027 16.9856 341.771 17.7856 341.771 18.8736V51.7056C341.771 52.7296 342.027 53.5296 342.539 54.1056C343.115 54.6176 343.915 54.8736 344.939 54.8736H395.819V69.8496H341.421V54.8496H326.891ZM40.8135 69.8496L0.781494 0.729589H18.0615L47.0535 50.9376L76.0455 0.729589H93.2295L53.1975 69.8496H40.8135ZM114.421 69.8496V54.8736H163.111V69.8496H114.421ZM172.675 54.8496V0.633591H187.555V54.8736H241.795V69.8496H187.421V54.8496H172.675ZM262.079 54.8736H301.247V15.7056H262.079V54.8736ZM403.429 69.8496V0.729589H418.117V69.8496H403.429ZM441.048 54.8496V0.729589H426.168V54.8496H441.048ZM480.421 53.8496H495.288V0.729589H480.216V54.8736H441.421V69.8496H480.421V53.8496Z" fill="#E2F6C2"/>
                        <path d="M38.17 65.331L55.3132 66.2046L53.2166 69.9196H40.8561L38.17 65.331Z" fill="#ADF43A"/>
                        <path d="M47.0055 50.6778L55.2695 66.2264L38.2145 65.37L47.0055 50.6778Z" fill="#ADF43A"/>
                        <path d="M46.7969 52.5461L54.1248 66.0401L46.7969 61.3211L39.3092 65.2055L46.7969 52.5461Z" fill="#4A6919"/>
                        </svg>
                  </div>
                  <div className="text-left h-[65vh] overflow-y-auto scrollbar-hidden" style={{background:'#0D0C0C'}}>
                    <div className="p-6">
                        <h2 className="text-black-600 text-2xl font-bold mb-4" style={{color:'#BFF205'}}>March 2025</h2>
                        <div className=" text-xl font-bold mb-6" style={{color:'#D7F205'}}>Sat 16th</div>
                        <div className="space-y-4">
                        {D1Events.map((event) => (
                            <EventRow key={event.name} time={event.time} duration={event.duration} name={event.name} location={event.location}/>
                        ))}
                        </div>    
                    </div>
                    <div className="p-6">
                        <div className=" text-xl font-bold mb-6" style={{color:'#D7F205'}}>Sat 17th</div>
                        <div className="space-y-4">
                        {
                         D2Events.map((event) => (
                            <EventRow key={event.name} time={event.time} duration={event.duration} name={event.name} location={event.location}/>
                        ))   
                        }
                        </div>    
                    </div>
                    <div className="p-6" >
                        <div className="text-xl font-bold mb-6" style={{color:'#D7F205'}}>Sat 18th</div>
                        <div className="space-y-4">
                        {
                         D3Events.map((event) => (
                            <EventRow key={event.name} time={event.time} duration={event.duration} name={event.name} location={event.location}/>
                        ))   
                        }
                        </div>    
                    </div>
                    </div>
                    </div>    
              </div>
            }
        </>
    )
}

function EventRow({time,duration,name, location}){
    
    return(
        <>
            <div className="p-4 rounded-md shadow-md" style={{background:'#BFF205'}}>
                <pre className="text-black text-lg font-semibold">{`${time}      ${duration}`}</pre>
                <p className="text-black text-xl font-bold mt-2">{name}</p>
                <p className="text-black text-md font-semibold mt-1">{location}</p>
            </div>
        </>
    )
}

export default Calendar

