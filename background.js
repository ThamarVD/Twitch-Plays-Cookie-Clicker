smallSupport.remove();
//techUpgrades.remove();

const client = new tmi.Client({
	channels: [ '<YOUR TWITCH USERNAME HERE>' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	console.log(`${tags['display-name']}: ${message}`);
	document.getElementById("commentsText").innerText = (`${tags['display-name']}: ${message}`);
    newChat(`${message}`);
});
