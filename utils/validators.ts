// utils/validators.ts

/**
 * Validates if the given URL is valid.
 * @param {string} url - The URL to validate.
 * @returns {boolean} - Returns true if the URL is valid, otherwise false.
 */
function isValidURL(url: string): boolean {
    const pattern = /^(https?:\/\/)?(www\.)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/;
    return pattern.test(url);
}

/**
 * Extracts parameters from a URL query string.
 * @param {string} url - The URL to extract parameters from.
 * @returns {Object} - Returns an object containing the extracted parameters.
 */
function extractURLParameters(url: string): { [key: string]: string } {
    const params: { [key: string]: string } = {};
    const parser = new URL(url);
    const queryString = parser.search;
    const queryParams = new URLSearchParams(queryString);

    for (const [key, value] of queryParams.entries()) {
        params[key] = value;
    }
    return params;
}

// Export functions
export { isValidURL, extractURLParameters };