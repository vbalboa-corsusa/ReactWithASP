/* eslint-disable @typescript-eslint/no-explicit-any */
export function createConnection({ serverUrl, roomId }: { serverUrl: any; roomId: any; }) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('? Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('? Disconnected from "' + roomId + '" room at ' + serverUrl);
    }
  };
}
