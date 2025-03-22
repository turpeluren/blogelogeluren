exports.handler = async (event) => {
    const webhookUrl = process.env.DISCORD_WEBHOOK;

    const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: event.body,
    });

    return {
        statusCode: response.status,
        body: JSON.stringify(await response.json()),
    };
};