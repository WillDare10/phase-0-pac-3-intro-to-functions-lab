 function sayHiToHeadphonedRoommate(message) {
  if (message.toLowerCase() === "let's have dinner together!") {
    return "I would love to!";
  } else if (message === message.toUpperCase()) {
    return "YES INDEED!";
  } else if (message === message.toLowerCase()) {
    return "I can't hear you!";
  }
}
function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }