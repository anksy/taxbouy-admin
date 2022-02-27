export const BaseUri = process.env.REACT_APP_APIPATH;

export const httpVerbs = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
    PATCH: "PATCH",
}

export const promiseStatus = {
    PENDING: "pending",
    REJECTED: "rejected",
    FULFILLED: "fulfilled",
}