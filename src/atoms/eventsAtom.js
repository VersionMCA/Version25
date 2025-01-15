import { atom } from "jotai";

const addEvent = (events, item) => [...events, item];

const updateEvent = (events, item) =>
  events.map((event) => (event.id === item.id ? item : event));

const removeEvent = (events, id) => events.filter((event) => event.id !== id);

// Atoms
export const eventsAtom = atom([]);

export const newEventAtom = atom({});

export const addEventAtom = atom(
  () => {},
  (get, set) => {
    set(eventsAtom, addEvent(get(eventsAtom), get(newEventAtom)));
    set(newEventAtom, {});
  },
);

export const updateEventAtom = atom(
  () => {},
  (get, set, item) => {
    set(eventsAtom, updateEvent(get(eventsAtom), item));
  },
);

export const removeEventAtom = atom(
  () => {},
  (get, set, id) => {
    set(eventsAtom, removeEvent(get(eventsAtom), id));
  },
);

export const eventByIdAtom = atom(
  (get) => (id) => get(eventsAtom).find((event) => event.id == parseInt(id)),
  () => {},
);
