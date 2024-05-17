export const ShowDate = (string, hours) => {
    const date = new Date(string);
    const day = date.getDate().toString().padStart(2,"0");
    const month = (date.getMonth()+1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().padStart(4, "0");
    const hour = date.getHours().toString().padStart(2,"0");
    const minute = date.getMinutes().toString().padStart(2,"0");

    return `${day}. ${month}. ${year} ${hour}:${minute}`;
};