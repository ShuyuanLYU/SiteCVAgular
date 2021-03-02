exports.getLocaleTimeString = function() {
    const date = new Date();
    const date_locale = date.toLocaleDateString({
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
    const time_locale = date.toLocaleTimeString();

    return `le ${date_locale} à ${time_locale}`;
}