// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
document.body.setAttribute('data-theme', 'light');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
});

// Improved Pronoun Removal Function
function removePronouns(text) {
    const pronouns = ['i', 'me', 'my', 'mine', 'myself',
                     'you', 'your', 'yours', 'yourself',
                     'he', 'him', 'his', 'himself',
                     'she', 'her', 'hers', 'herself',
                     'they', 'them', 'their', 'theirs', 'themself'];

    return text.split(/\b/)
        .filter(word => {
            const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
            return !pronouns.includes(cleanWord);
        })
        .join('')
        .replace(/\s+/g, ' ')      // Replace multiple spaces with single space
        .replace(/(\s)([,.!?])/g, '$2')  // Fix punctuation spacing
        .trim();
}

// Process Button Handler
document.getElementById('process-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const cleanedText = removePronouns(inputText);
    document.getElementById('output-text').value = cleanedText;
});