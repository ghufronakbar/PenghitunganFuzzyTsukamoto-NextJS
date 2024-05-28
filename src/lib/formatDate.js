const formatDate = (dateString) => {
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const date = new Date(dateString);
    
    const dayName = days[date.getUTCDay()];
    const day = date.getUTCDate();
    const monthName = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();    
    
    return `${dayName}, ${day} ${monthName} ${year}`;
  }
  const formatTime = (timeString) => {
    const date = new Date(timeString);
    
    const hour = date.getUTCHours()
    const minute = date.getUTCMinutes()
    const seconds = date.getUTCSeconds()
    
    return `${hour}:${minute}:${seconds}`;
  }
module.exports = {formatDate,formatTime}