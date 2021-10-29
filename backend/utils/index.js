export const formatDate = (dateString) => {
    const date = new Date(dateString);
    let day = date.getDate();
    if (day.length === 1) day = "0" + day;
    let month = (date.getMonth() + 1).toString();
    if (month.length === 1) month = "0" + month;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
};