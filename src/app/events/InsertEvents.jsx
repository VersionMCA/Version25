"use client";
const InsertEvents = () => {
  const submitEvent = async (e) => {
    e.preventDefault();

    const eventName = e.target.eventName.value;
    const description = e.target.description.value;

    if (!eventName || !description) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const res = await fetch("/api/events/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventName,
          description,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        console.log("Event inserted successfully");
        e.target.eventName.value = "";
        e.target.description.value = "";
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h1>Insert Event</h1>
      <form className="flex flex-col gap-5 text-black" onSubmit={submitEvent}>
        <input
          type="text"
          required
          placeholder="Enter the event name"
          name="eventName"
        />
        <input
          type="text"
          required
          placeholder="Enter the event description"
          name="description"
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InsertEvents;
