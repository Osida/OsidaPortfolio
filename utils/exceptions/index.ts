export class DataFetchingError extends Error {
    constructor(message = "Error fetching data from the server or API endpoint is not available.") {
        super(message);
        this.name = "DataFetchingError";
    }
}