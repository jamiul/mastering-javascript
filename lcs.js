function longestCommonSubstring(...strings) {
    if (strings.length === 0) {
        return;
    }

    const firstStr = strings[0];
    let longestSubstring = "";

    for (let start = 0; start < firstStr.length; start++) {
        for (let end = start + 1; end <= firstStr.length; end++) {
            const substring = firstStr.slice(start, end);

            if (strings.every(str => str.includes(substring))) {
                if (substring.length > longestSubstring.length) {
                    longestSubstring = substring;
                }
            }
        }
    }

    console.log(longestSubstring);
}

const args = process.argv.slice(2);

longestCommonSubstring(...args);
