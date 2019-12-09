const friends = require('friends');
const matcher = (req) => {
    for (let i=friends.length-1; i>=0; i--) {
        var lowest = 40;
        var bestMatch = {};
        let totalDifference = Math.abs(req[0] - friends[i].scores[0]) + Math.abs(req[1] - friends[i].scores[1]) + Math.abs(req[2] - friends[i].scores[2]) + Math.abs(req[3] - friends[i].scores[3]) + Math.abs(req[4] - friends[i].scores[4]) + Math.abs(req[5] - friends[i].scores[5]) + Math.abs(req[6] - friends[i].scores[6]) + Math.abs(req[7] - friends[i].scores[7]) + Math.abs(req[8] - friends[i].scores[8]) + Math.abs(req[9] - friends[i].scores[9]);
        if (totalDifference < lowest) {
            lowest = totalDifference;
            bestMatch = friends[i];
        }
        return bestMatch;
    }
}

module.exports = matcher