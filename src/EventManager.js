const events = {};

const EVENTS = {
    ON_DICE : "ON_DICE"
};

Object.freeze(EVENTS);

const registerListener = (eventName, callback) => {
    if(!eventName || !callback) return;
    try {
        if (!events[eventName]) {
            events[eventName] = [];
        }
        
        const duplicate = events[eventName].find((listener) => {
            return listener.callback == callback;
        });

        if (!duplicate) {
            events[eventName].push({ callback});
        }
    } catch (error) {
        console.error('@error : ',error)
    }

};

const unregisterListener = (eventName, callback) => {
    try {
        if (events[eventName]) {
            events[eventName] = events[eventName].filter(cb => cb.callback != callback);
        }
    } catch (error) {
        console.error('@error : ',error)
    }
  };
 
const fireEvent = (eventName, payload) => {
    if (events[eventName]) {
        const listeners = events[eventName];
        listeners.forEach((listener) => {       
            try {
                listener.callback.call(this,payload);
            } catch (error) {
                console.error('@eventName : ',eventName) &&
                console.error('@listener : ',listener) &&
                console.error('@payload : ',payload) &&
                console.error('@error : ',error)
            }
        });
    }
};

export {
    registerListener,
    unregisterListener,
    fireEvent,
    EVENTS
};
 