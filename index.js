function shout(string)
{
    return string.toUpperCase();
}

function whisper(string)
{
    return string.toLowerCase();
}

function logShout(string)
{
    console.log(string.toUpperCase());
}

function logWhisper(string)
{
    console.log(string.toLowerCase());
}



function sayHiToHeadphonedRoommate(string)
{
    if(string === string.toLowerCase())
    {
        console.log("I can't hear you!");
    }

    else if(string === string.toUpperCase())
    {
        console.log("YES INDEED!");
    }

    else(string === "Let's have dinner together!")
    {
        console.log("I would love to!");
    }
}