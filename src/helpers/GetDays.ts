export default function GetDays() {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const now = new Date();
    
    const bigDay = new Date(Date.UTC(2025, 6, 26, 1, 0, 0));
    
    // Converte para o timezone do usuário
    const bigDayLocal = new Intl.DateTimeFormat('en-US', { 
        timeZone,
        year: 'numeric', month: '2-digit', day: '2-digit', 
        hour: '2-digit', minute: '2-digit', second: '2-digit', 
        hour12: false 
    }).formatToParts(bigDay);

    const finalDate = new Date(`${bigDayLocal[4].value}-${bigDayLocal[0].value}-${bigDayLocal[2].value}T${bigDayLocal[6].value}:${bigDayLocal[8].value}:${bigDayLocal[10].value}`);

    const ms = finalDate.getTime() - now.getTime();

    const days = Math.ceil(ms / (1000 * 60 * 60 * 24));

    return days > 0 ? days : 0;
}