export const generateRandomColor = () => {
    const colors = ["#FFCCCC", "#CCCCFF", "#CCFFCC", "#FFFF99", "#FFCCFF", "#FFDDCC"];
    return colors[Math.floor(Math.random() * colors.length)];
};