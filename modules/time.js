function getDate(structure, update) {

    let theCurrentTimeAndDate;

    let now = new Date();
    
    let current = {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate(),
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
    };

    if (typeof update === 'function') {
        update(current);
    }

    let y = current.year.toString();
    let m = current.month.toString().padStart(2, '0');
    let d = current.day.toString().padStart(2, '0');
    let h = current.hours.toString().padStart(2, '0');
    let min = current.minutes.toString().padStart(2, '0');
    let s = current.seconds.toString().padStart(2, '0');

    const formats = {

        'y': `${y}`,
        'y/m': `${y}/${m}`,
        'y/m/d': `${y}/${m}/${d}`,
        'y/m/d - h': `${y}/${m}/${d} - ${h}`,
        'y/m/d - h:m': `${y}/${m}/${d} - ${h}:${min}`,
        'y/m/d - h:m:s': `${y}/${m}/${d} - ${h}:${min}:${s}`,

        'y - h': `${y} - ${h}`,
        'y - h:m': `${y} - ${h}:${min}`,
        'y - h:m:s': `${y} - ${h}:${min}:${s}`,

        'm': `${m}`,
        'm/d': `${m}/${d}`,
        'm/d - h': `${m}/${d} - ${h}`,
        'm/d - h:m': `${m}/${d} - ${h}:${min}`,
        'm/d - h:m:s': `${m}/${d} - ${h}:${min}:${s}`,

        'd': `${d}`,
        'd - h': `${d} - ${h}`,
        'd - h:m': `${d} - ${h}:${min}`,
        'd - h:m:s': `${d} - ${h}:${min}:${s}`,

        'h': `${h}`,
        'h:m': `${h}:${min}`,
        'h:m:s': `${h}:${min}:${s}`,

        'min': `${min}`,
        'm:s': `${min}:${s}`,

        's': `${s}`,

        'date': `${y}/${m}/${d}`,
        'time': `${h}:${min}:${s}`,
        'date and time': `${y}/${m}/${d} - ${h}:${min}:${s}`,
        'time and date': `${y}/${m}/${d} - ${h}:${min}:${s}`   
    };

    theCurrentTimeAndDate = formats[structure] || `${y}/${m}/${d}`;

    return theCurrentTimeAndDate;

}

module.exports = { getDate };