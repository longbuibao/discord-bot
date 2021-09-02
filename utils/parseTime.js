function parseTime(time) {
    const b = time.match(/\d+/g);

    // return undefined if no matches
    if (!b) return;

    const d = new Date();
    d.setHours(b[0] > 12 ? b[0] : b[0] % 12 + (/p/i.test(time) ? 12 : 0), // hours
        /\d/.test(b[1]) ? b[1] : 0, // minutes
        /\d/.test(b[2]) ? b[2] : 0); // seconds

    return d - Date.now();
}

module.exports = parseTime