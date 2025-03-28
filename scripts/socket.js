export function handleSocketEvent({ action = null, data = {} } = {}) {
    switch (action) {
      case socketEvent.ResetTheme:
        Hooks.callAll(socketEvent.ResetTheme, {});
    }
  }
  
  export const socketEvent = {
    ResetTheme: "ResetTheme",
  };
  